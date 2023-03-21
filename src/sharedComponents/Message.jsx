import "../styles/message.css";
import { motion } from "framer-motion";

const Message = ({ header, text, secondText, img, animationVariant }) => {
  return (
    <motion.div
      variants={animationVariant}
      initial="hidden"
      animate="show"
      className="message__list">
        <span className="message__list-img">
          <img alt="#" src={img}></img>
        </span>
        <section>
          <p className="header">{header}</p>
          <p>{text}</p>
          <p>{secondText}</p>
        </section>
    </motion.div>
  );
};

export default Message;
