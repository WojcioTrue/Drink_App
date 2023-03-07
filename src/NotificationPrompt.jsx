import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "./context/ContextComponent";





const NotificationPrompt = ({ added }) => {
  const [display, setDisplay] = useState(true);
  const { alertList, setAlertList } = useContext(MyContext);
  // in miliseconds, delay for removing element
  const notificationDelay = 1250;

  // remove component after set time
  useEffect(() => {
    const hideNotification = setTimeout(() => {
      setDisplay(false);

    }, notificationDelay);
    return () => clearTimeout(hideNotification);
  }, []);

  // clear alertList, ignoring error in dependecy setAlertList
  useEffect(() => {
    const clearList = setTimeout(() => {
      setAlertList([]);
    // clearing alertList after notificationDelay passes
    }, notificationDelay);
    return () => clearTimeout(clearList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[alertList]);

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
