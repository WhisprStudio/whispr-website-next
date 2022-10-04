import styles from '../styles/Home.module.css'
import { Avatar } from "@mui/material"
import { useGlobalState } from '../pages';

const teamArr = [
    {
        src: "/photos/Fahad.jpg",
        name: "Fahad Assoumani",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Thomas.jpg",
        name: "Thomas Garcia",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Paul.jpg",
        name: "Paul Erny",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Lucas.jpg",
        name: "Lucas Cherloneix",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Victor.jpg",
        name: "Victor Maurin",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Hugo.jpg",
        name: "Hugo Lalet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        src: "/photos/Antonin.jpg",
        name: "Antonin Keuck",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
]

export default function Team() {
    const [darkMode] = useGlobalState('darkMode');

    return  (
        <div className={styles.team}>
            {
                teamArr.map(member => { return (
                    <>
                        <Avatar
                            alt="Remy Sharp"
                            src={member.src}
                            sx={{ width: 200, height: 200 }}
                        />
                        <h2 className={darkMode ? "dark" : ""}>{member.name}</h2>
                        <p className={darkMode ? "dark" : ""}>
                            {member.desc}
                        </p>
                    </>
                );
                })
            }
        </div>
    );
}
