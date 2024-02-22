import NotificationPromptCheck from "./NotificationPromptCheck";
import "../../styles/notification_prompt.css";
import { useAppSelector } from "../../app/storeHooks";

const NotificationList = () => {
    const notificationList = useAppSelector(state => state.notificationList)

    return (
      <div className="favourite-notification-list">
          {notificationList.length > 0 && notificationList.map((element) => 
            <NotificationPromptCheck key={element.id} element={element}/>
          )}
      </div>
      )
}

export default NotificationList