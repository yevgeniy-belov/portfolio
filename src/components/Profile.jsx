import MainNav from "./MainNav";

const Profile = ({ onNavigate }) => {
  // Image assets from Figma
  // TODO: Replace with hosted URLs or move to public folder
  // Using empty strings to prevent localhost network access requests
  const img = "";
  const img1 = "";
  const img2 = "";
  const imgFrame4 = "";
  const imgVector4 = "";

  return (
    <div className="bg-white box-border flex flex-col items-center px-0 py-[50px] relative min-h-screen w-full">
      <div className="flex flex-col gap-[50px] items-center relative shrink-0 w-full">
        <MainNav selection="Profile" onNavigate={onNavigate} />
        <div className="flex flex-col gap-[50px] items-start relative shrink-0 w-full">
          {/* Hero Section */}
          <div className="box-border flex flex-col gap-[10px] items-center px-[20px] py-[100px] relative shrink-0 w-full">
            <p className="font-black leading-[70px] relative shrink-0 text-[54px] text-black text-center">
              Hi, I'm Yevgeniy, a senior product designer.
            </p>
            <div className="content-center flex flex-wrap gap-[30px] items-center justify-center relative shrink-0 px-[20px]">
              <p className="font-black leading-[70px] relative shrink-0 text-[54px] text-black text-center">
                I turn this
              </p>
              <div className="h-[171.096px] relative shrink-0 w-[192.678px]">
                <div className="absolute border-4 border-black border-solid bottom-[69.61%] left-0 right-[80.8%] top-[17.53%]" />
                <div className="absolute border-4 border-black border-solid bottom-[56.11%] left-[80.8%] right-0 top-[31.03%]" />
                <div className="absolute border-4 border-black border-solid bottom-0 left-[25.52%] right-[55.27%] top-[87.14%]" />
                {img && (
                  <div className="absolute inset-[23.14%_24.91%_33.61%_19.55%]">
                    <div className="absolute bottom-[3.85%] left-[2.41%] right-0 top-[-19.17%]">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                  </div>
                )}
                {img1 && (
                  <div className="absolute inset-[28.4%_10.21%_28.99%_32.79%]">
                    <div className="absolute inset-[2.02%_-13.41%_-1.28%_-0.75%]">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                  </div>
                )}
                {img2 && (
                  <div className="absolute inset-[34.83%_28.29%_18.12%_8.66%]">
                    <div className="absolute inset-[-2.48%_2.95%_-2.48%_0.46%]">
                      <img alt="" className="block max-w-none size-full" src={img2} />
                    </div>
                  </div>
                )}
              </div>
              <p className="font-black leading-[70px] relative shrink-0 text-[54px] text-black text-center">
                into this
              </p>
              {imgFrame4 && (
                <div className="h-[15px] relative shrink-0 w-[261px]">
                  <div className="absolute inset-[-48.19%_-0.58%_-48.19%_-0.89%]">
                    <img alt="" className="block max-w-none size-full" src={imgFrame4} />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Description Section */}
          <div className="h-[330px] relative shrink-0 w-full">
          
            <div className=" font-normal max-w-[700px] m-auto">
            {imgVector4 && (
              <div className="w-10">
                <img alt="" className="block max-w-none size-full rotate-90 mb-6 -ml-5" src={imgVector4} />
              </div>
            )}
              <p className="mb-0">
                I've designed for everything from fast-moving startups to global enterprises across industries like entertainment, performance testing, and cybersecurity. Whether leading large-scale design initiatives or collaborating closely with cross-functional teams, I focus on shaping products that balance user needs with business goals.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Curious by nature, I've taught myself web technologies such as HTML, CSS, and JavaScript — skills that help me design with real-world implementation in mind. Over the years, I've also built internal tools and design systems in both Figma and code to bring greater consistency, efficiency, and joy to the design process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

