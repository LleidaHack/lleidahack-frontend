import { useState, useEffect} from 'react';
import './Timer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from 'dayjs';


const defaultRemainingTime = {
  seconds: '00' ,
  minutes: '00',
  hours: '00',
  days: '00',
  months: '00'
}

const CountdownTimer = (props) => {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const timestampDayjs = dayjs(props.startTime)
  const eventendDayjs = dayjs(props.endTime)
  const nowDayjs = dayjs();
  const active = Boolean(props.timerActive)

  useEffect(() => {
      const intervalId = setInterval(()=> {
        if(timestampDayjs.diff(nowDayjs, "seconds") >= 0){
          updateRemainingTime(timestampDayjs);
        }else{
          updateRemainingTime(eventendDayjs);
        }
      }, 1000);
      return () => clearInterval(intervalId)
  },[timestampDayjs, eventendDayjs]);

  function updateRemainingTime(countdown) {
    const nowDayjs = dayjs();
    //console.log(active)
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown, nowDayjs))
  }

  function getRemainingTimeUntilMsTimestamp(countdown, nowDayjs){
    return{
      seconds: padWithZeros(countdown.diff(nowDayjs,'seconds')%60, 2),
      minutes: padWithZeros(countdown.diff(nowDayjs,'minutes')%60, 2),
      hours: padWithZeros(countdown.diff(nowDayjs,'hours')%24, 2),
      days: padWithZeros(countdown.diff(nowDayjs,'days')%30, 2),
      months: countdown.diff(nowDayjs, "months")
    }
  }

  function padWithZeros(number, minLength){
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
  }
  if(timestampDayjs.diff(nowDayjs, "seconds") >= 0 && active){
    return(
          <div className="countdown-timer">
              <span>{remainingTime.months}</span>
              <span style={{'font-size': '2vw'}}>mesos</span>
              <span>{remainingTime.days}</span>
              <span style={{'font-size': '2vw'}}>dies</span>
              <span>{remainingTime.hours}</span>
              <span style={{'font-size': '2vw'}}>hores</span>
          </div>
    );
  }else if(eventendDayjs.diff(nowDayjs, "seconds") >= 0 && active){
  return(
    <div className="countdown-timer">
        <span>{remainingTime.hours}</span>
        <span style={{'font-size': '2vw'}}>hores</span>
        <span>{remainingTime.minutes}</span>
        <span style={{'font-size': '2vw'}}>minuts</span>
        <span>{remainingTime.seconds}</span>
        <span style={{'font-size': '2vw'}}>segons</span>
    </div>
    );
  }
    return ;
}

export default CountdownTimer;