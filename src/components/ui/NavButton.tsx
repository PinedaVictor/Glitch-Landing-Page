import React from "react";
interface NavButtonProps {
  show: boolean;
  showPage: React.Dispatch<React.SetStateAction<boolean>>;
  transition: () => void;
  title: string;
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <div>
      <button
        className="navButton"
        onClick={() => {
          props.showPage(!props.show);
          props.transition();
        }}
      >
        {props.title}
      </button>
    </div>
  );
};
