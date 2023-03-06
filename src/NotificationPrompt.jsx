import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NotificationPrompt = ({ added }) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const hideNotification = setTimeout(() => {
      setDisplay(false);
    }, 1500);
    return () => clearTimeout(hideNotification);
  }, []);

  return (
    <>
      {display ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default NotificationPrompt;
