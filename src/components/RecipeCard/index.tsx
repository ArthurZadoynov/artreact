import { FC, useState } from "react";
import { Recipe } from "../../types";
import styles from "./styles.module.css";
import { ModalRecipes } from "../ModalRecipes";

type Props = {
  data: Recipe;
};
export const RecipeCard: FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div onClick={openModal} className={styles.wrapper}>
        <img src={data.imageUrl} alt="" />
        <h3>{data.name}</h3>
        <p className={styles.description}>
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        {data.makingAmount && (
          <p className={styles.additional_info}> Make: {data.makingAmount}</p>
        )}
        {data.cookTime && (
          <p className={styles.additional_info}>Cook Time: {data.cookTime}</p>
        )}
        {data.totalTime && (
          <p className={styles.additional_info}>Total Time: {data.totalTime}</p>
        )}
      </div>
      {isModalOpen && (
        <ModalRecipes
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          data={data}
        />
      )}
    </>
  );
};
