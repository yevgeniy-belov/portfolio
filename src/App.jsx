import { useState, lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import MainNav from "./components/MainNav";
import CompanySelector from "./components/CompanySelector";
import Profile from "./components/Profile";

// Lazy load Showcases page components
const ShowcasesPage = lazy(() => import("./components/ShowcasesPage"));

function ShowcasesRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const companyParam = searchParams.get("company");
  const [selectedCompanyName, setSelectedCompanyName] = useState(companyParam || "Check Point");
  const [showcasesData, setShowcasesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Load showcases data
  useEffect(() => {
    if (!showcasesData && !loading) {
      setLoading(true);
      fetch("/portfolio/showcases-anotations.json")
        .then((res) => res.json())
        .then((data) => {
          setShowcasesData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [showcasesData, loading]);

  // Sync URL with company selection
  useEffect(() => {
    if (selectedCompanyName && selectedCompanyName !== companyParam) {
      setSearchParams({ company: selectedCompanyName }, { replace: true });
    }
  }, [selectedCompanyName, companyParam, setSearchParams]);

  // Sync company selection with URL parameter
  useEffect(() => {
    if (companyParam && companyParam !== selectedCompanyName && showcasesData) {
      const companyExists = showcasesData.find(c => c.name === companyParam);
      if (companyExists) {
        setSelectedCompanyName(companyParam);
      }
    }
  }, [companyParam, showcasesData]);

  const handleCompanySelect = (companyName) => {
    setSelectedCompanyName(companyName);
    setSearchParams({ company: companyName }, { replace: true });
  };

  const handleNavigate = (page) => {
    if (page === "Profile") {
      navigate("/");
    } else if (page === "Showcases") {
      navigate("/showcases");
    }
  };

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
        onSelect={handleCompanySelect}
        setCurrentPage={handleNavigate}
      />
    </Suspense>
  );
}

function ProfileRoute() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    if (page === "Profile") {
      navigate("/");
    } else if (page === "Showcases") {
      navigate("/showcases");
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <Profile onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfileRoute />} />
      <Route path="/showcases" element={<ShowcasesRoute />} />
    </Routes>
  );
}

export default App;
