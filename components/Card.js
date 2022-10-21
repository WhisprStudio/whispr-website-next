import styles from "../styles/Home.module.css";
import {useGlobalState} from "../pages";

export function Card({content, title, icon}) {

    const [darkMode] = useGlobalState('darkMode');

    return <div className={`${styles.card} ${darkMode ? styles.cardDark : ""}  ${darkMode ? "dark" : ""}`}>
        <div>
            {icon}
            <h2 className={darkMode ? "dark" : ""}>{title}</h2>
        </div>
        <p className={darkMode ? "dark" : ""}>
            {content}
        </p>
    </div>
}