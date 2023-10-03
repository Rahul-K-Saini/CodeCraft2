import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme:"light",
    lightMode:()=>{},
    darkMode:()=>{},
}) 

export const ContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}