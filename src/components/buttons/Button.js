import className from "classnames";

const Button = (props) => {
  const classes = className(`py-2 px-3 duration-300 ${props.className}`, {
    "text-CTALanding bg-secondaryLanding hover:bg-secondaryLanding":
      props.secondaryLanding && !props.outline,
    "text-CTALanding bg-primaryLanding hover:bg-primaryLanding":
      props.primaryLanding && !props.outline,
    "bg-grayColor": props.disabled,
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
