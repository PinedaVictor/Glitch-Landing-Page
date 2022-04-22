import React from "react";

interface CloseButtonProps {
  pageActive: boolean;
  setPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PageCloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <button
      className="pageCloseButton"
      onClick={() => props.setPageActive(!props.pageActive)}
    >
      <p
        className="pageCloseText"
        style={{
          position: "relative",
          margin: "auto",
          paddingLeft: "4px",
          paddingTop: "2.5px",
        }}
      >
        {"X"}
      </p>
    </button>
  );
};
