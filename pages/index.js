import styles from '../styles/Home.module.css'
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
import {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import { createGlobalState } from 'react-hooks-global-state';
import {Card} from "../components/Card";
import {useWindowDimensions} from "../components/WindowDim";
import {Footer} from "../components/Footer";
import {Chip} from "../components/Chip";
import {Headline} from "../components/Headline";
import {TopButton} from "../components/TopButton";
import Team from '../components/Team';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

const initialState = { darkMode: false };
export const { useGlobalState } = createGlobalState(initialState);

export default function Home() {

    const [notif, setNotif] = useState(false);
    const [darkMode, setDarkMode] = useGlobalState('darkMode');
    const dim = useWindowDimensions();

    useEffect(() => {
        let ret = true;
        if (localStorage.getItem("darkMode") === "false")
            ret = false;
        setDarkMode(ret)
    }, [])

    useEffect(() => {
        localStorage.setItem("darkMode",darkMode.toString())
        document.body.classList.toggle("body-light")
    }, [darkMode])

    return (
        <main style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Navbar />
            <div id={"main"} className={styles.mainContainer}>
                <TopButton />
                <Snackbar
                    open={notif}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    autoHideDuration={3000}
                    onClose={() => setNotif(false)}
                    key={'bottomcenter'}
                >
                    <Alert onClose={() => setNotif(false)} severity="success" sx={{ width: '100%' }}>
                        Email copied to clipboard
                    </Alert>
                </Snackbar>
                <div className={styles.firstSectionContainer}>
                    <div className={styles.titleImageContainer}>
                        <h1 className={darkMode ? "dark" : ""}>
                            WHISPR <span style={{color: "#ffae00"}}>STUDIO</span>
                        </h1>
                        <h2 className={darkMode ? "dark" : ""}>
                            Create your own bubble of silence with this unidirectional speaker.
                        </h2>
                        <div className={darkMode ? "dark" : ""}>
                            <button className={`${styles.buttonHome} ${darkMode ? styles.dark : ""}`} onClick={() => {
                                if (dim.width > 1200) {
                                    navigator.clipboard.writeText("whispr.studio@gmail.com")
                                    setNotif(true)
                                } else {
                                    window.location.href = "mailto:whispr.studio@gmail.com?subject=Contact client"
                                }
                            }}>Contact us</button>
                        </div>
                    </div>

                </div>
                <div className={`${styles.separator} ${darkMode ? styles.dark : ""}`}/>
                <Headline content={"CONCEPT"} />
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <div className={styles.issue}>
                        <p className={darkMode ? "dark" : ""}>Noise at work is one of the most important factor that leads to stress. Indeed, noise makes it more difficult to concentrate, which has a negative impact on employee productivity. In addition to decreasing concentration and cognitive performance, noise at work can cause fatigue, discomfort, nervousness, difficult inter-employee communication, which can be the source of work-related accidents.</p>
                    </div>
                    <div className={styles.conceptProduct}>
                        <Card icon={
                            <svg className={darkMode ? "dark" : ""} width="45.793px" height="45.793px" viewBox="0 0 45.793 45.793">
                                <circle cx="22.899" cy="12.692" r="2.524"/>
                                <path d="M22.899,26.661c-2.893,0-5.245,2.354-5.245,5.245c0,2.893,2.353,5.244,5.245,5.244s5.246-2.353,5.246-5.244
                        C28.145,29.016,25.791,26.661,22.899,26.661z"/>
                                <path d="M30.701,0H15.093c-4.647,0-8.415,3.768-8.415,8.414v28.965c0,4.646,3.768,8.414,8.415,8.414H30.7
                        c4.647,0,8.415-3.768,8.415-8.414V8.414C39.116,3.768,35.348,0,30.701,0z M22.899,7.182c3.042,0,5.511,2.467,5.511,5.511
                        c0,3.043-2.469,5.511-5.511,5.511c-3.044,0-5.511-2.468-5.511-5.511C17.388,9.648,19.855,7.182,22.899,7.182z M22.899,42.13
                        c-5.646,0-10.223-4.577-10.223-10.224s4.576-10.223,10.223-10.223c5.646,0,10.223,4.577,10.223,10.223S28.544,42.13,22.899,42.13z
                        "/>
                            </svg>} title={"Speaker"} content={"Place it in front of yourself and create your bubble to be isolated from noises."}/>
                        <Card icon={<svg className={darkMode ? "dark" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg>
                        } title={"Application"} content={"Control the speaker to create silence, Activate zenmode to isolate yourself from notifications."}/>
                    </div>
                </div>
                <div className={`${styles.separator} ${darkMode ? styles.dark : ""}`}/>
                <Headline content={"PRODUCT"} />
                <div className={styles.productInfoContainer}>
                    <Card icon={<img className={"pure"} alt={"salon"}  src={"/salon.png"} />} title={"Pro version"} content={"The Pro Version, bigger, allows more than 3 people at the same time in the bubble."}/>
                    <Card icon={<img className={"pure"} alt={"portable"}  src={"/partable.png"} />} title={"Portable version"} content={"The Portable Version, smaller, will be fully transportable wherever you need."}/>
                </div>
                <div className={`${styles.separator} ${darkMode ? styles.dark : ""}`}/>
                <div className={`${styles.appSection}`}>
                    <img className={darkMode ? "dark" : ""} alt={"app"} height={200} src={"/apprefined.png"} />
                    <div>
                        <Headline content={"APPLICATION"} />
                        <div style={{marginTop: "70px"}}>
                            <p className={darkMode ? "dark" : ""}>No more useless actions, it will adapt to your working hours and will warn you when you should take a break.</p>
                            <p className={darkMode ? "dark" : ""}>Soon available on <strong>IOS</strong> and <strong>Android</strong>.</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.separator} ${darkMode ? styles.dark : ""}`}/>
                <Headline content={"TEAM"} />
                <Team/>
                <Footer />
            </div>
        </main>
  )
}
