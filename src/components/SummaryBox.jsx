const SummaryBox = ({ sections }) => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      // If all items are strings, render as a list
      if (content.every(item => typeof item === 'string')) {
        return (
          <ul className="block font-normal leading-[0] w-full list-disc">
            {content.map((item, index) => (
              <li key={index} className={`${index < content.length - 1 ? "mb-0" : ""} ms-[21px]`}>
                <span className="leading-[24px]">{item}</span>
              </li>
            ))}
          </ul>
        );
      }
      // Otherwise join array items
      return <p className="font-normal leading-[24px] w-full">{content.join(", ")}</p>;
    }
    // Single string value
    return <p className="font-normal leading-[24px] w-full">{content}</p>;
  };

  const gapClass = sections.length > 1 ? "gap-[20px]" : "gap-[10px]";

  return (
    <div className={`flex-1 bg-[#f2f2f2] flex flex-col ${gapClass} items-start p-[20px] rounded-[10px] text-[14px] text-black`}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-[10px] items-start text-[14px] text-black w-full">
          <p className="font-bold leading-normal w-full">{section.title}</p>
          {renderContent(section.content)}
        </div>
      ))}
    </div>
  );
};

export default SummaryBox;

