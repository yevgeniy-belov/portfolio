import SummaryBox from "./SummaryBox";

const SummarySection = ({ role, responsibilities, collaborations, deliveries, impact }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-start container">
        <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-[20px] items-stretch">
          {/* Role & Responsibilities */}
          <SummaryBox
            sections={[
              { title: "Role", content: Array.isArray(role) ? role.join(", ") : role },
              { title: "Responsibilities", content: responsibilities },
              { title: "Collaborations", content: Array.isArray(collaborations) ? collaborations.join(", ") : collaborations },
            ]}
          />

          {/* Deliveries */}
          <SummaryBox
            sections={[
              { title: "Deliveries", content: deliveries },
            ]}
          />

          {/* Impact */}
          <SummaryBox
            sections={[
              { title: "Impact", content: impact },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SummarySection;

