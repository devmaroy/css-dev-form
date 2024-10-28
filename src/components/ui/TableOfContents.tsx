import Icon, { IconName } from "@/components/ui/Icon";
import { tableOfContentsItems } from "@/data";

export const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav aria-label="Table of Contents">
      <ul className="list-none p-0 m-0 space-y-4">
        {tableOfContentsItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="flex gap-2 items-center w-full"
              aria-label={`Go to ${item.text}`}
            >
              <Icon
                name={item.icon as IconName}
                className="text-bc-blue-200 flex-shrink-0"
                aria-hidden="true"
                size={20}
              />
              <span className="text-left font-semibold text-bc-blue-400 transition-colors hover:text-bc-blue-300">
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
