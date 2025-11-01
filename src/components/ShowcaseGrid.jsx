import ShowcaseThumbnail from "./ShowcaseThumbnail";

const ShowcaseGrid = ({ showcases = [] }) => {
  if (!showcases || showcases.length === 0) {
    return (
      <div className="bg-[#f2f2f2] flex flex-col gap-[30px] items-center px-0 py-[30px] w-full">
        <div className="flex flex-col gap-[30px] items-start max-w-[1440px] w-full">
          <p className="text-black text-center w-full py-[50px]">No showcases available</p>
        </div>
      </div>
    );
  }

  // Group showcases into rows of 3
  const rows = [];
  for (let i = 0; i < showcases.length; i += 3) {
    rows.push(showcases.slice(i, i + 3));
  }

  return (
    <div className="bg-[#f2f2f2] flex flex-col gap-[30px] items-center px-0 py-[30px] w-full">
      <div className="flex flex-col gap-[30px] items-start max-w-[1440px] w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[20px] items-center w-full">
            {row.map((showcase, index) => {
              const hasImage = showcase.images && showcase.images.length > 0;
              const imageUrl = hasImage ? showcase.images[0] : null;
              const displayTitle = showcase.title || "Untitled";

              return (
                <div key={`${rowIndex}-${index}`} className="flex-1">
                  {hasImage && imageUrl ? (
                    <ShowcaseThumbnail title={displayTitle}>
                      <div className="flex flex-col gap-[10px] items-center justify-center size-[200px]">
                        <div className="aspect-[61/56.8116] relative w-full">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt={displayTitle}
                              className="absolute h-[148.36%] left-0 max-w-none top-[-19.17%] w-full"
                              src={imageUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </ShowcaseThumbnail>
                  ) : (
                    <div className="bg-white h-[300px] min-h-px overflow-hidden rounded-[10px] relative">
                      <div className="absolute backdrop-blur-[2.5px] bg-[rgba(0,0,0,0.65)] flex gap-[10px] items-start left-[10px] px-[10px] py-[5px] rounded-[4px] top-[10px]">
                        <p className="font-medium leading-normal text-lg text-white whitespace-pre">
                          {displayTitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {/* Fill remaining slots if row has less than 3 items */}
            {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, fillIndex) => (
              <div key={`fill-${fillIndex}`} className="flex-1" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseGrid;

