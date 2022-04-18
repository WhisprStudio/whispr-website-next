import styles from "../styles/Switch.module.css"

export function Switch() {
    return <div>
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.round} ${styles.slider}`} />
        </label>
    </div>
}