import styles from "./FeedBack.module.css";

const FeedBack = ({feedBack, totalFeedBack, positiveFeedBack}) => {

  return (
    <div className={styles.container}>
      <ul className={styles.listItem}>
        <li>Good: {feedBack.good}</li>
        <li>Neutral: {feedBack.neutral}</li>
        <li>Bad: {feedBack.bad}</li>
        <li>Total: {totalFeedBack}</li>
        <li>Positive: {positiveFeedBack}</li>
      </ul>
    </div>
  );
};

export default FeedBack;
