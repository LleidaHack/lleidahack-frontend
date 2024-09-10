import className from "classnames";

/* Sense props, el TitleGeneralized té les props secondary, bold i titleSize, amb pt-4, mb-0 i text-center */
const TitleGeneralized = (props) => {
  const classes = className(
    ` ${props.className} 
      pt-${props.padTop ? props.padTop : "4"} 
      mb-${props.marginBot ? props.marginBot : "[0%]"}  
      text-${props.alignText ? props.alignText : "center"} 
      font-${props.bold? "bold" : "normal"}
    `,
    {
      "underline decoration-primaryHackeps underline-offset-[5px] decoration-[5px] rounded pb-4":
        props.underline,

      "text-textPrimaryHackeps": props.primary,
      "text-textSecondaryHackeps": props.secondary || !props.primary,

      "text-[120px]": props.big,
      "text-4xl": props.titleSize || !props.big,
    },
  );
  return <h1 className={classes}>{props.children}</h1>;
};
export default TitleGeneralized;
