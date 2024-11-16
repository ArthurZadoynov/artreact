import "./styles.css";
import image from "../../images/main.gif";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="home_container">
      <motion.img
        src={image}
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="info">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to the World of Jelly Belly:
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Rainbow of Flavors Awaits!
        </motion.p>
      </div>
    </div>
  );
};
