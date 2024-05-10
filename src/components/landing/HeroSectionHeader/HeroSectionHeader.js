import React from "react";
import { Link } from "react-router-dom";



const HeroSectionHeader = () => {
    return (
        <div className="hero-container flex flex-col bg-background-hero  w-full relative min-h-0 bg-cover bg-no-repeat bg-center">
            <div className="hero-frame-grey bg-secondaryLanding h-full w-full opacity-70 z-10 absolute"></div>
                <div className="hero-section-container z-20 pl-12 pr-12">
                    <div className="logo flex-1 h-20 my-16">
                        <svg width="326" height="80" viewBox="0 0 326 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M103.078 0.675079V72.6871H112.407V79.3249H94.3157V0.675079H103.078Z" fill="#F7F7F7"/>
                            <path d="M123.318 0.675079V72.6871H132.648V79.3249H114.551V0.675079H123.318Z" fill="#F7F7F7"/>
                            <path d="M143.55 8.10108V36.6811H151.198V43.3241H143.55V71.8989H154.009V79.3249H134.782V0.675079H153.329V8.10108H143.55Z" fill="#F7F7F7"/>
                            <path d="M165.469 0.675079V79.3197H156.701V0.675079H165.469Z" fill="#F7F7F7"/>
                            <path d="M169.064 79.3249V0.67509H181.593C182.922 0.67335 184.244 0.882412 185.508 1.2945C186.771 1.70423 187.934 2.37462 188.922 3.26236C189.965 4.21629 190.785 5.38829 191.326 6.69523C191.921 8.08717 192.22 9.79346 192.221 11.8141V68.1876C192.221 70.2129 191.922 71.9192 191.326 73.3065C190.785 74.6106 189.964 75.7796 188.922 76.7307C187.934 77.6189 186.771 78.2899 185.508 78.7003C184.244 79.1118 182.922 79.3203 181.593 79.3179L169.064 79.3249ZM177.833 8.10109V71.8989H180.979C181.729 71.8989 182.33 71.5509 182.779 70.8306C183.227 70.1103 183.453 68.7879 183.453 66.8288V13.1643C183.453 11.291 183.228 9.97847 182.779 9.22682C182.33 8.47691 181.736 8.10109 180.979 8.10109H177.833Z" fill="#F7F7F7"/>
                            <path d="M209.645 58.5102H203.462L201.776 79.3249H194.244L201.214 0.680298H212.456L219.875 79.3249H211.442L209.645 58.5102ZM204.024 51.9837H209.082L206.721 24.9783H206.384L204.024 51.9837Z" fill="#F7F7F7"/>
                            <path d="M244.827 0.675079V79.3197H236.054V43.3241H230.666V79.3249H221.898V0.675079H230.666V36.7942H236.054V0.675079H244.827Z" fill="#F7F7F7"/>
                            <path d="M262.363 58.5102H256.18L254.493 79.3249H246.962L253.932 0.680298H265.173L272.592 79.3249H264.16L262.363 58.5102ZM256.739 51.9837H261.799L259.439 24.9783H259.091L256.739 51.9837Z" fill="#F7F7F7"/>
                            <path d="M285.073 80C283.769 79.9954 282.475 79.767 281.249 79.3249C279.985 78.8804 278.82 78.1923 277.821 77.2996C276.764 76.3369 275.938 75.1473 275.405 73.8198C274.803 72.3965 274.503 70.6717 274.504 68.6452V11.3634C274.504 9.33818 274.804 7.61333 275.405 6.18891C275.938 4.86163 276.764 3.67208 277.821 2.70906C278.82 1.81326 279.984 1.12223 281.249 0.675091C282.475 0.232962 283.769 0.00462418 285.073 0L287.096 0C288.4 0.00476143 289.693 0.233095 290.92 0.675091C292.184 1.12016 293.348 1.80815 294.348 2.70036C295.406 3.66672 296.232 4.85908 296.766 6.18891C297.364 7.61333 297.664 9.33818 297.665 11.3634V32.4044H288.897V12.6023C288.897 10.6512 288.672 9.30106 288.223 8.55173C287.773 7.8024 287.136 7.42716 286.31 7.426H285.862C285.037 7.426 284.4 7.8198 283.95 8.60741C283.5 9.39501 283.275 10.7643 283.275 12.7154V67.2864C283.275 69.2362 283.5 70.605 283.95 71.3926C284.4 72.1802 285.037 72.574 285.862 72.574H286.31C287.134 72.574 287.772 72.1802 288.223 71.3926C288.673 70.605 288.898 69.2362 288.897 67.2864V47.4825H297.665V68.6366C297.665 70.6618 297.365 72.3867 296.766 73.8111C296.231 75.138 295.405 76.3274 294.348 77.2909C293.348 78.1832 292.184 78.8711 290.92 79.3162C289.693 79.7582 288.4 79.9865 287.096 79.9913L285.073 80Z" fill="#F7F7F7"/>
                            <path d="M316.205 38.5933L325.418 79.3249H317.324L310.13 50.4073H309.905V79.3249H301.138V0.675079H309.905V30.3791H310.13L317.552 0.675079H325.647L316.205 38.5933Z" fill="#F7F7F7"/>
                            <path d="M47.1587 47.8671V79.3371H0V0.662903H15.719V63.6012H31.4397V47.8671H47.1587Z" fill="#F7F7F7"/>
                            <path d="M78.5967 0.662903V79.3371H62.8777V16.3988H47.1587V32.1329H31.4397V0.662903H78.5967Z" fill="#F7F7F7"/>
                        </svg>
                    </div>
                    <div className="hero-content flex-1 my-16 h-32 text-CTALanding text-xl">
                        <p>Lleidahack és una associació d’estudiants de la Universitat de Lleida, que promou l’aprenentatge i l’ús de les noves tecnologies.</p>
                        <br></br>
                        <p>Impulsa i organitza, any rere any, l’esdeveniment informàtic més gran de les terres de ponent, la HackEPS. La HackEPS és un event que acull a més de 150 participants d’arreu del món, amb l’objectiu de desenvolupar solucions a problemes tecnològics reals.</p>
                    </div>
                    <div className="hero-buttons flex flex-1 h-16 mb-16 gap-4">
                        <button className="bg-primaryLanding text-CTALanding text-xl font-bold py-2 px-4 rounded-full">Inscriu-te</button>
                        <button className="bg-primaryLanding text-CTALanding text-xl font-bold py-2 px-4 rounded-full">Inscriu-te</button>


                    </div>
                </div>
        </div>
    );
    }

export default HeroSectionHeader;