import { useEffect, useState } from "react";
import NotificationPrompt from "./NotificationPrompt";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "./notificationListSlice" 

const NotificationPromptCheck = ({ element }) => {
  // state to display NotificationPrompt
  const [display, setDisplay] = useState(true);
  const notificationList = useSelector(state => state.notificationList)
  const dispatch = useDispatch();
  // unmount element after Timeout is out
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 1500);
  }, []);

  // Clear AlertList after a certain time
  useEffect(() => {
    // Timeout to initiate after certain time to clear list
    const clearList = setTimeout(() => {
      dispatch(clearNotification())
    }, 2000);
    // clearUp 
    return () => {
      clearTimeout(clearList);
    };
  }, [notificationList, dispatch]);

  return (
    <>
      <AnimatePresence>
        {display && <NotificationPrompt added={element.isAdded} />}
      </AnimatePresence>
    </>
  );
};

export default NotificationPromptCheck;
