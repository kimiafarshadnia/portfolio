"use client";

import { useEffect, useState } from "react";
import { Icon } from "Components";
import { faDisplay, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "system";
        setTheme(savedTheme);

        const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const elements = document.documentElement;

        const applyTheme = (theme: string) => {
            if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
                elements.classList.add("dark");
            } else {
                elements.classList.remove("dark");
            }
        };

        applyTheme(savedTheme);

        const handleThemeChange = (e: MediaQueryListEvent) => {
            if (!("theme" in localStorage)) {
                applyTheme(e.matches ? "dark" : "light");
            }
        };

        darkQuery.addEventListener("change", handleThemeChange);

        return () => {
            darkQuery.removeEventListener("change", handleThemeChange);
        };
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme);
            const elements = document.documentElement;

            if (theme === "system") {
                localStorage.removeItem("theme");
                const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                elements.classList.toggle("dark", darkQuery.matches);
            } else {
                elements.classList.toggle("dark", theme === "dark");
            }
        }
    }, [theme]);

    const themeOptions = [
        {
            icon: faSun,
            text: "light",
        },
        {
            icon: faMoon,
            text: "dark",
        },
        {
            icon: faDisplay,
            text: "system",
        },
    ];

    const activeThemeOption = themeOptions.find((option) => option.text === theme);

    return (
        <div className="relative">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2"
            >
                {activeThemeOption && (
                    <Icon
                        iconName={activeThemeOption.icon}
                        className="text-secondary dark:text-blue-300"
                    />
                )}
            </button>

            {dropdownOpen && (
                <div className="absolute md:right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    {themeOptions
                        .filter((option) => option.text !== theme)
                        .map((option) => (
                            <button
                                key={option.text}
                                onClick={() => {
                                    setTheme(option.text);
                                    setDropdownOpen(false);
                                }}
                                className="flex items-center p-2 w-full hover:bg-gray-100 rounded-lg hover:dark:bg-gray-600"
                            >
                                <Icon
                                    iconName={option.icon}
                                    className="text-secondary dark:text-blue-400 mr-2"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {option.text.charAt(0).toUpperCase() + option.text.slice(1)}
                                </span>
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
};
