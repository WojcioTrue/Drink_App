import NotificationPromptCheck from "./NotificationPromptCheck";
import { useSelector } from "react-redux";
import "../../styles/notification_prompt.css";

const NotificationList = () => {
    const notificationList = useSelector(state => state.notificationList)

    console.log(notificationList);
    return (
      <div className="favourite-notification-list">
          {notificationList.length > 0 && notificationList.map((element) => 
            <NotificationPromptCheck key={element.id} element={element}/>
          )}
      </div>
      )
}

export default NotificationList