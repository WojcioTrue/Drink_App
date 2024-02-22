import { useEffect, useState } from "react";
import NotificationPrompt from "./NotificationPrompt";
import { AnimatePresence } from "framer-motion";
import { clearNotification } from "./notificationListSlice" 
import { useAppDispatch, useAppSelector } from "../../app/storeHooks";

import type { initialStateType } from "./notificationListSlice";

const NotificationPromptCheck = ({element}: {element: initialStateType} ) => {
  // state to display NotificationPrompt
  const [display, setDisplay] = useState(true);
  const notificationList = useAppSelector(state => state.notificationList)
  const dispatch = useAppDispatch();
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
