import NotificationPromptCheck from "./NotificationPromptCheck";
import { useContext } from "react";
import { MyContext } from "./context/ContextComponent";
import "./styles/notification_prompt.css";

const NotificationList = () => {
  const { alertList } = useContext(MyContext);

  console.log(alertList);

  return (
    <div className="favourite-notification-list">
        {alertList.length > 0 && alertList.map((element, index) => 
          <NotificationPromptCheck key={index} added={element.isAdded} />
        )}
    </div>
    )
};

export default NotificationList;
