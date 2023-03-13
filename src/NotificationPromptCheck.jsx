import { useEffect, useState } from "react"
import NotificationPrompt from "./NotificationPrompt"
const NotificationPromptCheck = ({element}) => {
    // state to display NotificationPrompt
    const [display, setDisplay] = useState(true);
    // unmount element after Timeout is out
    useEffect(() => {
        setTimeout(() => {
            setDisplay(false);
        }, 1000)
    },[])
  return (
        <>
        {display && <NotificationPrompt added={element.isAdded} /> }
        </>
  )
}

export default NotificationPromptCheck