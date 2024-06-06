import { ReactNode } from "react";
import "./CardContainer.css";

interface AuxProps {
  title?: string;
  children?: ReactNode;
}
export const CardContainer = ({ title, children }: AuxProps) => {
  return (
    <div className="card-container">
      <div className="card-header">{title}</div>
      <div className="card-content">{children}</div>
    </div>
  );
};
