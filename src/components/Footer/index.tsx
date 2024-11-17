import styles from "./styles.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import GithubSvg from "../../assets/icons/gtihub.svg?react";
import DiscordSvg from "../../assets/icons/discord.svg?react";
import TwitterSvg from "../../assets/icons/twitter.svg?react";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerFooter}>
        <div>
          <h3>
            {" "}
            <Link to="/18moduleReact" className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
          </h3>
          <p>
            All data in this application and its API are sourced from the
            official Jelly Belly website. None of the content here is claimed as
            original; it's all credited to and derived from Jelly Belly's
            official resources.
          </p>
        </div>
        <div>
          <h3>Site Map</h3>
          <ul className={styles.list}>
            <li>
              <a href="/about">About Jelly Belly Wiki</a>
            </li>
            <li>
              <a href="/api">API Documentation</a>
            </li>
            <li>
              <a href="/beans">Beans</a>
            </li>
            <li>
              <a href="/facts">Facts</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/combinations">Combinations</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Data Accuracy</h3>
          <p>
            Despite efforts to ensure accuracy, this resource may contain errors
            or inaccuracies and should not be the sole basis for critical
            decisions, especially those related to health.
          </p>
        </div>
        <div className={styles.socialLinks}>
          <h3>Check Out</h3>
          <a
            target="blank"
            href="https://github.com/Object-ions/Jelly-Belly-Wiki"
          >
            <GithubSvg />
          </a>
          <a
            target="blank"
            href="https://discord.com/users/1063873143053238414"
          >
            <DiscordSvg />
          </a>
          <a target="blank" href="https://twitter.com">
            <TwitterSvg />
          </a>
        </div>
        <div>
          <p>© Created by Arthur Zadoynov , 2024</p>
        </div>
      </div>
    </footer>
  );
};
