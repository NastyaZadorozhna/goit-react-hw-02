import Descriptions from "./components/descriptions/Descriptions";
import Options from "./components/options/Options";
import FeedBack from "./components/feedBack/FeedBack";

import "./App.css";
import { useState, useEffect } from "react";
import Notification from "./components/Notification";

const initState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedBack, setFeedBack] = useState(() => {
    const storagedFeedBack = localStorage.getItem("feedBack");

    if (storagedFeedBack !== null) {
      return JSON.parse(storagedFeedBack);
    }

    return initState;
  });

  const totalFeedBack = feedBack.good + feedBack.neutral + feedBack.bad;
  const positiveFeedBack = Math.round((feedBack.good / totalFeedBack) * 100);

  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(feedBack));
  }, [feedBack]);

  useEffect(() => {
    document.title = totalFeedBack
      ? `Positive feedback ${positiveFeedBack}%`
      : "No feedback yet";
  }, [positiveFeedBack, totalFeedBack]);

  function updateFeedback(feedbackType) {
    setFeedBack({ ...feedBack, [feedbackType]: feedBack[feedbackType] + 1 });
  }

  function resetFeedBack() {
    setFeedBack(initState);
  }

  return (
    <div>
      <Descriptions />

      <Options updateFeedback={updateFeedback} resetFeedBack={resetFeedBack} />

      {totalFeedBack ? (
        <FeedBack
          feedBack={feedBack}
          totalFeedBack={totalFeedBack}
          positiveFeedBack={positiveFeedBack}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
