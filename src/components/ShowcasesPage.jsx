import MainNav from "./MainNav";
import CompanySelector from "./CompanySelector";
import CompanySummary from "./CompanySummary";
import SummarySection from "./SummarySection";
import ShowcaseGrid from "./ShowcaseGrid";

const ShowcasesPage = ({ 
  selectedCompany, 
  selectedCompanyName, 
  companies, 
  onSelect, 
  setCurrentPage,
  checkPointLogo 
}) => {
  return (
    <div className="bg-white flex flex-col gap-[30px] items-center px-0 py-[50px] min-h-screen shadow-[0px_4px_74px_0px_rgba(0,0,0,0.25)] w-full">
      {/* Navigation Section */}
      <div className="flex flex-col gap-[30px] items-center">
        <MainNav selection="Showcases" onNavigate={setCurrentPage} />
        <CompanySelector 
          companies={companies}
          selectedCompany={selectedCompanyName}
          onSelect={onSelect}
        />
      </div>

      {/* Company Summary */}
      <CompanySummary
        logo={selectedCompanyName === "Check Point" ? checkPointLogo : null}
        companyName={selectedCompany.name}
        description={`Worked at ${selectedCompany.name} as ${selectedCompany.summary.role?.[0] || "Product Designer"}.`}
      />

      {/* Summary Section */}
      <SummarySection
        role={Array.isArray(selectedCompany.summary.role) ? selectedCompany.summary.role : [selectedCompany.summary.role]}
        responsibilities={Array.isArray(selectedCompany.summary.context) ? selectedCompany.summary.context : [selectedCompany.summary.context]}
        collaborations={Array.isArray(selectedCompany.summary.team) ? selectedCompany.summary.team : [selectedCompany.summary.team]}
        deliveries={Array.isArray(selectedCompany.summary.deliveries) ? selectedCompany.summary.deliveries : [selectedCompany.summary.deliveries]}
        impact={Array.isArray(selectedCompany.summary.impact) ? selectedCompany.summary.impact : [selectedCompany.summary.impact]}
      />

      {/* Showcases Grid */}
      <ShowcaseGrid showcases={selectedCompany.showcases || []} />

      {/* Footer Company Selector */}
      <div className="flex flex-col gap-[20px] items-center px-0 py-[100px]">
        <p className="font-normal leading-normal text-[16px] text-black text-center w-[1630px]">
          See showcases from other companies
        </p>
        <CompanySelector 
          companies={companies}
          selectedCompany={selectedCompanyName}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default ShowcasesPage;

