import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedBack}) => {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")} className={styles.button}>
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={styles.button}>
        Bad
      </button>
      <button onClick={resetFeedBack} className={styles.button}>
        Reset
      </button>
    </div>
  );
};

export default Options;
