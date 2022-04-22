import React from "react";
export const PageWrapper: React.FC = (props) => {
  return <div style={{ margin: "0", padding: "0" }}>{props.children}</div>;
};
