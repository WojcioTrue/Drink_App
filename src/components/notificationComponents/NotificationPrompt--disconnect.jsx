import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'
import { notificationPrompt } from "../../framerStyles/variants";

const NotificationPrompt = ({ added }) => {

  return (
    <>
        <motion.div
        layout
        variants={notificationPrompt}
        initial="hidden"
        animate="show"
        exit="hidden"
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
