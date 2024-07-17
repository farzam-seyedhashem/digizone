'use client';

import {createContext, ReactElement, useContext, useEffect, useState} from 'react'

export const ThemeContext = createContext({})
export function ThemeProvider({children}) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [colorSystem, setColorSystem] = useState('default-theme-color');
    useEffect(() => initialThemeHandler());

    function isLocalStorageEmpty() {
        return !localStorage.getItem("theme");
    }

    function initialThemeHandler() {
        if (isLocalStorageEmpty()) {
            localStorage.setItem("theme", JSON.stringify({isDark: true, colorSystem: 'default-theme-color'}));
            document.querySelector("body").classList.add(colorSystem)
            document.querySelector("body").classList.add("dark");
            setIsDarkTheme(true);
        } else {
            const theme = JSON.parse(localStorage.getItem("theme"))
            setIsDarkTheme(theme.isDark)
            document.querySelector("body").classList.remove(colorSystem)
            setColorSystem(theme.colorSystem)
            document.querySelector("body").classList.add(theme.colorSystem)
            isDarkTheme ? document.querySelector("body").classList.add('dark') : document.querySelector("body").classList.remove('dark')

        }
    }

    function setTheme(isDark,newColorSystem) {
        setIsDarkTheme(isDark);
        if (isDark !== isDarkTheme){
            toggleDarkClassToBody();
        }
        document.querySelector("body").classList.remove(colorSystem)
        setColorSystem(newColorSystem)
        document.querySelector("body").classList.add(newColorSystem)

        setValueToLocalStorage({isDark, colorSystem: newColorSystem});
    }

    function toggleDarkClassToBody() {
        if (isDarkTheme){
            document.querySelector("body").classList.add("dark");
        }else{
            document.querySelector("body").classList.remove("dark");
        }
    }

    function setValueToLocalStorage(value) {
        localStorage.setItem("theme", JSON.stringify(value));
    }

    return <ThemeContext.Provider value={{theme: {isDark: isDarkTheme, colorSystem: colorSystem}, setTheme }}>{children}</ThemeContext.Provider>
}
export const useThemeContext = () => useContext(ThemeContext);
