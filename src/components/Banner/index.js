import { useState } from "react";
import { Bubble } from "../../svgs/Bubble";
import styles from "./banner.module.css";

export const Banner = () => {
    const rightAnswer = "flock";

    const [selectedAnswer, setSelectedAnswer] = useState();
    const arr = ["flock", "herd", "circle", "pile", "clump", "army"];

    const onClick = (text) => {
        console.log("text", text);
        setSelectedAnswer(text);
    };

    const successFullAnswerCss = {
        background: "#5EBE00",
        border: "1px solid #478F00",
        boxShadow: "inset 0px 2px 0px #88ED39",
    };
    const errorAnswerCss = {
        background: "#D40000",
        border: " 1px solid #950000",
        boxShadow: "inset 0px 2px 0px #FF9191",
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
                            <Bubble
                                text={item}
                                onClick={onClick}
                                fill={
                                    item === selectedAnswer
                                        ? item === rightAnswer
                                            ? "rgba(144, 233, 0, 0.75)"
                                            : "rgba(255, 0, 0, 0.71)"
                                        : "white"
                                }
                            />
                        </span>
                    );
                })}
            </div>
            <div className={styles.footerSectionParent}>
                <div className={styles.sentence}>
                    <p style={{ color: "#3497A7" }}>Sentence 4/6</p>
                </div>
                <div className={styles.footerSectionBox}>
                    <div className={styles.innerSection}>
                        <p
                            style={{
                                color: "#3497A7",
                                marginTop: "40px",
                            }}
                        >
                            A{" "}
                            <span
                                className={styles.answerBox}
                                style={
                                    selectedAnswer
                                        ? selectedAnswer === rightAnswer
                                            ? successFullAnswerCss
                                            : errorAnswerCss
                                        : {}
                                }
                            >
                                {selectedAnswer}
                            </span>{" "}
                            of unwashed bedsheets lay in the dark room.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
