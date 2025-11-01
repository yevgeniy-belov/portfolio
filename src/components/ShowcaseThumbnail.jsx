const ShowcaseThumbnail = ({ image, title, children }) => {
  return (
    <div className="bg-white flex flex-col gap-[10px] h-[250px] sm:h-[280px] md:h-[300px] items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[174px] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[44px] rounded-[5px] relative w-full">
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
      <div className="absolute backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.65)] flex gap-[10px] items-start left-2 sm:left-4 md:left-[20px] px-2 sm:px-[8px] md:px-[10px] py-1 sm:py-[4px] md:py-[5px] rounded-[2px] top-2 sm:top-4 md:top-[20px]">
        <p className="font-bold leading-normal text-xs sm:text-sm md:text-[16px] text-white whitespace-pre">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseThumbnail;

