import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.backGround}>
      <div className={styles.container}>
        <img src="./src/assets/worldcuplogo.svg" alt="qatar logo" />
        <div className={styles.titleContainer}>
          <h1>Vamos torcer juntos!</h1>
          <p>A Copa do Mundo FIFA Qatar 2022™, está chegando cheia de emoção para nos fazer torcer e vibrar pelo o nosso país. Estamos contando as horas para ver esse espataculo.</p>
        </div>
      </div>
    </div>
  );
}
