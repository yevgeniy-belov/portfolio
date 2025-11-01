import MainNav from "./MainNav";
import CompanySelector from "./CompanySelector";
import CompanySummary from "./CompanySummary";
import SummarySection from "./SummarySection";
import ShowcaseGrid from "./ShowcaseGrid";
import YourCompanyPage from "./YourCompanyPage";
import { getLogoPath, toKebabCase } from "../utils/assetPaths";

const ShowcasesPage = ({ 
  selectedCompany, 
  selectedCompanyName, 
  companies, 
  onSelect, 
  setCurrentPage
}) => {
  // Render special "Your company" page if selected
  if (selectedCompanyName === "Your company") {
    return (
      <YourCompanyPage
        companies={companies}
        selectedCompanyName={selectedCompanyName}
        onSelect={onSelect}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  // Generate logo path from company name using kebab-case (e.g., "Check Point" -> "check-point.png")
  // Use selectedCompany.name to ensure we get the full company name from the JSON
  // If logo doesn't exist, it will gracefully fail
  const companyLogo = selectedCompany?.name 
    ? getLogoPath(`${toKebabCase(selectedCompany.name)}.png`)
    : null;

  return (
    <div className="bg-white flex flex-col gap-6 md:gap-[30px] items-center px-4 py-8 md:px-0 md:py-[50px] min-h-screen shadow-[0px_4px_74px_0px_rgba(0,0,0,0.25)] w-full">
      {/* Navigation Section */}
      <div className="flex flex-col gap-6 md:gap-[30px] items-center w-full">
        <MainNav selection="Showcases" onNavigate={setCurrentPage} />
        <CompanySelector 
          companies={companies}
          selectedCompany={selectedCompanyName}
          onSelect={onSelect}
        />
      </div>

      {/* Company Summary */}
        <CompanySummary
          logo={companyLogo}
          companyName={selectedCompany.name}
          description={selectedCompany.summary?.description || `Worked at ${selectedCompany.name} as ${selectedCompany.summary.role?.[0] || "Product Designer"}.`}
        />

      {/* Summary Section */}
      <div className="w-full px-4 md:px-0">
        <SummarySection
          role={Array.isArray(selectedCompany.summary.role) ? selectedCompany.summary.role : [selectedCompany.summary.role]}
          responsibilities={Array.isArray(selectedCompany.summary.context) ? selectedCompany.summary.context : [selectedCompany.summary.context]}
          collaborations={Array.isArray(selectedCompany.summary.team) ? selectedCompany.summary.team : [selectedCompany.summary.team]}
          deliveries={Array.isArray(selectedCompany.summary.deliveries) ? selectedCompany.summary.deliveries : [selectedCompany.summary.deliveries]}
          impact={Array.isArray(selectedCompany.summary.impact) ? selectedCompany.summary.impact : [selectedCompany.summary.impact]}
        />
      </div>

      {/* Showcases Grid */}
      <ShowcaseGrid showcases={selectedCompany.showcases || []} />

      {/* Footer Company Selector */}
      <div className="flex flex-col gap-5 md:gap-[20px] items-center px-4 md:px-0 py-12 md:py-[100px] w-full">
        <p className="font-normal leading-normal text-sm md:text-[16px] text-black text-center max-w-full md:max-w-[1630px] w-full">
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

