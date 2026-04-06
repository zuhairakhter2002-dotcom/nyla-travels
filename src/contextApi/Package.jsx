import { createContext, useState } from "react";

export const PackagesContext = createContext();

export const PackagesProvider = ({ children }) => {
    const [Packages, setpackages] = useState([
        {
            id: 1,
            name: "dubai"
        }
    ]);

    return (
        <PackagesContext.Provider value={[Packages, setpackages]} >
            {children}
        </PackagesContext.Provider>
    )
}