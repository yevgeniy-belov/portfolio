import { useState, lazy, Suspense, useEffect } from "react";
import MainNav from "./components/MainNav";
import CompanySelector from "./components/CompanySelector";
import Profile from "./components/Profile";

// Lazy load Showcases page components
const ShowcasesPage = lazy(() => import("./components/ShowcasesPage"));

function App() {
  const [currentPage, setCurrentPage] = useState("Profile");
  const [selectedCompanyName, setSelectedCompanyName] = useState("Check Point");
  const [showcasesData, setShowcasesData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // TODO: Replace with hosted URL or move to public folder
  // Using null to prevent localhost network access requests
  const checkPointLogo = null;

  // Lazy load showcases data only when Showcases page is accessed
  useEffect(() => {
    if (currentPage !== "Profile" && !showcasesData && !loading) {
      setLoading(true);
      // Fetch from public folder (not bundled)
      fetch("/portfolio/showcases-anotations.json")
        .then((res) => res.json())
        .then((data) => {
          setShowcasesData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [currentPage, showcasesData, loading]);

  // Show Profile page
  if (currentPage === "Profile") {
    return (
      <div className="bg-white min-h-screen w-full">
        <Profile onNavigate={setCurrentPage} />
      </div>
    );
  }

  // Show loading state
  if (!showcasesData || loading) {
    return (
      <div className="bg-white flex items-center justify-center min-h-screen w-full">
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  // Find the selected company data
  const selectedCompany = showcasesData.find(company => company.name === selectedCompanyName) || showcasesData[0];

  // Get companies for selector
  const companies = showcasesData.map(company => ({
    name: company.name,
    period: company.summary.timeline || ""
  }));

  // Show Showcases page (lazy loaded)
  return (
    <Suspense fallback={
      <div className="bg-white flex items-center justify-center min-h-screen w-full">
        <p className="text-black">Loading...</p>
      </div>
    }>
      <ShowcasesPage
        selectedCompany={selectedCompany}
        selectedCompanyName={selectedCompanyName}
        companies={companies}
        onSelect={setSelectedCompanyName}
        setCurrentPage={setCurrentPage}
        checkPointLogo={checkPointLogo}
      />
    </Suspense>
  );
}

export default App;
