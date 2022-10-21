import styles from "../styles/Footer.module.css"
import {useGlobalState} from "../pages";

export function Footer() {

    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div className={`${styles.footerContainer} ${darkMode ? styles.dark : " "}`}>
        <h2>Do you want to contact us ?</h2>
        <p className={darkMode ? "dark" : " "}>whispr.<span>studio</span>@gmail.com &copy;</p>
    </div>
}