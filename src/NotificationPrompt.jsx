import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "./context/ContextComponent";





const NotificationPrompt = ({ added }) => {
  const [display, setDisplay] = useState(true);
  const { alertList, setAlertList } = useContext(MyContext);

  return (
    <>
        <div className={`favourite-notification ${added ? "" : "remove"}`}>
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
        </div>
    </>
  );
};

export default NotificationPrompt;
