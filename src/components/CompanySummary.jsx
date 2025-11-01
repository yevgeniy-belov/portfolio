const CompanySummary = ({ logo, companyName, description }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-9 items-start sm:items-center container w-full">
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gray-100 flex gap-5 h-full items-center justify-center p-4 sm:p-6 md:p-8">
          <div className=" size-12 sm:size-14 md:size-[64px] overflow-hidden">
            {logo && <img src={logo} alt={`${companyName} logo`} className="w-full h-full object-contain" />}
          </div>
        </div>
      </div>
      <div className="flex-1 gap-2 sm:gap-3 flex flex-col items-start justify-center text-black">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl w-full">{companyName}</p>
        <p className="font-normal text-base sm:text-lg w-full md:max-w-[500px]">{description}</p>
      </div>
    </div>
  );
};

export default CompanySummary;

