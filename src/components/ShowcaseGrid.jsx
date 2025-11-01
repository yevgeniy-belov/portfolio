import ShowcaseThumbnail from "./ShowcaseThumbnail";
import LazyImage from "./LazyImage";
import { getShowcaseImagePath } from "../utils/assetPaths";

const ShowcaseGrid = ({ showcases = [] }) => {
  if (!showcases || showcases.length === 0) {
    return (
      <div className="container">
        <div className="flex flex-col gap-[30px] items-start max-w-[1440px] w-full">
          <p className="text-black text-center w-full py-[50px]">No showcases available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7 container py-10">
        {showcases.map((showcase, index) => {
          const displayTitle = showcase.title || "Untitled";
          // Use title-based image path (kebab-case)
          const imageUrl = getShowcaseImagePath(displayTitle);

          return (
            <ShowcaseThumbnail key={index} title={displayTitle}>
              <LazyImage
                alt={displayTitle}
                className="w-full h-full object-cover"
                src={imageUrl}
                onError={(e) => {
                  // Fallback: hide image if not found
                  e.target.style.display = 'none';
                }}
              />
            </ShowcaseThumbnail>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseGrid;

