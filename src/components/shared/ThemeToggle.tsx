"use client"

import { useEffect, useState } from "react";
import { Icon } from "Components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div>
            <div className='relative flex flex-row items-center justify-between w-fit h-7 p-2 gap-2 rounded-full bg-lavender' onClick={() => setDarkMode(!darkMode)}>

                <Icon iconName={faMoon} size='lg' className="text-white" />

                <div className={`absolute ${darkMode ? 'left-1' : 'right-1'} bg-white dark:bg-darkMode h-6 w-6 rounded-full shadow-md transform transition-transform duration-300 cursor-pointer`}></div>

                <Icon iconName={faSun} size='lg' className="text-white dark:text-darkMode" />
            </div>
        </div>
    )
}