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
            <Link to="/artreact/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/artreact/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/artreact/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/artreact/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/artreact/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/artreact/review" onClick={handleLinkClick}>
              Review
            </Link>
            <Link to="/artreact/about" onClick={handleLinkClick}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
