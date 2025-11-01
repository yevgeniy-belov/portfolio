import { useLocation, useNavigate } from "react-router-dom";

const MainNav = ({ selection = "Profile", onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine current selection from URL
  const currentSelection = location.pathname === "/" || location.pathname === "" ? "Profile" : "Showcases";

  const handleClick = (page) => {
    if (page === "Profile") {
      navigate("/");
      onNavigate && onNavigate("Profile");
    } else if (page === "Showcases") {
      navigate("/showcases");
      onNavigate && onNavigate("Showcases");
    }
  };

  return (
    <div className="flex gap-[30px] items-center justify-center w-[274px]">
      <div 
        className="flex flex-col gap-[5px] items-center justify-center cursor-pointer"
        onClick={() => handleClick("Profile")}
      >
        <p className={`font-bold leading-normal text-[14px] ${currentSelection === "Profile" ? "text-black" : "text-[rgba(0,0,0,0.5)]"} whitespace-pre`}>
          Profile
        </p>
        <div className={`h-[5px] w-full ${currentSelection === "Profile" ? "bg-black" : "bg-transparent opacity-0"}`} />
      </div>
      <div 
        className="flex flex-col gap-[5px] items-center justify-center cursor-pointer"
        onClick={() => handleClick("Showcases")}
      >
        <p className={`font-bold leading-normal text-[14px] ${currentSelection === "Showcases" ? "text-black" : "text-[rgba(0,0,0,0.5)]"} whitespace-pre`}>
          Showcases
        </p>
        <div className={`h-[5px] w-full ${currentSelection === "Showcases" ? "bg-black" : "bg-transparent opacity-0"}`} />
      </div>
      <div className="flex flex-col gap-[5px] items-center justify-center">
        <p className="font-bold leading-normal text-[14px] text-[rgba(0,0,0,0.5)] whitespace-pre">
          Case studies
        </p>
        <div className="bg-transparent h-[5px] opacity-0 w-[83px]" />
      </div>
    </div>
  );
};

export default MainNav;
