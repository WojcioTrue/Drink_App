import NotificationPrompt from "./NotificationPrompt";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import "./styles/notification_prompt.css";

const NotificationList = () => {
  const { alertList } = useContext(MyContext);
  console.log(alertList);
  return (
    <div className="favourite-notification-list">
        {alertList.map((element) => 
          <NotificationPrompt added={element} />
        )}
    </div>
    )
};

export default NotificationList;
