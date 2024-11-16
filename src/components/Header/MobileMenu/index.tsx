import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/module18react/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/module18react/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/module18react/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/module18react/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/module18react/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/module18react/review" onClick={handleLinkClick}>
              Review
            </Link>
            <Link to="/module18react/about" onClick={handleLinkClick}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
