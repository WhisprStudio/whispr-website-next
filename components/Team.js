import styles from "../styles/Team.module.css"
import { Avatar } from "@mui/material"
import { useGlobalState } from '../pages';

const teamArr = [
    {
        src: "/photos/Fahad.jpg",
        name: "Fahad Assoumani",
        desc: "DevOps SRE",
    },
    {
        src: "/photos/Thomas.jpg",
        name: "Thomas Garcia",
        desc: "Frontend/Android developper & Designer",
    },
    {
        src: "/photos/Paul.jpg",
        name: "Paul Erny",
        desc: "IOS developper",
    },
    {
        src: "/photos/Lucas.jpg",
        name: "Lucas Cherloneix",
        desc: "Frontend/Android developper",
    },
    {
        src: "/photos/Victor.jpg",
        name: "Victor Maurin",
        desc: "IOS developper",
    },
    {
        src: "/photos/Hugo.jpg",
        name: "Hugo Lalet",
        desc: "Embeded developper",
    },
    {
        src: "/photos/Antonin.jpg",
        name: "Antonin Keuck",
        desc: "Android developper",
    },
]

export default function Team() {
    const [darkMode] = useGlobalState('darkMode');

    return  (
        <div className={styles.team}>
            {
                teamArr.map((member, id) => { return (
                    <div className={styles.member} key={id}>
                        <Avatar
                            alt={member.name}
                            src={member.src}
                            sx={{ width: 90, height: 90 }}
                        />
                        <h3 style={{height: '1%'}} className={darkMode ? "dark" : ""}>{member.name}</h3>
                        <p  className={darkMode ? "dark" : ""}>
                            {member.desc}
                        </p>
                    </div>
                );
                })
            }
        </div>
    );
}
