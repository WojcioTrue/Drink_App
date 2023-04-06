import { useEffect, useState, useContext } from "react";
import NotificationPrompt from "./NotificationPrompt";
import { MyContext } from "../../context/ContextComponent";
import { AnimatePresence } from "framer-motion";
const NotificationPromptCheck = ({ element }) => {
  // state to display NotificationPrompt
  const [display, setDisplay] = useState(true);
  const { alertList, setAlertList } = useContext(MyContext);
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
      setAlertList([]);
    }, 2000);
    // clearUp 
    return () => {
      clearTimeout(clearList);
    };
  }, [alertList, setAlertList]);

  return (
    <>
      <AnimatePresence>
        {display && <NotificationPrompt added={element.isAdded} />}
      </AnimatePresence>
    </>
  );
};

export default NotificationPromptCheck;
