import { useEffect, useState } from "react"
import NotificationPrompt from "./NotificationPrompt"
import { AnimatePresence } from "framer-motion"
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
    <AnimatePresence>
        {display && <NotificationPrompt key={element.id} added={element.isAdded} /> }
   </AnimatePresence>
  )
}

export default NotificationPromptCheck