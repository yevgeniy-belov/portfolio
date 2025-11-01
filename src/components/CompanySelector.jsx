const CompanySelector = ({ companies = [], selectedCompany = "Check Point", onSelect }) => {
  const handleClick = (companyName) => {
    if (onSelect) {
      onSelect(companyName);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-[10px] items-center justify-center w-full max-w-[473px]">
      {companies.map((company) => {
        const isSelected = company.name === selectedCompany;
        return (
          <div
            key={company.name}
            onClick={() => handleClick(company.name)}
            className={`flex flex-col gap-[3px] sm:gap-[5px] items-center justify-center px-2 sm:px-[8px] md:px-[10px] py-1 sm:py-[4px] md:py-[5px] rounded-[4px] text-xs sm:text-sm md:text-[14px] whitespace-pre cursor-pointer transition-colors ${
              isSelected
                ? "bg-black text-white"
                : "text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]"
            }`}
          >
            <p className="font-bold leading-normal">{company.name}</p>
            <p className="font-normal leading-normal text-xs">{company.period}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanySelector;

