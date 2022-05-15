import styles from "../styles/Headline.module.css"
import {useGlobalState} from "../pages";

export function Headline({content}) {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div>
        <h1 className={` ${styles.headline} ${darkMode ? styles.dark : ""}`}>
            <span>
            {content}
            </span>
        </h1>
    </div>
}
