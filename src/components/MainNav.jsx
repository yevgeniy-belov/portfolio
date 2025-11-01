const MainNav = ({ selection = "Profile", onNavigate }) => {
  return (
    <div className="flex gap-[30px] items-center justify-center w-[274px]">
      <div 
        className="flex flex-col gap-[5px] items-center justify-center cursor-pointer"
        onClick={() => onNavigate && onNavigate("Profile")}
      >
        <p className={`font-bold leading-normal text-[14px] ${selection === "Profile" ? "text-black" : "text-[rgba(0,0,0,0.5)]"} whitespace-pre`}>
          Profile
        </p>
        <div className={`h-[5px] w-full ${selection === "Profile" ? "bg-black" : "bg-transparent opacity-0"}`} />
      </div>
      <div 
        className="flex flex-col gap-[5px] items-center justify-center cursor-pointer"
        onClick={() => onNavigate && onNavigate("Showcases")}
      >
        <p className={`font-bold leading-normal text-[14px] ${selection === "Showcases" ? "text-black" : "text-[rgba(0,0,0,0.5)]"} whitespace-pre`}>
          Showcases
        </p>
        <div className={`h-[5px] w-full ${selection === "Showcases" ? "bg-black" : "bg-transparent opacity-0"}`} />
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

