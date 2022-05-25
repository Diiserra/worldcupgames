import styles from "../styles/HeaderBarComponent.module.css";

export default function HeaderBarComponent() {


  return (
    <header className={styles.container}>
      <a href="https://www.qatar2022.qa/en/home">
        <img
          className={styles.logoWorldCup}
          src="./src/assets/logo.png"
          alt="Qatar image logo"
        />
      </a>
      <nav className={styles.menuNavContainer}>
        <ul>
          <li>
            <a className={styles.menuActive} href="/inicio">Inicio</a>
          </li>
          <li>
            <a className={styles.menuDesable} href="/grupos">Grupos</a>
          </li>
          <li>
            <a className={styles.menuDesable} href="/tabela">Tabela</a>
          </li>
          <li>
            <a className={styles.menuDesable}href="noticias">Noticias</a>
          </li>
        </ul>
      </nav>
      <a className={styles.githubContainer} href="https://github.com/Diiserra">
        <img src="./src/assets/github.svg" alt="GitHub" />
        <span>/diiserra</span>
      </a>
    </header>
  );
}
