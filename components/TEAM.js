import styles from "../styles/Team.module.css"
import { Avatar } from "@mui/material"
import { useGlobalState } from '../pages';

const teamArr = [
    {
        src: "/photos/Fahad.jpg",
        name: "Fahad Assoumani",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Thomas.jpg",
        name: "Thomas Garcia",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Paul.jpg",
        name: "Paul Erny",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Lucas.jpg",
        name: "Lucas Cherloneix",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Victor.jpg",
        name: "Victor Maurin",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Hugo.jpg",
        name: "Hugo Lalet",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        src: "/photos/Antonin.jpg",
        name: "Antonin Keuck",
        desc: "Lorem ipsum dolor sit amet",
    },
]

export default function Team() {
    const [darkMode] = useGlobalState('darkMode');

    return  (
        <div className={styles.team}>
            {
                teamArr.map(member => { return (
                    <div className={styles.member}>
                        <Avatar
                            alt={member.name}
                            src={member.src}
                            sx={{ width: 100, height: 100 }}
                        />
                        <h3 className={darkMode ? "dark" : ""}>{member.name}</h3>
                        <p className={darkMode ? "dark" : ""}>
                            {member.desc}
                        </p>
                    </div>
                );
                })
            }
        </div>
    );
}
