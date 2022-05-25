import { Link } from "react-router-dom";
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
            <Link className={styles.menuActive} to="/">Início</Link>
          </li>
          <li>
            <Link className={styles.menuDesable} to="/grupos">Grupos</Link>
          </li>
          <li>
            <Link className={styles.menuDesable} to="/tabela">Tabela</Link>
          </li>
          <li>
            <Link className={styles.menuDesable} to="noticias">Notícias</Link>
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
