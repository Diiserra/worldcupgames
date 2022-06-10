import React, { LinkHTMLAttributes, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/HeaderBarComponent.module.css";

export default function HeaderBarComponent() {

  const [homePageActive, setHomePageActive] = useState(true);

  const [menuActive, setMenuActive] = useState('Início');

  const headerHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const a = event.currentTarget.innerHTML;

    switch (a) {
      case 'Grupos':
        setHomePageActive(false)
        setMenuActive(a)
        break;
      case 'Tabela':
        setHomePageActive(false)
        setMenuActive(a)
        break;
      case 'Notícias':
        setHomePageActive(false)
        setMenuActive(a)
        break;
      default:
        setHomePageActive(true)
        setMenuActive(a)
        break;
    }
  }

  return (
    <header className={homePageActive ? styles.homePageHeader : styles.normalHeader}>
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
            <Link className={menuActive === 'Início' ? styles.menuActive : styles.menuDesable} to="/" onClick={event =>headerHandler(event)}>Início</Link>
          </li>
          <li>
            <Link className={menuActive === 'Grupos' ? styles.menuActive : styles.menuDesable} to="/grupos" onClick={event =>headerHandler(event)}>Grupos</Link>
          </li>
          <li>
            <Link className={menuActive === 'Tabela' ? styles.menuActive : styles.menuDesable} to="/tabela" onClick={event =>headerHandler(event)}>Tabela</Link>
          </li>
          <li>
            <Link className={menuActive === 'Notícias' ? styles.menuActive : styles.menuDesable} to="noticias" onClick={event =>headerHandler(event)}>Notícias</Link>
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
