import lleidaHackLogo from "../../../icons/imagotip_lleidahack_blanc.png";
// Falta redirigir a las redes sociales de LleidaHack
// Falta rediidigir politiques de privacitat, avís legal i política de cookies
const Footer = () => {
  return (
    <div className="bg-primaryLanding w-full h-36 md:px-10 py-4 md:items-center">
      <div className="flex flex-col md:flex-row justify-between md:items-center ml-5 md:ml-0">
        <div className="hidden md:block">
          <a href="/lleidahack">
            <img src={lleidaHackLogo} className="h-14 w-52" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:gap-40">
          <li className="list-none text-base md:text-xl">
            <a
              className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              href="/lleidahack/legalinfo"
            >
              Informació legal
            </a>
          </li>
        </div>
        <div className="block md:center align-center my-4 md:hidden">
          <div className="w-11/12 border-1 border-white" />
        </div>
        <div className="items-center flex md:flex-row justify-between mr-5 md:mr-0 mb-2 md:mb-0">
          <div className="block md:hidden">
            <a href="/lleidahack">
              <img src={lleidaHackLogo} className="h-14 w-36" />
            </a>
          </div>
          <div className="block  ">
            <p className="text-CTALanding text-xl hidden md:block">
              Segueix-nos a{" "}
            </p>
            <div className="flex items-center justify-around">
              <div className="">
                <a
                  className="mx-2 h-fit-content block"
                  href="https://es.linkedin.com/company/lleidahack"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.6799 0.333259H3.52992C3.12842 0.314452 2.72714 0.375003 2.34907 0.511479C1.971 0.647956 1.62356 0.857652 1.32662 1.12855C1.02971 1.39948 0.789116 1.72631 0.618666 2.09031C0.448216 2.45433 0.351219 2.84838 0.333252 3.24993V34.47C0.356772 35.3102 0.701125 36.1099 1.29559 36.7042C1.89005 37.2987 2.68954 37.6431 3.52992 37.6667H34.6799C35.4968 37.6303 36.2671 37.2751 36.8254 36.6776C37.3838 36.08 37.6857 35.2876 37.6666 34.47V3.24993C37.6734 2.85909 37.6001 2.47104 37.4515 2.10951C37.3028 1.74801 37.0818 1.42066 36.8021 1.14755C36.5225 0.874452 36.1901 0.661373 35.8251 0.521349C35.4602 0.381326 35.0705 0.317322 34.6799 0.333259ZM11.9999 31.46H6.56325V14.8233H11.9999V31.46ZM9.40992 12.3033C9.03054 12.3165 8.65252 12.2511 8.29962 12.1112C7.94671 11.9714 7.62653 11.7601 7.35922 11.4905C7.09189 11.221 6.88318 10.8991 6.74621 10.5451C6.60922 10.1911 6.54694 9.81252 6.56325 9.43326C6.54648 9.04989 6.61001 8.66727 6.7498 8.30992C6.88959 7.95255 7.10253 7.62836 7.37495 7.35813C7.64739 7.08789 7.97328 6.87758 8.33175 6.74071C8.69025 6.60381 9.07338 6.54338 9.45658 6.56326C9.83596 6.55005 10.214 6.61541 10.5669 6.75527C10.9198 6.89513 11.24 7.10646 11.5073 7.37598C11.7746 7.64551 11.9833 7.96739 12.1203 8.32143C12.2573 8.67546 12.3196 9.054 12.3033 9.43326C12.32 9.81663 12.2565 10.1992 12.1167 10.5566C11.9769 10.914 11.764 11.2382 11.4916 11.5084C11.2191 11.7786 10.8932 11.9889 10.5347 12.1258C10.1763 12.2627 9.79312 12.3231 9.40992 12.3033ZM31.4599 31.46H25.9999V22.36C25.9999 20.19 25.2299 18.6967 23.2933 18.6967C22.6917 18.7018 22.1063 18.8929 21.6177 19.2438C21.1289 19.5948 20.7607 20.0883 20.5633 20.6567C20.4116 21.0827 20.3481 21.5352 20.3766 21.9867V31.46H15.0099V14.8233H20.3766V17.1567C20.8538 16.28 21.5638 15.5525 22.4285 15.0541C23.2933 14.5559 24.2789 14.3065 25.2766 14.3333C28.7999 14.3333 31.4599 16.6667 31.4599 21.6367V31.46Z"
                      fill="#F7F7F7"
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <a
                  className="mx-2 h-fit-content block"
                  href="https://www.instagram.com/LleidaHack/?hl=es"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.88501 8.93103C0.88501 4.48736 4.48731 0.885056 8.93099 0.885056H33.0689C37.5125 0.885056 41.1149 4.48736 41.1149 8.93103V33.069C41.1149 37.5126 37.5125 41.1149 33.0689 41.1149H8.93099C4.48731 41.1149 0.88501 37.5126 0.88501 33.069V8.93103ZM8.93099 4.90804C6.70915 4.90804 4.908 6.7092 4.908 8.93103V33.069C4.908 35.2909 6.70915 37.0919 8.93099 37.0919H33.0689C35.2908 37.0919 37.0919 35.2909 37.0919 33.069V8.93103C37.0919 6.7092 35.2908 4.90804 33.0689 4.90804H8.93099ZM21 14.9655C17.6671 14.9655 14.9655 17.6672 14.9655 21C14.9655 24.3328 17.6671 27.0345 21 27.0345C24.3328 27.0345 27.0344 24.3328 27.0344 21C27.0344 17.6672 24.3328 14.9655 21 14.9655ZM10.9425 21C10.9425 15.4454 15.4454 10.9425 21 10.9425C26.5545 10.9425 31.0574 15.4454 31.0574 21C31.0574 26.5545 26.5545 31.0575 21 31.0575C15.4454 31.0575 10.9425 26.5545 10.9425 21ZM32.0632 12.954C33.7295 12.954 35.0804 11.6032 35.0804 9.93678C35.0804 8.2704 33.7295 6.91954 32.0632 6.91954C30.3968 6.91954 29.0459 8.2704 29.0459 9.93678C29.0459 11.6032 30.3968 12.954 32.0632 12.954Z"
                      fill="#F7F7F7"
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <a
                  className="mx-2 h-fit-content block"
                  href="https://twitter.com/lleidahack"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_23_290)">
                      <path
                        d="M31.4666 0H37.5999L24.1333 15.3333L39.8666 36.1333H27.5199L17.8533 23.4933L6.78661 36.1333H0.653272L14.9199 19.7333L-0.146729 0H12.5066L21.2399 11.5467L31.4666 0ZM29.3199 32.5333H32.7199L10.7199 3.46667H7.06661L29.3199 32.5333Z"
                        fill="#F7F7F7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_23_290">
                        <rect width="40" height="36.1333" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
