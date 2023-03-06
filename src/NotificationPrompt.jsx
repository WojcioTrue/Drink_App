import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "./context/ContextComponent";





const NotificationPrompt = ({ added }) => {
  const [display, setDisplay] = useState(true);
  const { alertList, setAlertList } = useContext(MyContext);

  // remove component after set time
  useEffect(() => {
    const hideNotification = setTimeout(() => {
      setDisplay(false);
    }, 1250);
    return () => clearTimeout(hideNotification);
  }, []);

  // clear alertList, ignoring error in dependecy setAlertList
  useEffect(() => {
    const clearList = setTimeout(() => {
      setAlertList([]);
    }, 1500);
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
