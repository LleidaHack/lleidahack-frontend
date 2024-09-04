import { useState, useEffect } from "react";
import "src/components/hackeps/Home/Timer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CountdownTimer = (props) => {
  const timestampDay = props.startTime;
  const eventEndDay = props.endTime;
  const nowDay = new Date();
  const active = Boolean(props.timerActive);
  let countdown;
  if (timestampDay >= eventEndDay) {
    countdown = timestampDay;
  } else {
    countdown = eventEndDay;
  }

  function getRemainingTimeUntilMsTimestamp(countdown, nowDay) {
    const timeDifference = countdown - nowDay;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const mesos = Math.floor(days / 30);
    return {
      seconds: seconds % 60,
      minutes: minutes % 60,
      hours: hours % 24,
      days: days % 30,
      months: mesos,
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
        updateRemainingTime(eventEndDay);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestampDay, eventEndDay, nowDay, updateRemainingTime]);

  function updateRemainingTime(countdown) {
    const nowDay = new Date();
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown, nowDay));
  }

  function padWithZeros(number, minLength = 2) {
    const numberString = String(number);
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
  }

  if (isNaN(remainingTime.seconds)) {
    return (
      <div className="countdown-timer bg-blackHackeps text-white w-screen max-w-full h-[20vw] text-[9vw] flex justify-center items-baseline">
        <span className="text-white">X</span>
        <span className="text-white" style={{ fontSize: "2vw" }}>
          mesos
        </span>
        <span className="text-white">X</span>
        <span className="text-white" style={{ fontSize: "2vw" }}>
          dies
        </span>
        <span className="text-white">X</span>
        <span className="text-white" style={{ fontSize: "2vw" }}>
          hores
        </span>
      </div>
    );
  }

  if (timestampDay >= nowDay && active) {
    return (
      <div className="countdown-timer bg-blackHackeps text-white w-screen max-w-full h-[20vw] text-[9vw] flex justify-center items-baseline">
        {remainingTime.months ? (
          <span className="text-white">{remainingTime.months}</span>
        ) : (
          <></>
        )}
        {remainingTime.months ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            mes{remainingTime.months !== 1 && "os"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.days ? (
          <span className="text-white">{padWithZeros(remainingTime.days)}</span>
        ) : (
          <></>
        )}
        {remainingTime.days ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            di{remainingTime.days === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="text-white">
            {padWithZeros(remainingTime.hours)}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.months ? (
          <></>
        ) : (
          <span className="text-white">{remainingTime.minutes}</span>
        )}
        {remainingTime.months ? (
          <></>
        ) : (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            minut{remainingTime.months !== 1 && "s"}
          </span>
        )}
        {remainingTime.days ? (
          <></>
        ) : (
          <span className="text-white">
            {padWithZeros(remainingTime.seconds)}
          </span>
        )}
        {remainingTime.days ? (
          <></>
        ) : (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            segon{remainingTime.days !== 1 && "s"}
          </span>
        )}
      </div>
    );
  } else if (eventEndDay >= nowDay && active) {
    return (
      <div className="countdown-timer text-black w-screen max-w-full h-[20vw] text-[9vw] flex justify-center items-baseline">
        {remainingTime.hours ? (
          <span className="text-white">
            {padWithZeros(remainingTime.hours)}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.minutes ? (
          <span className="text-white">
            {padWithZeros(remainingTime.minutes)}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.minutes ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            minut{remainingTime.minutes === 1 ? "" : "s"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.seconds ? (
          <span className="text-white">
            {padWithZeros(remainingTime.seconds)}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.seconds ? (
          <span className="text-white" style={{ fontSize: "2vw" }}>
            segon{remainingTime.seconds === 1 ? "" : "s"}
          </span>
        ) : (
          <></>
        )}
      </div>
    );
  }
  return;
};

export default CountdownTimer;
