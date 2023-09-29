import "../styles/message.css";
import { motion } from "framer-motion";

const Message = ({ header, text, secondText, img, imgAltText, animationVariant }) => {
  return (
    <motion.div
      variants={animationVariant}
      initial="hidden"
      animate="show"
      className="message__list">
        <span className="message__list-img">
          <img src={img} alt={imgAltText}/>
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
