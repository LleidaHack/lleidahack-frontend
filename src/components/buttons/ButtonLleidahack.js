import className from "classnames";

const ButtonLleidahack = (props) => {
    const classes = className(`font-mono text-xl py-2 px-3 duration-300 ${props.className}`, {
        "relative bg-primaryLanding text-CTALanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-CTALanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-CTALanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.primary && (props.white || !props.black),
        "relative bg-primaryLanding text-secondaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-secondaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-secondaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.primary && props.black,
        "relative border-solid border-2 border-primaryLanding bg-secondaryLanding text-primaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.secondary && (props.orange || !props.white),
        "relative border-solid border-2 border-CTALanding bg-secondaryLanding text-CTALanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-CTALanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-CTALanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.secondary && props.white,
        "relative border-solid border-2 border-primaryLanding bg-CTALanding text-primaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-primaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-primaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.tertiary && (props.orange || !props.black),
        "relative border-solid border-2 border-secondaryLanding bg-CTALanding text-secondaryLanding cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-secondaryLanding before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-3 before:left-[40%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-secondaryLanding after:origin-center after:h-[2px] after:w-0 hover:after:w-[40%] after:bottom-3 after:right-[50%] rounded-1": props.tertiary && props.black,
        "text-xs": props.xs,
        "text-sm": props.sm,
        "text-lg": props.lg,
        "text-xl": props.xl,
        "text-2xl": props.xxl,
        "text-3xl": props.xxxl,
    });
    return (
        <button type={props.type} onClick={props.onClick} className={classes}>
            {props.children}
        </button>
    );

}

export default ButtonLleidahack;