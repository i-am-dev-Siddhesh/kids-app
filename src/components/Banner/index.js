import styles from "./banner.module.css";

export const Banner = () => {
    return (
        <div className={styles.bannerParent}>
            <div className={styles.firstSection}>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <button className={styles.questionNumber}>
                        <p>Question 4/10</p>
                    </button>
                    <div className={styles.questionBox}>
                        <p>King Midas was a very rich man because he had ...</p>
                    </div>
                </div>
            </div>
            <div className={styles.secondSection}></div>
        </div>
    );
};
