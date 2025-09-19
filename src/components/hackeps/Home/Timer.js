import { useState, useEffect } from "react";
import "src/components/hackeps/Home/Timer.css";
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
        updateRemainingTime(eventendDay);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestampDay, eventendDay, nowDay, updateRemainingTime]);

  function updateRemainingTime(countdown) {
    const nowDay = new Date();
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown, nowDay));
  }

  function padWithZeros(number, minLength = 2) {
    const numberString = String(number);
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
  }

  if (timestampDay >= nowDay && active) {
    return (
      <div className="countdown-timer text-primaryHackeps md:scale-50 ">
        {remainingTime.months ? (
          <span className="">{remainingTime.months}</span>
        ) : (
          <></>
        )}
        {remainingTime.months ? (
          <span className="" style={{ fontSize: "2vw" }}>
            mes{remainingTime.months !== 1 && "os"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.days ? (
          <span className="">{padWithZeros(remainingTime.days)}</span>
        ) : (
          <></>
        )}
        {remainingTime.days ? (
          <span className="" style={{ fontSize: "2vw" }}>
            di{remainingTime.days === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="">{padWithZeros(remainingTime.hours)}</span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="" style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.months ? (
          <></>
        ) : (
          <span className="">{remainingTime.minutes}</span>
        )}
        {remainingTime.months ? (
          <></>
        ) : (
          <span className="" style={{ fontSize: "2vw" }}>
            minut{remainingTime.months !== 1 && "s"}
          </span>
        )}
        {remainingTime.days ? (
          <></>
        ) : (
          <span className="">{padWithZeros(remainingTime.seconds)}</span>
        )}
        {remainingTime.days ? (
          <></>
        ) : (
          <span className="" style={{ fontSize: "2vw" }}>
            segon{remainingTime.days !== 1 && "s"}
          </span>
        )}
      </div>
    );
  } else if (eventendDay >= nowDay && active) {
    return (
      <div className="countdown-timer bg-loginPage ">
        {remainingTime.hours ? (
          <span className="">{padWithZeros(remainingTime.hours)}</span>
        ) : (
          <></>
        )}
        {remainingTime.hours ? (
          <span className="" style={{ fontSize: "2vw" }}>
            hor{remainingTime.hours === 1 ? "a" : "es"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.minutes ? (
          <span className="">{padWithZeros(remainingTime.minutes)}</span>
        ) : (
          <></>
        )}
        {remainingTime.minutes ? (
          <span className="" style={{ fontSize: "2vw" }}>
            minut{remainingTime.minutes === 1 ? "" : "s"}
          </span>
        ) : (
          <></>
        )}
        {remainingTime.seconds ? (
          <span className="">{padWithZeros(remainingTime.seconds)}</span>
        ) : (
          <></>
        )}
        {remainingTime.seconds ? (
          <span className="" style={{ fontSize: "2vw" }}>
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
