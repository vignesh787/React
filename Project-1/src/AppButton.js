import React from "react";

const AppButton = (props) => {
  const handleBtnClick = () => {
    props.recieveBtnClick();
    console.log(" Button is clicked");
  };
  return (
    <button
      onClick={handleBtnClick}
      style={{
        color: props.textColor,
        backgroundColor: props.bgcolor,
        width: "150px"
      }}
    >
      {props.text}
    </button>
  );
};

export default AppButton;

AppButton.defaultProps = {
  text: "Default",
  bgcolor: "maroon"
};
