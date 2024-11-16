import styles from "./styles.module.css";
import { FC } from "react";
import { Bean } from "../../types";
import { Modal } from "../../features/Modal";

type Props = {
  closeModal: () => void;
  isModalOpen: boolean;
  data: Bean;
};

export const ModalBeans: FC<Props> = ({ closeModal, isModalOpen, data }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} bg={data.backgroundColor}>
      <img className={styles.image} src={data.imageUrl} alt="" />
      <div className={styles.containerModal}>
        <h3>{data.flavorName}</h3>
        <p>{data.description}</p>
        <p>
          <b>Ingredients: </b>
          {data.ingredients.join(" , ")}
        </p>
        <p>
          <b>{data.glutenFree ? "No gluten" : "With gluten"}</b>
        </p>
      </div>
    </Modal>
  );
};
