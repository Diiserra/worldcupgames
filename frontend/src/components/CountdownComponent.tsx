import styles from "../styles/CountdownComponent.module.css"


export default function CountdownComponent() {
    return (
        <div className={styles.cardContainer}>
            <span className={styles.titleCountdown}>Contagem regressiva para o Qatar 2022™</span>
            <div className={styles.countdownContainer}>
                <div className={styles.countdown}>
                    <span>177</span>
                    <span>DIAS</span>
                </div>
                <strong>◆</strong>
                <div className={styles.countdown}>
                    <span>08</span>
                    <span>HORAS</span>
                </div>
                <strong>◆</strong>
                <div className={styles.countdown}>
                    <span>43</span>
                    <span>MINUTOS</span>
                </div>
            </div>
        </div>
    )
}