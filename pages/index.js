import styles from '../styles/Home.module.css'
import Wave from 'react-wavify'
import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import {Speaker} from "../components/Speaker";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC90E',
        },
        secondary: {
            main: '#FFC90E',
        },
    },
});

export default function Home() {

    const [notif, setNotif] = useState(false);


  return (
        <main className={styles.mainContainer}>
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
                        WHISPR STUDIO
                    </h1>
                    <h2>
                        Create your own bubble of silence with this unidirectional speaker.
                    </h2>
                    <div>
                        <ThemeProvider theme={theme}>
                            <Button variant={"outlined"} onClick={() => {
                                navigator.clipboard.writeText("whispr.studio@gmail.com")
                                setNotif(true)
                            }} color={"primary"}>Contact us</Button>
                        </ThemeProvider>
                    </div>
                </div>
                <div className={styles.speakerImage}>
                    <Speaker />
                </div>
            </div>
            <div style={{width: "100vw", margin: 0, position: "absolute", top: "90%", left: 0, padding: 0}}>
                <Wave fill='#000'
                      paused={false}
                      options={{
                          height: 20,
                          amplitude: 20,
                          speed: 0.15,
                          points: 3
                      }}
                />
            </div>
            <div style={{width: "100vw", margin: 0, position: "absolute", top: "95%", left: 0, padding: 0, transform: "rotate(180deg)"}}>
                <Wave fill='#000'
                      paused={false}
                      options={{
                          height: 20,
                          amplitude: 20,
                          speed: 0.18,
                          points: 4
                      }}
                />
            </div>
          <div className={styles.projectInfoContainer}>
                <div>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/000000/external-noise-pollution-global-warming-smashingstocks-mixed-smashing-stocks.png"/>
                        <h2>Issue</h2>
                    </div>
                    <p>
                        Noise at work is one of the most important factor that leads to stress.
                    </p>
                </div>
                <div>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-speaker-interface-kiranshastry-solid-kiranshastry-1.png"/>
                        <h2>Speaker</h2>
                    </div>
                    <p>
                        Place it in front of yourself and create your bubble to be isolated from noises.
                    </p>
                </div>
                <div>
                    <div className={styles.itemTitleContainer}>
                        <img src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-phone-communications-prettycons-solid-prettycons.png"/>
                        <h2>Application</h2>
                    </div>
                    <p>
                        Control the speaker to create silence, Activate zenmode to isolate yourself from notifications.
                    </p>
                </div>
            </div>
        </main>
  )
}
