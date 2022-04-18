import styles from '../styles/Home.module.css'
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
import {useState} from "react";
import {Speaker} from "../components/Speaker";
import {Navbar} from "../components/Navbar";


export default function Home() {

    const [notif, setNotif] = useState(false);


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
                    <h1>
                        WHISPR <span style={{color: "#ffae00"}}>STUDIO</span>
                    </h1>
                    <h2>
                        Create your own bubble of silence with this unidirectional speaker.
                    </h2>
                    <div>
                        <button className={styles.buttonHome} onClick={() => {
                            navigator.clipboard.writeText("whispr.studio@gmail.com")
                            setNotif(true)
                        }}>Contact us</button>
                    </div>
                </div>
                <div className={styles.speakerImage}>
                </div>
            </div>
            <div className={styles.projectInfoContainer}>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/000000/external-noise-pollution-global-warming-smashingstocks-mixed-smashing-stocks.png"/>
                        <h2>Issue</h2>
                    </div>
                    <p>
                        Noise at work is one of the most important factor that leads to stress.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-speaker-interface-kiranshastry-solid-kiranshastry-1.png"/>
                        <h2>Speaker</h2>
                    </div>
                    <p>
                        Place it in front of yourself and create your bubble to be isolated from noises.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-phone-communications-prettycons-solid-prettycons.png"/>
                        <h2>Application</h2>
                    </div>
                    <p>
                        Control the speaker to create silence, Activate zenmode to isolate yourself from notifications.
                    </p>
                </div>
            </div>
            <div className={styles.projectInfoContainer}>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/000000/external-noise-pollution-global-warming-smashingstocks-mixed-smashing-stocks.png"/>
                        <h2>Pro version.</h2>
                    </div>
                    <p>
                        The Pro Version, bigger, allows more than 3 people at the same time in the bubble.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-speaker-interface-kiranshastry-solid-kiranshastry-1.png"/>
                        <h2>Portable version.</h2>
                    </div>
                    <p>
                        The Portable Version, smaller, will be fully transportable whereever you'll need to isolate yourself from noises.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-phone-communications-prettycons-solid-prettycons.png"/>
                        <h2>Application</h2>
                    </div>
                    <p>
                        No more useless actions, it will adapt to your working hours and will warn you when you should take a break.
                    </p>
                </div>
            </div>
        </main>
  )
}
