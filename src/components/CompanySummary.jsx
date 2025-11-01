const CompanySummary = ({ logo, companyName, description }) => {
  return (
    <div className="flex gap-9 items-center max-w-[1440px] w-[1440px]">
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-gray-100 flex gap-5 h-full items-center justify-center p-8">
          <div className="rounded-full size-[64px] overflow-hidden">
            {logo && <img src={logo} alt={`${companyName} logo`} className="w-full h-full object-contain" />}
          </div>
        </div>
      </div>
      <div className="flex-1 gap-3 flex flex-col items-start justify-center text-black">
        <p className="font-bold text-4xl min-w-full">{companyName}</p>
        <p className="font-normal text-lg w-[500px]">{description}</p>
      </div>
    </div>
  );
};

export default CompanySummary;

