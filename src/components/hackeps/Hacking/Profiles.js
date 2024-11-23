import LogosComp from "./LogosComp";
import CounterActivity from "./CounterActivity";
const targetTime = new Date("2024-11-24T11:00:00").getTime();

const profiles = {
  Hacking: {
    bgColor: "#0e3a29",
    footer: null,
    content: {
      type: "content",
      content: {
        div: (
          <div className="text-center">
            <p>Temps per Hackejar</p>
            <CounterActivity type={2} targetTime={targetTime} />
          </div>
        ),
        bgColor: "#2484bc",
        textColor: "#2484bc",
      },
    },
    heightContent: `h-72`,
    heightFooter: `h-40`,
  },
  NightMode: {
    bgColor: "#2c5973",
    footer: (
      <div className="w-full align-end">
        {" "}
        <LogosComp />{" "}
      </div>
    ),
    content: {
      type: "color",
      content: {
        div: (
          <div className="text-center">
            <p>Temps per Hackejar</p>
            <CounterActivity type={2} targetTime={targetTime} />
          </div>
        ),
        bgColor: "#2484bc",
        textColor: "#2484bc",
      },
    },
    heightContent: `h-72`,
    heightFooter: `h-40`,
  },
  EndMode: {
    bgColor: "#0e3a29",
    footer: (
      <div className="w-full align-end">
        {" "}
        <LogosComp />{" "}
      </div>
    ),
    content: {
      type: "content",
      content: {
        div: (
          <div className="text-center flex flex-row">
            <div className="flex-1 border-r-2 border-black items-center">
              <CounterActivity type={3} targetTime={targetTime} />
            </div>
            <div className="instruccionsEntrega flex-1 text-justify	mr-28 ml-4">
              <h2>Com entregar el repte al DevPost?</h2>
              <ul className="mt-4">
                <li className="flex flex-row gap-1">
                  <span className="bg-red-300 rounded-full w-7 h-7 text-center inline-block">
                    1
                  </span>{" "}
                  <p>Entra al DevPost i busca la Hackeps 2024.</p>
                </li>
                <li className="flex flex-row gap-1">
                  <span className="bg-red-300 rounded-full w-7 h-7 text-center inline-block">
                    2
                  </span>{" "}
                  <p>Busca Hackeps.....</p>
                </li>
                <li className="flex flex-row gap-1">
                  <span className="bg-red-300 rounded-full w-7 h-7 text-center inline-block">
                    3
                  </span>{" "}
                  <p>Selecciona l'enllaç del repte</p>
                </li>
                <li className="flex flex-row gap-1">
                  <span className="bg-red-300 rounded-full w-7 h-7 text-center inline-block">
                    4
                  </span>{" "}
                  <p>Pujal i llestos.</p>
                </li>
              </ul>
              <br></br>
              <p>
                Si no trobes el devPost de la HackEps, pots accedir amb el
                nostre acces directe des de:{" "}
                <a href="lleidahack.dev/devpostHackeps">
                  lleidahack.dev/devpostHackeps
                </a>
              </p>
            </div>
          </div>
        ),
        bgColor: "#2484bc",
        textColor: "#2484bc",
      },
    },
    heightContent: `h-96`,
    heightFooter: `h-16`,
  },
};

export default profiles;
