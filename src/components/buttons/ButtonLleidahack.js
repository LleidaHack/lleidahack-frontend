import className from "classnames";

const ButtonLleidahack = (props) => {
  const classes = className(
    `font-mono duration-300 ${props.className}`,
    `text-${props.size}`,

    {
      "relative h-[46px] px-5  bg-primaryLanding text-CTALanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-CTALanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-CTALanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.primary && (props.white || !props.black),
      "relative h-[46px] px-5  bg-primaryLanding text-secondaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-secondaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-secondaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.primary && props.black,
      "relative h-[46px] px-5  border-solid border-2 border-primaryLanding bg-secondaryLanding text-primaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.secondary && (props.orange || !props.white),
      "relative h-[46px] px-5  border-solid border-2 border-CTALanding bg-secondaryLanding text-CTALanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-CTALanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-CTALanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.secondary && props.white,
      "relative h-[46px] px-5  border-solid border-2 border-primaryLanding bg-CTALanding text-primaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.tertiary && (props.orange || !props.black),
      "relative h-[46px] px-5  border-solid border-2 border-secondaryLanding bg-CTALanding text-secondaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-secondaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-2 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-secondaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-2 after:right-[50%] rounded-1":
        props.tertiary && props.black,
      "text-xs h-[46px] px-5 ": props.xs,
      "text-sm h-[46px] px-5 ": props.sm,
      "text-lg h-[46px] px-5 ": props.lg,
      "text-xl h-[46px] px-5 ": props.xl,
      "text-2xl h-[46px] px-5 ": props.xxl,
      "text-3xl h-[46px] px-5 ": props.xxxl,
      "w-14 h-14 flex items-center justify-center rounded-full bg-primaryLanding text-white shadow-lg text-3xl hover:bg-primary-dark transition" : props.roundedLanding
    },
  );
  return (
    <button type={props.type} onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
};

export default ButtonLleidahack;
