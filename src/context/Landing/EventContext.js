// import React, { createContext, ReactNode, useContext, useState } from 'react'


// const EventsContext = React.createContext<EventContextType | undefined>(undefined);


// export const EventsProvider = ({ children }) => {
//     const [events, setEvents] = useState([]);
//     const [categories, setCategories] = useState([]); //llista de categories
//     const [destacats, setDestacats] = useState([]); //t'agafa tots els que tinguin atribut destacat true
//     const [lastEvent, setLastEvent] = useState([]); //ells ultims 3
//     const [nextEvent, setNextEvent] = useState([]); 
//     const [results, setResults] = useState([]);
    

//   return (
//     <EventsContext.Provider value={{events, setEvents, categories, setCategories, destacats, setDestacats, 
//     lastEvent, setLastEvent, nextEvent, setNextEvent, results, setResults}}>
//       {children}
//     </EventsContext.Provider>
//   );
// };

// export const useEvents = () => {
//   const context = React.useContext(EventsContext);
//   if (context === undefined) {
//     throw new Error('useEvents must be used within a EventsProvider');
//   }
//   return context;
// };
