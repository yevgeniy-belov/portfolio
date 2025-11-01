import { useState } from "react";
import MainNav from "./components/MainNav";
import CompanySelector from "./components/CompanySelector";
import CompanySummary from "./components/CompanySummary";
import SummarySection from "./components/SummarySection";
import ShowcaseGrid from "./components/ShowcaseGrid";
import Profile from "./components/Profile";
import showcasesData from "../showcases-anotations.json";

function App() {
  const [currentPage, setCurrentPage] = useState("Profile");
  const [selectedCompanyName, setSelectedCompanyName] = useState("Check Point");
  const checkPointLogo = "http://localhost:3845/assets/dc277f15e0f5779e02e5f0b2c17f5452db2535ae.png";

  // Find the selected company data
  const selectedCompany = showcasesData.find(company => company.name === selectedCompanyName) || showcasesData[0];

  // Helper function to ensure field is an array (handles both arrays and strings for backward compatibility)
  const ensureArray = (field) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    return [field];
  };

  // Helper function to format role array as string
  const formatRole = (role) => {
    if (!role) return "Product Designer";
    if (Array.isArray(role)) return role.join(", ");
    return role;
  };

  // Helper function to format team array as string
  const formatTeam = (team) => {
    if (!team) return "";
    if (Array.isArray(team)) return team.join(", ");
    return team;
  };

  // Get companies for selector
  const companies = showcasesData.map(company => ({
    name: company.name,
    period: company.summary.timeline || ""
  }));

  // Get summary data (already arrays, but ensure they are arrays)
  const responsibilities = ensureArray(selectedCompany.summary.context);
  const deliveries = ensureArray(selectedCompany.summary.deliveries);
  const impact = ensureArray(selectedCompany.summary.impact);
  const role = ensureArray(selectedCompany.summary.role);
  const team = ensureArray(selectedCompany.summary.team);

  // Generate a simple description (can be enhanced later)
  const description = `Worked at ${selectedCompany.name} as ${formatRole(selectedCompany.summary.role)}.`;

  // Show Profile page
  if (currentPage === "Profile") {
    return (
      <div className="bg-white min-h-screen w-full">
        <Profile onNavigate={setCurrentPage} />
      </div>
    );
  }

  // Show Showcases page
  return (
    <div className="bg-white flex flex-col gap-[30px] items-center px-0 py-[50px] min-h-screen shadow-[0px_4px_74px_0px_rgba(0,0,0,0.25)] w-full">
      {/* Navigation Section */}
      <div className="flex flex-col gap-[30px] items-center">
        <MainNav selection="Showcases" onNavigate={setCurrentPage} />
        <CompanySelector 
          companies={companies}
          selectedCompany={selectedCompanyName}
          onSelect={setSelectedCompanyName}
        />
      </div>

      {/* Company Summary */}
      <CompanySummary
        logo={selectedCompanyName === "Check Point" ? checkPointLogo : null}
        companyName={selectedCompany.name}
        description={description}
      />

      {/* Summary Section */}
      <SummarySection
        role={role}
        responsibilities={responsibilities}
        collaborations={team}
        deliveries={deliveries}
        impact={impact}
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
          onSelect={setSelectedCompanyName}
        />
      </div>
    </div>
  );
}

export default App;
