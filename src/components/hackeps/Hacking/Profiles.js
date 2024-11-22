import LogosComp from "./LogosComp";
import CounterActivity from "./CounterActivity";


const profiles = {
    Hacking: {
        bgColor: "#0e3a29",
        footer: <div className="w-full align-end"> <LogosComp/> </div>,
        content: <div className="text-center"><p>Temps per Hackejar</p><CounterActivity type="2"/></div>,
        heightContent: `h-72`,
        heightFooter: `h-40`
    },
    Announcements: {
        bgColor: "#0e3a29",
        // footer:
        // content:
        // heightContent:
        // heightFooter: 
    },
    Meals: {
        bgColor: "#24bc7d",
        // footer:
        // content:
        // heightContent:
        // heightFooter: 
    },
    NightMode: {
        bgColor: "#2484bc",
        // footer:
        // content:
        // heightContent:
        // heightFooter: 
    },
    EndMode: {
        bgColor: "#0e3a29",
        // footer:
        // content:
        // heightContent:
        // heightFooter: 
    },

}

export default profiles;