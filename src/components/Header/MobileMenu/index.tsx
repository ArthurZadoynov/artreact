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
            <Link to="/18moduleReact/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/18moduleReact/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/18moduleReact/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/18moduleReact/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/18moduleReact/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/18moduleReact/review" onClick={handleLinkClick}>
              Review
            </Link>
            <Link to="/18moduleReact/about" onClick={handleLinkClick}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
