import styles from '../styles/Home.module.css'
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
import {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import { createGlobalState } from 'react-hooks-global-state';
import {Card} from "../components/Card";

const initialState = { darkMode: false };
export const { useGlobalState } = createGlobalState(initialState);

export default function Home() {

    const [notif, setNotif] = useState(false);

    const [darkMode, setDarkMode] = useGlobalState('darkMode');


    useEffect(() => {
            document.body.classList.toggle("body-light")
    }, [darkMode])

  return (
        <main className={styles.mainContainer}>
            <Navbar />
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
                            navigator.clipboard.writeText("whispr.studio@gmail.com")
                            setNotif(true)
                        }}>Contact us</button>
                    </div>
                </div>
                <div className={styles.speakerImage}>
                </div>
            </div>
            <div className={styles.projectInfoContainer}>
                <Card icon={<svg className={darkMode ? "dark" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.1 320c-17.64 0-32.02 14.37-32.02 31.1s14.38 31.1 32.02 31.1s32.02-14.37 32.02-31.1S177.8 320 160.1 320zM86.66 361.4c-12.51-12.49-32.77-12.49-45.27 0c-12.51 12.5-12.51 32.78 0 45.27l63.96 63.99c12.51 12.49 32.77 12.49 45.27 .002c12.51-12.5 12.51-32.78 0-45.27L86.66 361.4zM32.02 448C14.38 448 0 462.4 0 480S14.38 512 32.02 512c17.64 0 32.02-14.37 32.02-31.1S49.66 448 32.02 448zM287.7 70.31c-110.9-29.38-211.7 47.53-222.8 150.9C62.1 239.9 78.73 255.1 97.57 255.1c16.61 0 29.25-13.07 31.24-29.55c6.934-57.22 57.21-101.3 116.9-98.3c71.71 3.594 117.1 76.82 102.5 146.9c-6.551 29.65-21.4 56.87-43.38 78.87L288 370.7v13.25c0 31.4-22.71 57.58-52.58 62.98C220.4 449.7 208 463.3 208 478.6c0 19.78 17.88 34.94 37.38 31.64c55.92-9.443 99.63-55.28 105.9-112.2c40.11-40.68 62.89-93.95 64.65-150.9C418.4 166.4 365.8 91 287.7 70.31zM240 200c22.06 0 40 17.94 40 40c0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53-39.47-88-88-88S152 191.5 152 240c0 13.25 10.75 24 24 24S200 253.3 200 240C200 217.9 217.9 200 240 200zM397.8 3.125c-15.91-7.594-35.05-.8438-42.66 15.09c-7.594 15.97-.8281 35.06 15.12 42.66C417.5 83.41 448 134.9 448 192c0 17.69 14.33 32 32 32S512 209.7 512 192C512 110.3 467.2 36.19 397.8 3.125z"/></svg>} title={"Issue"} content={"Noise at work is one of the most important factor that leads to stress."}/>
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
            <div className={styles.projectInfoContainer}>
                <Card title={"Pro version"} content={"The Pro Version, bigger, allows more than 3 people at the same time in the bubble."}/>
                <Card title={"Portable version"} content={"The Portable Version, smaller, will be fully transportable whereever you'll need to isolate yourself from noises."}/>
                <Card title={"Application"} content={"No more useless actions, it will adapt to your working hours and will warn you when you should take a break."}/>
            </div>
        </main>
  )
}
