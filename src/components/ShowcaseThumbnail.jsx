const ShowcaseThumbnail = ({ image, title, children }) => {
  return (
    <div className="bg-white flex flex-col gap-[10px] h-70 items-center justify-center overflow-hidden p-4 relative w-full">
      <div className="h-50 flex justify-center">
        {children}
      </div>
      <div className="absolute backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.65)] flex items-start left-2 top-2 px-2 py-1">
        <p className="font-bold leading-normal text-xs sm:text-sm md:text-[16px] text-white whitespace-pre">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseThumbnail;

