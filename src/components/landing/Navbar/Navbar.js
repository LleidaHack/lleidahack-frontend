import IC_Languages from "src/components/icons/IC_Languages";
import IC_LleidaHack from "src/components/icons/IC_LleidaHack";
import IC_Sign_In from "src/components/icons/IC_Sign_In";

// Remarcar a la pagina on ets, quan tinguem les urls definitives caldra canviar-ho
// Falta implementar els coponentes dels botons que falten
// Falta implementar el responsive
const Navbar = () => {
  return (
    <div>
      <div className="bg-primaryLanding w-full h-16 pl-4 pr-4 items-center">
        <div className="flex justify-between items-center pr-2">
          <a href="/">
            <IC_LleidaHack/>
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
            <button className="bg-primaryLanding p-0 mx-2 ">
              <IC_Sign_In/> 
            </button>
            <button className="bg-primaryLanding p-0 mx-2">
              <IC_Languages/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
