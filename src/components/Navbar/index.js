import { ExitBtn, MusicBtn, SoundBtn } from "../../svgs/Btns";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navbarParent}>
            <div className={styles.startSection}>
                <div className={styles.musicBtn}>
                    <MusicBtn />
                </div>
                <SoundBtn />
            </div>
            <div className={styles.midSection}>
                <button className={styles.midSectionContent}>
                    <p>Fill the blank space with word in bubbles</p>
                </button>
            </div>
            <div className={styles.endSection}>
                <ExitBtn />
            </div>
        </div>
    );
};
