import {useGlobalState} from "../pages";
import styles from '../styles/Roadmap.module.css'

export function Roadmap() {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div className={styles.roadmap}>
            <img 
                className={darkMode ? "darkr" : "r"}
                alt={"roadmap"}
                src={darkMode ? "/roadmap_darkmode.png" : "/roadmap_normalmode.png"}>
            </img>
        </div>
}