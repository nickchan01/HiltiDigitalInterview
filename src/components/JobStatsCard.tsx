import { ReactElement } from "react";
import "../styles/JobStatsCard.css";

interface Props {
  title: string;
  number: string;
  description: string;
  icon?: ReactElement;
}

function JobStatsCard(info: Props) {
  return (
    <>
      <div className="card-job-other">
        <div className="card-job-other-flexbox">
          <div className="card-job-other-title">{info.title}</div>
          <div className="card-job-other-icon">{info.icon}</div>
        </div>
        <div>
          <div className="card-job-other-number">{info.number}</div>
          <div className="card-job-other-desc">{info.description}</div>
        </div>
      </div>
    </>
  );
}

export default JobStatsCard;
