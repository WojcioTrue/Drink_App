import NotificationPrompt from "./NotificationPrompt";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import "./styles/notification_prompt.css";

const NotificationList = () => {
  const { alertList, setAlertList } = useContext(MyContext);

  const reverseList = alertList.reverse();
  
  const sliceAlertList = () => {
    if(alertList.length > 3){
      return alertList.slice(0,3);
    } else {
      return alertList;
    }
  }

  console.log(alertList);

  return (
    <div className="favourite-notification-list">
        {alertList.length > 0 && alertList.map((element) => 
          <NotificationPrompt added={element} />
        )}
    </div>
    )
};

export default NotificationList;
