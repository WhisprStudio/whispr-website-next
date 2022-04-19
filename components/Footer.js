import styles from "../styles/Footer.module.css"
import {useGlobalState} from "../pages";

export function Footer() {

    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div className={`${styles.footerContainer} ${darkMode ? styles.dark : " "}`}>
        <p>whispr.studio@gmail.com &copy;</p>
    </div>
}