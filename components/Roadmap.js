import {useGlobalState} from "../pages";

export function Roadmap() {
    const [darkMode, setDarkMode] = useGlobalState('darkMode');

    return <div className={'roadmap'}>
            <img 
                className={darkMode ? "dark" : ""}
                alt={"roadmap"}
                src={darkMode ? "/roadmap_darkmode.png" : "/roadmap_normalmode.png"}>
            </img>
        </div>
}