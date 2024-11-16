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
            <Link to="/BeansProject/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/BeansProject/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/BeansProject/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/BeansProject/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/BeansProject/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/BeansProject/review" onClick={handleLinkClick}>
              Review
            </Link>
            <Link to="/BeansProject/about" onClick={handleLinkClick}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
