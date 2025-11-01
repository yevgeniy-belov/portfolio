import SummaryBox from "./SummaryBox";

const SummarySection = ({ role, responsibilities, collaborations, deliveries, impact }) => {
  return (
    <div className="flex flex-col gap-[60px] items-start max-w-[1440px] w-full">
      <div className="flex items-start w-full">
        <div className="flex-1 flex gap-[20px] items-stretch">
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

