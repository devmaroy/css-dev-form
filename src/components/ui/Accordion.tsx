import Icon from "@/components/ui/Icon";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
  id: string | number;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.id} className="space-y-2">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between w-full"
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className="text-left font-semibold text-bc-blue-400 transition-colors hover:text-bc-blue-300">
              {item.title}
            </span>
            <span aria-hidden="true">
              {activeIndex === index ? (
                <Icon name="chevron-up" className="text-bc-blue-400" />
              ) : (
                <Icon name="chevron-down" className="text-bc-blue-400" />
              )}
            </span>
          </button>
          {activeIndex === index && (
            <div
              id={`accordion-content-${item.id}`}
              className="text-bc-gray-300 font-medium"
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
