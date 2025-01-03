import styles from "./styles.module.css";
import { FC, Dispatch } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};
export const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <input
        title="burger"
        type="checkbox"
        checked={isOpen}
        onChange={handleClick}
        id=""
      />
      <div className={styles.hamburger_lines}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </div>
  );
};
