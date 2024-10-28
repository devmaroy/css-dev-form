import { z } from "zod";

export const formSchema = z.object({
  personalInformation: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[1-9]\d{1,14}$/, "Enter a valid phone number format"),
    email: z.string().email("Enter a valid email"),
    birthDate: z
      .date()
      .nullable()
      .refine((val) => val !== null, {
        message: "Date of birth is required",
      }),
  }),
  employmentDetails: z.object({
    jobTitle: z.string().min(1, "Job title is required"),
    department: z.string().min(1, "Please select a department"),
    employmentType: z.string().min(1, "Employment type is required"),
    startDate: z
      .date()
      .nullable()
      .refine((val) => val !== null, {
        message: "Date of birth is required",
      }),
  }),
  contactInformation: z.object({
    addressLineOne: z.string().min(1, "Address Line 1 is required"),
    addressLineTwo: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State/Province is required"),
    postalCode: z
      .string()
      .min(1, "Postal code is required")
      .min(5, "Postal code must be at least 5 characters")
      .max(10, "Postal code cannot exceed 10 characters")
      .regex(/^[0-9]+$/, "Postal code must contain only numbers"),
  }),
  emergencyContact: z
    .object({
      name: z.string().optional(),
      relationship: z.string().optional(),
      phone: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, "Enter a valid phone number")
        .optional()
        .or(z.literal("")),
      email: z
        .string()
        .email("Enter a valid email")
        .optional()
        .or(z.literal("")),
    })
    .optional(),
  preferencesAgreements: z.object({
    flexibleSchedule: z.boolean(),
    remoteWork: z.boolean(),
    privacyPolicy: z.boolean().refine((val) => val === true, {
      message: "You must agree to the policies",
    }),
    additionalNote: z.string().optional(),
  }),
});
