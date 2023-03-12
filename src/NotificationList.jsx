import NotificationPrompt from "./NotificationPrompt";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import "./styles/notification_prompt.css";

const NotificationList = () => {
  const { alertList } = useContext(MyContext);

  

  return (
    <div className="favourite-notification-list">
        {alertList.length > 0 && alertList.map((element, index) => 
          <NotificationPrompt key={index} added={element} />
        )}
    </div>
    )
};

export default NotificationList;
