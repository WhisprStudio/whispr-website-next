import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Wave from 'react-wavify'
import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react"

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
                <h1>
                    WHISPR STUDIO
                </h1>
                <h2>
                    Create your own bubble of silence with this unidirectional speaker.
                </h2>
                <div>
                    <ThemeProvider component={<div></div>} theme={theme}>
                        <Button variant={"outlined"} onClick={() => {
                            navigator.clipboard.writeText("whispr.studio@gmail.com")
                            setNotif(true)
                        }} color={"primary"}>Contact us</Button>
                    </ThemeProvider>
                </div>
            </div>
          <div className={styles.projectInfoContainer}>
                <div>
                    <h2>Issue</h2>
                    <p>
                        Noise at work is one of the most important factor that leads to stress.
                    </p>
                </div>
                <div>
                    <h2>Speaker</h2>
                    <p>
                        Place it in front of yourself and create your bubble to be isolated from noises.
                    </p>
                </div>
                <div>
                    <h2>Application</h2>
                    <p>
                        Control the speaker to create silence, Activate zenmode to isolate yourself from notifications.
                    </p>
                </div>
            </div>
        </main>
  )
}
