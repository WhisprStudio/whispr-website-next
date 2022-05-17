import styles from "../styles/Home.module.css"
import {useCallback, useEffect, useState} from "react";
import {useGlobalState} from "../pages";

export function TopButton() {
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

    const scrollToTop = () => {
        let el = document.getElementById("main")
        el.scrollIntoView()
    }

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return <svg id={"topButton"} style={{bottom: !visible ? '5%' : '-80px'}} onClick={scrollToTop} className={`${styles.topButton} ${darkMode ? styles.dark : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>
}