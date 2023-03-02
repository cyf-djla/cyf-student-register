import React, { useState, useEffect } from "react";
import "./DisplayTime.css";

const DisplayTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date();
      const formattedDate =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const formattedTime = today.getHours() + ":" + today.getMinutes();
      setDate(formattedDate);
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="display__time">
      <p>Time: {time}</p>
      <p>Date:{date}</p>
    </div>
  );
};

export default DisplayTime;
