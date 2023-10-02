import { useState, useEffect } from "react";
import "src/components/Home/Timer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";

const CountdownTimer = (props) => {
  const timestampDayjs = dayjs(props.startTime);
  const eventendDayjs = dayjs(props.endTime);
  const nowDayjs = dayjs();
  const active = Boolean(props.timerActive);

  let countdown;

  if (timestampDayjs.diff(nowDayjs, "seconds") >= 0) {
    countdown = timestampDayjs;
  } else {
    countdown = eventendDayjs;
  }

  const defaultRemainingTime = {
    seconds: padWithZeros(countdown.diff(nowDayjs, "seconds") % 60, 2),
    minutes: padWithZeros(countdown.diff(nowDayjs, "minutes") % 60, 2),
    hours: padWithZeros(countdown.diff(nowDayjs, "hours") % 24, 2),
    days: padWithZeros(countdown.diff(nowDayjs, "days") % 30, 2),
    months: countdown.diff(nowDayjs, "months"),
  };

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timestampDayjs.diff(nowDayjs, "seconds") >= 0) {
        updateRemainingTime(timestampDayjs);
      } else {
        updateRemainingTime(eventendDayjs);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestampDayjs, eventendDayjs]);

  function updateRemainingTime(countdown) {
    const nowDayjs = dayjs();
    //console.log(active)
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown, nowDayjs));
  }

  function getRemainingTimeUntilMsTimestamp(countdown, nowDayjs) {
    return {
      seconds: padWithZeros(countdown.diff(nowDayjs, "seconds") % 60, 2),
      minutes: padWithZeros(countdown.diff(nowDayjs, "minutes") % 60, 2),
      hours: padWithZeros(countdown.diff(nowDayjs, "hours") % 24, 2),
      days: padWithZeros(countdown.diff(nowDayjs, "days") % 30, 2),
      months: countdown.diff(nowDayjs, "months"),
    };
  }

  function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
  }
  if (timestampDayjs.diff(nowDayjs, "seconds") >= 0 && active) {
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
  } else if (eventendDayjs.diff(nowDayjs, "seconds") >= 0 && active) {
    return (
      <div className="countdown-timer">
        <span>{remainingTime.hours}</span>
        <span style={{ fontSize: "2vw" }}>hores</span>
        <span>{remainingTime.minutes}</span>
        <span style={{ fontSize: "2vw" }}>minuts</span>
        <span>{remainingTime.seconds}</span>
        <span style={{ fontSize: "2vw" }}>segons</span>
      </div>
    );
  }
  return;
};

export default CountdownTimer;
