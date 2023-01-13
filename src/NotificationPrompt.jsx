import "./styles/notification_prompt.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";


const NotificationPrompt = () => {
  return (
    <div class="favourite-notification">
      <p>
        Added to favourite drinks ! 
      </p>
      <FontAwesomeIcon icon={faHeart} size="lg"/>
      <FontAwesomeIcon icon={faHeartBroken} size="lg" />
    </div>
  )
}

export default NotificationPrompt