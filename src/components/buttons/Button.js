import className from "classnames";

const Button = (props) => {
  const classes = className(`py-2 px-3 duration-300 ${props.className}`, {
    "text-secondaryHackeps bg-primaryHackeps hover:bg-primaryHackepsDark": props.primary && !props.outline,
    "text-secondaryHackeps bg-secondaryLanding hover:bg-secondaryLanding": props.primaryLanding && !props.outline,
    "text-gray-CTALanding bg-lightHackeps hover:bg-grayLightHackeps": props.light,
    "bg-primaryHackeps hover:text-primaryHackeps hover:bg-secondaryHackeps border-solid border-2 border-secondaryHackeps": props.outline && props.primary,
    "bg-secondaryHackeps text-primaryHackeps hover:text-secondaryHackeps hover:bg-primaryHackeps border-solid border-2 border-primaryHackeps": props.outline && props.secondary,
    "bg-grayLightHackeps": props.disabled,
    "bg-red-500 hover:bg-red-400": props.delete,
    "rounded-md": props.rounded,
    "text-xs": props.xs,
    "text-sm": props.sm,
    "text-lg": props.lg,
    "text-xl": props.xl,
    "text-2xl": props.xxl,
    "text-3xl": props.xxxl,
  });
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
