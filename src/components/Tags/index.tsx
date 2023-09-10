import { FC } from "react";
import "./styles.css";

interface StatusTagProps {
  active: boolean;
}

const StatusTag: FC<StatusTagProps> = ({ active }) => {
  return (
    <div className={`status-tag ${active ? "active" : "inactive"}`}>
      <span className="circle" />
      <span className="label">{active ? "Active" : "Inactive"}</span>
    </div>
  );
};

export default StatusTag;
