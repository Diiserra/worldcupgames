import { useEffect, useState } from "react";
import styles from "../styles/CountdownComponent.module.css";

export default function CountdownComponent() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const countdownDate = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dateNow = new Date(Date.now()).getTime();
    const dateQatarWorldCup = new Date(2022, 10, 21, 7).getTime();
    const dateDifference = dateQatarWorldCup - dateNow;

    setDays(Math.floor(dateDifference / day));
    setHours(Math.floor((dateDifference % day) / hour));
    setMinutes(Math.floor((dateDifference % hour) / minute));
  };

  useEffect(() => {
    setInterval(() => {
      countdownDate();
    }, 1000);
  }, []);

  return (
    <div className={styles.cardContainer}>
      <span className={styles.titleCountdown}>
        Contagem regressiva para o Qatar 2022™
      </span>
      <div className={styles.countdownContainer}>
        <div className={styles.countdown}>
          <span>{days}</span>
          <span>DIAS</span>
        </div>
        <strong>◆</strong>
        <div className={styles.countdown}>
          <span>{hours}</span>
          <span>HORAS</span>
        </div>
        <strong>◆</strong>
        <div className={styles.countdown}>
          <span>{minutes}</span>
          <span>MINUTOS</span>
        </div>
      </div>
    </div>
  );
}
