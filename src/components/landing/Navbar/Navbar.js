import logoLleidaHack from "../../../icons/isotip_lleidahack_blanc.png";

// Remarcar a la pagina on ets, quan tinguem les urls definitives caldra canviar-ho
// Falta implementar els coponentes dels botons que falten
// Falta implementar el responsive
const Navbar = () => {
  return (
    <div>
      <div className="bg-primaryLanding w-full h-16 px-4 py-2 items-center">
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              src={logoLleidaHack}
              alt="logo"
              className="h-12 w-12 flex-none"
            />
          </a>
          <div className="flex items-center justify-center ">
            <li className="mx-8 text-xl list-none	">
              <a
                href="/"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                HackEPS
              </a>
            </li>
            <li className="mx-8 text-xl list-none	">
              <a
                href="/events"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                Events
              </a>
            </li>
            <li className="mx-8 text-xl list-none	">
              <a
                href="/noticies"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                Noticies
              </a>
            </li>
            <li className="mx-8 text-xl list-none	">
              <a
                href="/contacte"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                Contacte
              </a>
            </li>
            <li className="mx-8 text-xl list-none	">
              <a
                href="/qui-som"
                className="no-underline text-CTALanding hover:text-secondaryLanding duration-300"
              >
                Qui som?
              </a>
            </li>
          </div>
          <div className="flex">
            <button className="bg-primaryLanding text-xl p-0 mx-2 ">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.8269 17.2192C28.2632 16.6583 27.3514 16.6605 26.7904 17.2243C26.2295 17.7881 26.2318 18.6998 26.7955 19.2608L28.8269 17.2192ZM32.5844 25.0209C33.1481 25.5817 34.0599 25.5794 34.6209 25.0157C35.1817 24.452 35.1794 23.5401 34.6157 22.9791L32.5844 25.0209ZM34.6157 25.0209C35.1794 24.4598 35.1817 23.548 34.6209 22.9843C34.0599 22.4206 33.1481 22.4183 32.5844 22.9791L34.6157 25.0209ZM26.7955 28.7391C26.2318 29.3001 26.2295 30.212 26.7904 30.7757C27.3514 31.3394 28.2632 31.3417 28.8269 30.7809L26.7955 28.7391ZM33.6 25.44C34.3953 25.44 35.04 24.7953 35.04 24C35.04 23.2047 34.3953 22.56 33.6 22.56V25.44ZM6.72003 22.56C5.92475 22.56 5.28003 23.2047 5.28003 24C5.28003 24.7953 5.92475 25.44 6.72003 25.44V22.56ZM26.7955 19.2608L32.5844 25.0209L34.6157 22.9791L28.8269 17.2192L26.7955 19.2608ZM32.5844 22.9791L26.7955 28.7391L28.8269 30.7809L34.6157 25.0209L32.5844 22.9791ZM33.6 22.56H6.72003V25.44H33.6V22.56Z"
                  fill="#F7F7F7"
                />
                <path
                  d="M18.24 29.76C18.24 34.0015 21.6785 37.44 25.92 37.44H33.6C37.8415 37.44 41.28 34.0015 41.28 29.76V18.24C41.28 13.9984 37.8415 10.56 33.6 10.56H25.92C21.6785 10.56 18.24 13.9984 18.24 18.24"
                  stroke="#F7F7F7"
                  stroke-width="3.84"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.8269 17.2192C28.2632 16.6583 27.3514 16.6605 26.7904 17.2243C26.2295 17.7881 26.2318 18.6998 26.7955 19.2608L28.8269 17.2192ZM32.5844 25.0209C33.1481 25.5817 34.0599 25.5794 34.6209 25.0157C35.1817 24.452 35.1794 23.5401 34.6157 22.9791L32.5844 25.0209ZM34.6157 25.0209C35.1794 24.4598 35.1817 23.548 34.6209 22.9843C34.0599 22.4206 33.1481 22.4183 32.5844 22.9791L34.6157 25.0209ZM26.7955 28.7391C26.2318 29.3001 26.2295 30.212 26.7904 30.7757C27.3514 31.3394 28.2632 31.3417 28.8269 30.7809L26.7955 28.7391ZM33.6 25.44C34.3953 25.44 35.04 24.7953 35.04 24C35.04 23.2047 34.3953 22.56 33.6 22.56V25.44ZM6.72003 22.56C5.92475 22.56 5.28003 23.2047 5.28003 24C5.28003 24.7953 5.92475 25.44 6.72003 25.44V22.56ZM26.7955 19.2608L32.5844 25.0209L34.6157 22.9791L28.8269 17.2192L26.7955 19.2608ZM32.5844 22.9791L26.7955 28.7391L28.8269 30.7809L34.6157 25.0209L32.5844 22.9791ZM33.6 22.56H6.72003V25.44H33.6V22.56Z"
                  fill="#F7F7F7"
                />
                <path
                  d="M18.24 29.76C18.24 34.0015 21.6785 37.44 25.92 37.44H33.6C37.8415 37.44 41.28 34.0015 41.28 29.76V18.24C41.28 13.9984 37.8415 10.56 33.6 10.56H25.92C21.6785 10.56 18.24 13.9984 18.24 18.24"
                  stroke="#F7F7F7"
                  stroke-width="3.84"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="bg-primaryLanding text-xl p-0 mx-2 text-CTALanding">
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.16 31.74L29.18 15.02C28.76 13.92 27.82 13.24 26.74 13.24C25.66 13.24 24.74 13.92 24.28 15.06L18.32 31.74C18.04 32.52 18.44 33.38 19.22 33.66C20 33.94 20.86 33.54 21.14 32.76L22.38 29.3H31.08L32.32 32.76C32.54 33.38 33.12 33.76 33.74 33.76C33.9 33.76 34.08 33.74 34.24 33.68C35.02 33.4 35.42 32.54 35.14 31.76L35.16 31.74ZM23.48 26.28L26.76 17.1L30.04 26.28H23.48ZM18.38 8.70001C13.86 15.84 9.77999 20.16 4.81999 23.04C4.57999 23.18 4.31999 23.24 4.07999 23.24C3.55999 23.24 3.05999 22.98 2.77999 22.5C2.35999 21.78 2.59999 20.86 3.31999 20.46C7.51997 18.02 10.96 14.52 14.82 8.72001H2.23999C1.41999 8.72001 0.73999 8.04001 0.73999 7.22001C0.73999 6.40001 1.41999 5.72001 2.23999 5.72001H9.73999V1.76001C9.73999 0.94001 10.42 0.26001 11.24 0.26001C12.06 0.26001 12.74 0.94001 12.74 1.76001V5.72001H20.24C21.06 5.72001 21.74 6.40001 21.74 7.22001C21.74 8.04001 21.06 8.72001 20.24 8.72001H18.36L18.38 8.70001ZM18.46 23.24C18.2 23.24 17.94 23.18 17.7 23.04C16.4 22.28 15.14 21.44 13.96 20.56C13.3 20.06 13.16 19.12 13.66 18.46C14.16 17.8 15.1 17.66 15.76 18.16C16.84 18.98 18.02 19.74 19.22 20.44C19.94 20.86 20.18 21.78 19.76 22.5C19.48 22.98 18.98 23.24 18.46 23.24Z"
                  fill="#F7F7F7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
