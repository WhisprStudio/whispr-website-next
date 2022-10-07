import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalState } from "../pages";
import styles from "../styles/DayNightButton.module.css"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export function DayNightButton() {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return (
        <div>
            <input type="checkbox" className={ styles.checkbox } onChange={(event) => {
                void event;
                setDarkMode(!darkMode)
            }} id="chk"/>
            <label className={styles.label} htmlFor="chk">
                <FontAwesomeIcon icon={faSun} color="white" size='xs'/>
                <FontAwesomeIcon icon={faMoon} color="white" size='xs'/>
                <div className={styles.ball}></div>
            </label>
        </div>
    );
}
