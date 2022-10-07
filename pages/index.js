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
        <main id={"main"} className={styles.mainContainer}>
            <Navbar />
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
                    <h2 className={darkMode ? "dark" : ""}>Issue</h2>
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
                    <p className={darkMode ? "dark" : ""}>No more useless actions, it will adapt to your working hours and will warn you when you should take a break.</p>
                    <p className={darkMode ? "dark" : ""}>Soon available on <svg  className={darkMode ? "dark sm" : "sm"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 50 50">
                        <path d="M 16 3 C 9.38 3 4 8.38 4 15 L 4 35 C 4 41.62 9.38 47 16 47 L 36 47 C 42.62 47 48 41.62 48 35 L 48 15 C 48 8.38 42.62 3 36 3 L 16 3 z M 12.619141 18.070312 C 13.319141 18.070312 13.839844 18.570469 13.839844 19.230469 C 13.839844 19.880469 13.319141 20.380859 12.619141 20.380859 C 11.909141 20.380859 11.390625 19.880469 11.390625 19.230469 C 11.390625 18.570469 11.909141 18.070312 12.619141 18.070312 z M 23.039062 18.640625 C 26.689062 18.640625 28.939453 21.189297 28.939453 25.279297 C 28.939453 29.359297 26.709062 31.929688 23.039062 31.929688 C 19.349062 31.929688 17.109375 29.369297 17.109375 25.279297 C 17.109375 21.179297 19.399062 18.640625 23.039062 18.640625 z M 35.970703 18.640625 C 38.540703 18.640625 40.419062 20.139297 40.539062 22.279297 L 38.619141 22.279297 C 38.429141 21.109297 37.419453 20.380859 35.939453 20.380859 C 34.379453 20.380859 33.349609 21.119531 33.349609 22.269531 C 33.349609 23.169531 34.009922 23.690078 35.669922 24.080078 L 37.060547 24.419922 C 39.670547 25.029922 40.740234 26.080234 40.740234 27.990234 C 40.740234 30.420234 38.859609 31.939453 35.849609 31.939453 C 33.039609 31.939453 31.149766 30.490703 31.009766 28.220703 L 32.960938 28.220703 C 33.130938 29.420703 34.31 30.189453 36 30.189453 C 37.58 30.189453 38.740234 29.370234 38.740234 28.240234 C 38.740234 27.280234 38.010078 26.700781 36.330078 26.300781 L 34.689453 25.910156 C 32.399453 25.370156 31.349609 24.260391 31.349609 22.400391 C 31.349609 20.140391 33.200703 18.640625 35.970703 18.640625 z M 23.039062 20.470703 C 20.649062 20.470703 19.130859 22.339297 19.130859 25.279297 C 19.130859 28.209297 20.599062 30.099609 23.039062 30.099609 C 25.449062 30.099609 26.929688 28.209297 26.929688 25.279297 C 26.929688 22.339297 25.449063 20.470703 23.039062 20.470703 z M 11.679688 22.060547 L 13.560547 22.060547 L 13.560547 31.630859 L 11.679688 31.630859 L 11.679688 22.060547 z"/></svg>
                        and
                        <svg  className={darkMode ? "dark sm" : "sm"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 50 50">
                            <path d="M 16.28125 0.03125 C 16.152344 0.0546875 16.019531 0.078125 15.90625 0.15625 C 15.449219 0.464844 15.347656 1.105469 15.65625 1.5625 L 17.8125 4.78125 C 14.480469 6.546875 11.996094 9.480469 11.1875 13 L 38.8125 13 C 38.003906 9.480469 35.519531 6.546875 32.1875 4.78125 L 34.34375 1.5625 C 34.652344 1.105469 34.550781 0.464844 34.09375 0.15625 C 33.632813 -0.152344 32.996094 -0.0195313 32.6875 0.4375 L 30.3125 3.9375 C 28.664063 3.335938 26.875 3 25 3 C 23.125 3 21.335938 3.335938 19.6875 3.9375 L 17.3125 0.4375 C 17.082031 0.09375 16.664063 -0.0429688 16.28125 0.03125 Z M 19.5 8 C 20.328125 8 21 8.671875 21 9.5 C 21 10.332031 20.328125 11 19.5 11 C 18.667969 11 18 10.332031 18 9.5 C 18 8.671875 18.667969 8 19.5 8 Z M 30.5 8 C 31.332031 8 32 8.671875 32 9.5 C 32 10.332031 31.332031 11 30.5 11 C 29.671875 11 29 10.332031 29 9.5 C 29 8.671875 29.671875 8 30.5 8 Z M 8 15 C 6.34375 15 5 16.34375 5 18 L 5 32 C 5 33.65625 6.34375 35 8 35 C 8.351563 35 8.6875 34.925781 9 34.8125 L 9 15.1875 C 8.6875 15.074219 8.351563 15 8 15 Z M 11 15 L 11 37 C 11 38.652344 12.347656 40 14 40 L 36 40 C 37.652344 40 39 38.652344 39 37 L 39 15 Z M 42 15 C 41.648438 15 41.3125 15.074219 41 15.1875 L 41 34.8125 C 41.3125 34.921875 41.648438 35 42 35 C 43.65625 35 45 33.65625 45 32 L 45 18 C 45 16.34375 43.65625 15 42 15 Z M 15 42 L 15 46 C 15 48.207031 16.792969 50 19 50 C 21.207031 50 23 48.207031 23 46 L 23 42 Z M 27 42 L 27 46 C 27 48.207031 28.792969 50 31 50 C 33.207031 50 35 48.207031 35 46 L 35 42 Z"/></svg>.</p>
                    <div className={styles.chipContainer}>
                        <Chip content={"Volume"} />
                        <Chip content={"Noise cancelling"} />
                        <Chip content={"Configuration"} />
                    </div>
                </div>

            </div>
            <div className={`${styles.separator} ${darkMode ? styles.dark : ""}`}/>
            <Headline content={"TEAM"} />
            <Team/>
            <Footer />
        </main>
  )
}
