import { ReactNode, createContext, useState } from "react";

type ThemeContextType = any | boolean ;



export const ThemeContext = createContext<ThemeContextType>(false);

export const ContextThemeFuntion = ({children}:any)=>{
    const [ChangeColor, setChangeColor] = useState(false);
    const HandelChnageColor = () => {
        setChangeColor(!ChangeColor);
      };
    return <ThemeContext.Provider value={{ChangeColor, setChangeColor,HandelChnageColor}}>{children}</ThemeContext.Provider>
}


