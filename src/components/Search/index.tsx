import styles from "./styles.module.css";
import { ChangeEvent, Dispatch, FC, useState } from "react";

type Props = {
  setSearchValue: Dispatch<React.SetStateAction<string>>;
};

export const Search: FC<Props> = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const hadnleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setSearchValue(inputValue);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder="Поиск по названию"
        value={inputValue}
        type="text"
        onChange={(event) => hadnleChange(event)}
      />
      <button onClick={handleClick}>Найти</button>
    </div>
  );
};
