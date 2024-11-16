import styles from "./styles.module.css";
import { FC } from "react";
import { Recipe } from "../../types";
import { Modal } from "../../features/Modal";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  data: Recipe;
};

export const ModalRecipes: FC<Props> = ({ closeModal, isModalOpen, data }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className={styles.containerRecipes}>
        <div className={styles.contentTop}>
          <img className={styles.image} src={data.imageUrl} alt="" />
          <div className={styles.containerModal}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            {data.prepTime.length > 0 && (
              <p>
                <b>prepTime:</b> {data.prepTime}
              </p>
            )}
            {data.cookTime.length > 0 && (
              <p>
                <b>cookTime:</b> {data.cookTime}
              </p>
            )}
            {data.totalTime.length > 0 && (
              <p>
                <b>totalTime:</b> {data.totalTime}
              </p>
            )}
            {data.makingAmount.length > 0 && (
              <p>
                <b>makingAmount:</b> {data.makingAmount}
              </p>
            )}
          </div>
        </div>
        <div className={styles.contentBottom}>
          <p>
            <b>Ingredients:</b> {data.ingredients.join(", ")}
          </p>
          {data.additions1.length > 0 && (
            <p>
              <b>additions1:</b> {data.additions1.join(", ")}
            </p>
          )}
          {data.additions2.length > 0 && (
            <p>
              <b>additions2:</b> {data.additions2.join(", ")}
            </p>
          )}
          {data.additions3.length > 0 && (
            <p>
              <b>additions3:</b> {data.additions3.join(", ")}
            </p>
          )}
          <p>
            <b>directions:</b> {data.directions.join(", ")}
          </p>
          {data.tips.length > 0 && (
            <p>
              <b>tips:</b> {data.tips.join(", ")}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};
