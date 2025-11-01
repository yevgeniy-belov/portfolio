import MainNav from "./MainNav";
import CompanySelector from "./CompanySelector";
import { getYourCompanyImagePath } from "../utils/assetPaths";

const YourCompanyPage = ({ companies, selectedCompanyName, onSelect, setCurrentPage }) => {
  // Illustration SVG assets for Your Company page
  const imgVector1 = getYourCompanyImagePath("illustration-1.svg");
  const imgVector2 = getYourCompanyImagePath("illustration-2.svg");
  const imgVector3 = getYourCompanyImagePath("illustration-3.svg");

  return (
    <div className="bg-white box-border flex flex-col gap-[30px] items-center px-0 py-[50px] min-h-screen shadow-[0px_4px_74px_0px_rgba(0,0,0,0.25)] w-full">
      {/* Navigation Section */}
      <div className="flex flex-col gap-[30px] items-center w-full">
        <MainNav selection="Showcases" onNavigate={setCurrentPage} />
        <CompanySelector 
          companies={companies}
          selectedCompany={selectedCompanyName}
          onSelect={onSelect}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[60px] items-start max-w-[800px] px-0 py-[30px] w-full">
          {/* Your Company Section */}
          <div className="flex gap-[50px] items-start w-full">
            <div className="aspect-[106.412/202.238] relative self-stretch shrink-0 w-[106.412px]">
              <div className="absolute inset-[-1.34%_-2.33%_-1.24%_0.04%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[10px] items-start text-black">
              <p className="font-bold leading-normal text-[20px] whitespace-pre">
                Your Company
              </p>
              <p className="font-normal leading-[24px] text-[14px]">
                Your company might be a promising startup or an established global organization.
                <br aria-hidden="true" />
                What matters most is that you care about creating products that genuinely help people - whether they're used around the world or within a local community. You care about quality, clarity, and teamwork. You believe good design isn't decoration but a way to solve real problems and make life easier.You value people — the ones who use your products and the ones who build them. You foster an environment where collaboration, curiosity, and respect make great work possible.
              </p>
            </div>
          </div>

          {/* What I'm Looking For Section */}
          <div className="flex gap-[50px] items-center w-full">
            <div className="flex-1 flex flex-col gap-[10px] items-start text-black">
              <p className="font-bold leading-normal text-[20px] w-full">
                What I'm Looking For
              </p>
              <div className="font-normal leading-[0] text-[14px] w-full">
                <p className="leading-[24px] mb-0">
                  I'd love to join a team where design plays a key role in defining products from early discovery to final implementation.
                  <br aria-hidden="true" />
                  {" I'm especially drawn to:"}
                </p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Complex systems and design at scale (enterprise, B2B, or SaaS platforms)</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Teams that value usability, clarity, and collaboration with developers</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Companies that invest in design systems and continuous improvement</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[24px]">A culture of openness, curiosity, and shared ownership</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[141.539px] relative shrink-0 w-[170.474px]">
              <div className="absolute inset-[-1.41%_-1.3%_-1.41%_-1.22%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>

          {/* What I Bring Section */}
          <div className="flex flex-col gap-[10px] items-start w-full">
            <div className="flex gap-[50px] items-center w-full">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[163px] relative w-[190px]">
                    <div className="absolute inset-[-1.38%_-0.93%_-1.68%_-1.34%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[10px] items-start text-black">
                <p className="font-bold leading-normal text-[20px] w-full">
                  What I Bring
                </p>
                <ul className="block font-normal leading-[0] text-[14px] w-full list-disc">
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">20+ years of experience designing and shipping digital products</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Strong UX and UI skills supported by technical fluency in HTML, CSS, and JavaScript and whatever the future will require.</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Deep experience building and maintaining design systems in Figma and code</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">Ability to lead design initiatives and mentor other designers</span>
                  </li>
                  <li className="mb-0 ms-[21px]">
                    <span className="leading-[24px]">A hands-on, pragmatic mindset focused on quality and delivery</span>
                  </li>
                  <li className="ms-[21px]">
                    <span className="leading-[24px]">A calm, collaborative approach that helps teams stay aligned and productive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How I Like to Work Section */}
          <div className="flex flex-col gap-[10px] items-start text-black w-full">
            <p className="font-bold leading-normal text-[20px] w-full">
              How I Like to Work
            </p>
            <p className="font-normal leading-[24px] text-[14px] w-full">
              I thrive in cross-functional environments where ideas flow freely between design, product, and engineering.
              <br aria-hidden="true" />
              {" I enjoy solving complex problems, refining messy ideas into clear solutions, and helping teams find balance between user needs and business goals."}
              <br aria-hidden="true" />
              {" Good design is always a team effort — and I love being part of that creative partnership."}
            </p>
          </div>

          {/* Let's Talk Section */}
          <div className="flex flex-col gap-[10px] items-start text-black w-full">
            <p className="font-bold leading-normal text-[20px] w-full">
              Let's Talk
            </p>
            <p className="font-normal leading-[24px] text-[14px] w-full">
              <span>
                If you're building something meaningful and looking for a designer who can connect vision, technology, and people - I'd love to chat.
                <br aria-hidden="true" />
                {"You can reach me at "}
              </span>
              <a href="mailto:belovxyz@gmail.com" className="text-[#036cff] no-underline">belovxyz@gmail.com</a>
              <span>{" or find me on "}</span>
              <a href="https://www.linkedin.com/in/yevgeniy-belov" target="_blank" rel="noopener noreferrer" className="text-[#036cff] no-underline">LinkedIn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCompanyPage;

