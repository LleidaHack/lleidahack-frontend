import LogosComp from "./LogosComp";
import CounterActivity from "./CounterActivity";
const targetTime = new Date("2024-11-22T23:59:00").getTime();


const profiles = {
    Hacking: {
        bgColor: "#0e3a29",
        footer: <div className="w-full align-end"> <LogosComp/> </div>,
        content: {type: "content", content:{div: <div className="text-center"><p>Temps per Hackejar</p><CounterActivity type={2} targetTime={targetTime}/></div>, bgColor: "#2484bc", textColor: "#2484bc"}},
        heightContent: `h-72`,
        heightFooter: `h-40`
    },
    NightMode: {
        bgColor: "#2c5973",
        footer: <div className="w-full align-end"> <LogosComp/> </div>,
        content: {type: "color", content:{div: <div className="text-center"><p>Temps per Hackejar</p><CounterActivity type={2} targetTime={targetTime}/></div>, bgColor: "#2484bc", textColor: "#2484bc"}},
        heightContent: `h-72`,
        heightFooter: `h-40`
    },
    EndMode: {
        bgColor: "#2c5973",
        footer: <div className="w-full align-end"> <LogosComp/> </div>,
        content: {type: "content", content:
            {
                div: <div className="text-center flex flex-row">
                    <div className="flex-1 border-r-2 border-black">
                        <CounterActivity type={2} targetTime={targetTime}/> 
                    </div>
                    <div className="instruccionsEntrega flex-1">
                        <h2>Com entregar el repte al DevPost?</h2>
                        <ul>
                            <li><span>1er </span> Entra al DevPost i busca la Hackeps 2024.</li>
                            <li><span>2on </span> Clica a .....</li>
                            <li><span>3er </span> Puja el enllaç del repo...</li>
                            <li><span>4t </span> Prem el boto de guardar i ja ho tens</li>
                        </ul>
                        <br></br>
                        <p>Si no trobes el devPost de la HackEps, pots accedir amb el nostre acces directe des de: \n <span className="text-blue-600">lleidahack.dev/devpostHackeps</span></p>
                    </div>
                </div>,
                bgColor: "#2484bc", 
                textColor: "#2484bc"
            }
        },
        heightContent: `h-96`,
        heightFooter: `h-16`
    },

}

export default profiles;