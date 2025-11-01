import ShowcaseThumbnail from "./ShowcaseThumbnail";
import { getShowcaseImagePath } from "../utils/assetPaths";

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
              const displayTitle = showcase.title || "Untitled";
              // Use title-based image path (kebab-case)
              const imageUrl = getShowcaseImagePath(displayTitle);

              return (
                <div key={`${rowIndex}-${index}`} className="flex-1">
                  <ShowcaseThumbnail title={displayTitle}>
                    <div className="flex flex-col gap-[10px] items-center justify-center size-[200px]">
                      <div className="aspect-[61/56.8116] relative w-full">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt={displayTitle}
                            className="absolute h-[148.36%] left-0 max-w-none top-[-19.17%] w-full"
                            src={imageUrl}
                            onError={(e) => {
                              // Fallback: hide image if not found
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </ShowcaseThumbnail>
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

