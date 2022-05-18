import { Bubble } from "../../svgs/Bubble";
import styles from "./banner.module.css";

export const Banner = () => {
    const arr = ["flock", "herd", "circle", "pile", "clump", "army"];

    const onClick = (text) => {
        console.log("text", text);
    };
    return (
        <div className={styles.bannerParent}>
            <div
                style={{
                    width: "60%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                margin: "auto",
                                position: "relative",
                                top: index % 2 === 0 ? "-70px" : "0px",
                            }}
                        >
                            <Bubble text={item} onClick={onClick} />
                        </span>
                    );
                })}
            </div>
            <div className={styles.secondSection}></div>
        </div>
    );
};
