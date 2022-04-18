import styles from "../styles/Switch.module.css"
import {useGlobalState} from "../pages";

export function Switch() {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');
    return <label className={styles.switch}>
            <input type="checkbox" onClick={() => {
                setDarkMode(!darkMode)
            }} />
            <span className={`${styles.round} ${styles.slider}`} />
        </label>
}