import "./styles/message.css";
import { motion } from "framer-motion";
const Message = ({ header, text, secondText, img, animationVariant }) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.2}}}
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
