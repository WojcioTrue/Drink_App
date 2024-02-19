import "../styles/message.css";
import { Variants, motion } from "framer-motion";

type MessageProps = {
  header: string,
  text: string,
  secondText: string,
  img: string,
  imgAltText: string,
  animationVariant : Variants
}

const Message = ({ header, text, secondText, img, imgAltText, animationVariant } : MessageProps) => {
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
