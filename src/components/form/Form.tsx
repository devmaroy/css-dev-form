import { useState } from "react";

import { FormGroup } from "@/components/form/FormGroup";
import { InputCheckboxField } from "@/components/form/InputCheckboxField";
import { InputDatePicker } from "@/components/form/InputDatePicker";
import { InputField } from "@/components/form/InputField";
import { InputSelectField } from "@/components/form/InputSelectField";
import { InputTextAreaField } from "@/components/form/InputTextAreaField";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import {
  citiesOptions,
  departmentOptions,
  employmentTypeOptions,
  relationshipsOptions,
  statesOptions,
} from "@/data";
import { formSchema } from "@/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormData = z.infer<typeof formSchema>;

export const Form = () => {
  const [isPending, setIsPending] = useState(false);

  const methods = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalInformation: {},
      employmentDetails: {},
      contactInformation: {},
      emergencyContact: {},
      preferencesAgreements: {},
    },
  });

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isValid },
  } = methods;

  const fakeApiCall = () => {
    return new Promise((resolve) => setTimeout(resolve, 5000)); // 5-second delay
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsPending(true);
      await fakeApiCall();
      reset();
      toast.success("Form submitted successfully!");

      console.log("------------------------");
      console.log(data);
      console.log("------------------------");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div id="personal-information" className="space-y-4">
          <Title icon="user">Personal Information</Title>
          <FormGroup>
            <InputField
              name="personalInformation.firstName"
              label="First name"
              placeholder="John"
              withAsterisk
              register={register}
              error={errors.personalInformation?.firstName?.message}
            />
            <InputField
              name="personalInformation.lastName"
              label="Last name"
              placeholder="Doe"
              withAsterisk
              register={register}
              error={errors.personalInformation?.lastName?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputField
              name="personalInformation.phone"
              label="Phone number"
              placeholder="+1 (555) 123-4567"
              withAsterisk
              register={register}
              error={errors.personalInformation?.phone?.message}
            />
            <InputField
              name="personalInformation.email"
              label="Email address"
              placeholder="john.doe@bluecollab.com"
              withAsterisk
              register={register}
              error={errors.personalInformation?.email?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputDatePicker
              name="personalInformation.birthDate"
              label="Date of Birth"
              placeholder="DD.MM.YYYY"
              withAsterisk
              control={control}
              error={errors.personalInformation?.birthDate?.message}
            />
          </FormGroup>
        </div>

        <div id="employment-details" className="space-y-4">
          <Title icon="briefcase-business">Employment Details</Title>
          <FormGroup>
            <InputField
              name="employmentDetails.jobTitle"
              label="Job Title"
              placeholder="Sofware Engineer"
              withAsterisk
              register={register}
              error={errors.employmentDetails?.jobTitle?.message}
            />

            <InputSelectField
              name="employmentDetails.department"
              label="Department"
              placeholder="Select department"
              withAsterisk
              options={departmentOptions}
              control={control}
              error={errors.employmentDetails?.department?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputSelectField
              name="employmentDetails.employmentType"
              label="Employment Type"
              placeholder="Select employment"
              withAsterisk
              options={employmentTypeOptions}
              control={control}
              error={errors.employmentDetails?.employmentType?.message}
            />
            <InputDatePicker
              name="employmentDetails.startDate"
              label="Start Date"
              placeholder="DD.MM.YYYY"
              withAsterisk
              control={control}
              error={errors.employmentDetails?.startDate?.message}
            />
          </FormGroup>
        </div>

        <div id="contact-information" className="space-y-4">
          <Title icon="contact">Contact Information</Title>
          <FormGroup>
            <InputField
              name="contactInformation.addressLineOne"
              label="Address Line 1"
              placeholder="123 Main St"
              withAsterisk
              register={register}
              error={errors.contactInformation?.addressLineOne?.message}
            />
            <InputField
              name="contactInformation.addressLineTwo"
              label="Address Line 2"
              placeholder="Apt 4B"
              register={register}
              error={errors.contactInformation?.addressLineTwo?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputSelectField
              name="contactInformation.city"
              label="City"
              placeholder="Select city"
              withAsterisk
              options={citiesOptions}
              control={control}
              error={errors.contactInformation?.city?.message}
            />
            <InputSelectField
              name="contactInformation.state"
              label="State/Province"
              placeholder="Select state"
              withAsterisk
              options={statesOptions}
              control={control}
              error={errors.contactInformation?.state?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputField
              name="contactInformation.postalCode"
              label="Postal Code"
              placeholder="10001"
              withAsterisk
              register={register}
              error={errors.contactInformation?.postalCode?.message}
            />
          </FormGroup>
        </div>

        <div id="emergency-contact" className="space-y-4">
          <Title icon="receipt-text">Emergency Contact</Title>
          <FormGroup>
            <InputField
              name="emergencyContact.name"
              label="Contact name"
              placeholder="Jane Doe"
              register={register}
              error={errors.emergencyContact?.name?.message}
            />
            <InputSelectField
              name="emergencyContact.relationship"
              label="Relationship"
              placeholder="Select relationship"
              options={relationshipsOptions}
              control={control}
              error={errors.emergencyContact?.relationship?.message}
            />
          </FormGroup>
          <FormGroup>
            <InputField
              name="emergencyContact.phone"
              label="Phone number"
              placeholder="+1 (555) 123-4567"
              register={register}
              error={errors.emergencyContact?.phone?.message}
            />
            <InputField
              name="emergencyContact.email"
              label="Email address"
              placeholder="jane.doe@gmail.com"
              register={register}
              error={errors.emergencyContact?.email?.message}
            />
          </FormGroup>
        </div>

        <div id="preferences-agreements" className="space-y-4">
          <Title icon="library">Preferences & Agreements</Title>

          <InputCheckboxField
            name="preferencesAgreements.flexibleSchedule"
            label="I prefer a flexible work schedule"
            control={control}
            error={errors.preferencesAgreements?.flexibleSchedule?.message}
          />

          <InputCheckboxField
            name="preferencesAgreements.remoteWork"
            label="I'm interested in remote work opportunities"
            control={control}
            error={errors.preferencesAgreements?.remoteWork?.message}
          />

          <InputCheckboxField
            name="preferencesAgreements.privacyPolicy"
            label="I acknowledge that I have read and agree to the company policies"
            withAsterisk
            control={control}
            error={errors.preferencesAgreements?.privacyPolicy?.message}
          />

          <InputTextAreaField
            name="preferencesAgreements.additionalNote"
            label="Additional note"
            register={register}
            error={errors.preferencesAgreements?.additionalNote?.message}
          />
        </div>

        <div className="space-y-4 flex justify-end">
          <Button
            type="submit"
            disabled={isPending || !isValid}
            isPending={isPending}
            pendingText="Submitting..."
          >
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
