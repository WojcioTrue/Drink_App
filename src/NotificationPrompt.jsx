import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'

const NotificationPrompt = ({ added }) => {

  return (
    <>
        <motion.div 
        initial={{opacity:0, x: -15}}
        animate={{opacity:1, x: 0}}
        exit={{opacity:0, x: -15}}
        className={`favourite-notification ${added ? "" : "remove"}`}>
          {added ? (
            <p>Added to favourite!</p>
          ) : (
            <p>Removed from favourite...</p>
          )}
          {added ? (
            <FontAwesomeIcon icon={faHeart} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faHeartBroken} size="lg" />
          )}
        </motion.div>
    </>
  );
};

export default NotificationPrompt;
