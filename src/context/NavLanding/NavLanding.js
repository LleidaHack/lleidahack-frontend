import React, { createContext, useState, useContext} from 'react';

// Create the context
const NavLandingContext = createContext();

// Create a provider component
export const NavLandingProvider = ({ children }) => {
    const [isLandingVisible, setIsLandingVisible] = useState(false);
    return (
        <NavLandingContext.Provider value={{ isLandingVisible, setIsLandingVisible }}>
            {children}
        </NavLandingContext.Provider>
    );
};

export const useNavLanding = () => {
    const context = useContext(NavLandingContext);
    if (context === undefined) {
        throw new Error('useNavLanding must be used within a NavLandingProvider');
    }
    return context;
}

export default NavLandingProvider;