import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalState } from "../pages";
import styles from "../styles/DayNightButton.module.css"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export function DayNightButton() {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return (<>
        <input type="checkbox" className={ styles.checkbox } onChange={() => {
            setDarkMode(!darkMode)
        }} id="chk"/>
        <label className={styles.label} htmlFor="chk">
            <FontAwesomeIcon icon={faMoon} color="white" size='sm'/>
            <FontAwesomeIcon icon={faSun} color="white" size='sm' />
            <div className={styles.ball}></div>
        </label>
    </>
    );
}
