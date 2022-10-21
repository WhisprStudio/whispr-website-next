import {Switch} from "./Switch";
import styles from "../styles/Navbar.module.css"
import {useCallback, useEffect, useState} from "react";
import {LogoWhite, LogoBlack} from "./Logo";
import { useGlobalState } from "../pages";
import {DayNightButton} from "./DayNightButton";

export function Navbar() {
    const [visible, setVisible] = useState(true);
    const [y, setY] = useState(0);
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setVisible(true)
            } else if (y < window.scrollY && window.scrollY > 80) {
                setVisible(false)
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return <div style={{top: visible ? '5%' : '-80px'}} className={styles.menuContainer}>
        <div style={{width: "100px"}}>
            {darkMode ? <LogoWhite /> : <LogoBlack />}
        </div>
        <DayNightButton/>
   </div>
}
