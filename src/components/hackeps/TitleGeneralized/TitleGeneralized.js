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
    stylesTitle += " title-underline";
  }
  if (lettersColor === "secondary") {
    stylesTitle += " text-textSecondaryHackeps";
  } else {
    stylesTitle += " text-textPrimaryHackeps";
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
