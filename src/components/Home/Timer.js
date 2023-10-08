import { useState, useEffect } from "react";
import "src/components/Home/Timer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CountdownTimer = (props) => {
  const timestampDay = props.startTime;
  const eventendDay = props.endTime;
  const nowDay = new Date();
  const active = Boolean(props.timerActive);

  let countdown;

  if (timestampDay >= eventendDay) {
    countdown = timestampDay;
  } else {
    countdown = eventendDay;
  }

  function getRemainingTimeUntilMsTimestamp(countdown, nowDay) {
    return {
      seconds: padWithZeros(countdown.getSeconds() - nowDay.getSeconds() + 60),
      minutes: padWithZeros(countdown.getMinutes() - nowDay.getMinutes() + 59),
      hours: padWithZeros(countdown.getHours() - nowDay.getHours() + 23),
      days: padWithZeros(countdown.getDate() - nowDay.getDate() - 3),
      months: countdown.getMonth() - nowDay.getMonth(),
    };
  }

  const defaultRemainingTime = getRemainingTimeUntilMsTimestamp(
    countdown,
    nowDay,
  );

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timestampDay >= nowDay) {
        updateRemainingTime(timestampDay);
      } else {
        updateRemainingTime(eventendDay);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestampDay, eventendDay]);

  function updateRemainingTime(countdown) {
    const nowDay = new Date();
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown, nowDay));
  }

  function padWithZeros(number, minLength = 2) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
  }

  if (timestampDay >= nowDay && active) {
    return (
      <div className="countdown-timer">
        {remainingTime.months && <span>{remainingTime.months}</span>}
        {remainingTime.months && (
          <span style={{ fontSize: "2vw" }}>
            mes{remainingTime.months !== 1 && "os"}
          </span>
        )}
        {remainingTime.days && <span>{remainingTime.days}</span>}
        {remainingTime.days && (
          <span style={{ fontSize: "2vw" }}>
            di{remainingTime.days === 1 ? "a" : "es"}
          </span>
        )}
        {remainingTime.hours && <span>{remainingTime.hours}</span>}
        {remainingTime.hours && (
          <span style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        )}
      </div>
    );
  } else if (eventendDay >= nowDay && active) {
    return (
      <div className="countdown-timer">
        {remainingTime.hours && <span>{remainingTime.hours}</span>}
        {remainingTime.hours && (
          <span style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        )}
        {remainingTime.minutes && <span>{remainingTime.minutes}</span>}
        {remainingTime.minutes && (
          <span style={{ fontSize: "2vw" }}>
            minut{remainingTime.minutes === 1 ? "" : "s"}
          </span>
        )}
        {remainingTime.seconds && <span>{remainingTime.seconds}</span>}
        {remainingTime.seconds && (
          <span style={{ fontSize: "2vw" }}>
            segon{remainingTime.seconds === 1 ? "" : "s"}
          </span>
        )}
      </div>
    );
  }
  return;
};

export default CountdownTimer;
