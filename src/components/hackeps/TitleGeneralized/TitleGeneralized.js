import React from "react";
import "./TitleGeneralized.css";

const TitleGeneralized = ({
  children,
  underline = false,
  alignText = "center",
  size,
  padTop = "5%",
  marginBot = "0%",
  lettersColor,
  bold = true,
  classTitle,
}) => {
  let stylesTitle = size === "big" ? "big" : "titleSize";
  if (underline) {
    stylesTitle +=
      " underline decoration-primaryHackeps underline-offset-[5px] decoration-[5px] rounded pb-4";
  }
  if (lettersColor === "primary") {
    stylesTitle += " text-textPrimaryHackeps";
  } else {
    stylesTitle += " text-textSecondaryHackeps";
  }
  if (bold) {
    stylesTitle += " titlebold";
  }
  if (classTitle) {
    stylesTitle += " " + classTitle;
  }
  return (
    <h1
      className={stylesTitle}
      style={{
        paddingTop: padTop,
        marginBottom: marginBot,
        textAlign: alignText,
      }}
    >
      {children}
    </h1>
  );
};
export default TitleGeneralized;
