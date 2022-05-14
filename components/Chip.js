import styles from "../styles/Chip.module.css"
import {useGlobalState} from "../pages";

export function Chip({content}) {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div hidden={!content} className={`${styles.chip} ${darkMode ? "dark" : ""}`}>
        {content}
    </div>
}