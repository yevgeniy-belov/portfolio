const ShowcaseThumbnail = ({ image, title, children }) => {
  return (
    <div className="bg-white flex flex-col gap-[10px] h-[300px] items-center justify-center overflow-hidden px-[174px] py-[44px] rounded-[5px] relative w-full">
      {children}
      <div className="absolute backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.65)] flex gap-[10px] items-start left-[20px] px-[10px] py-[5px] rounded-[2px] top-[20px]">
        <p className="font-bold leading-normal text-[16px] text-white whitespace-pre">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseThumbnail;

