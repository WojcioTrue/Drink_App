import { useParams } from "react-router-dom"

const NewComponent = () => {
    const {id} = useParams()
  return (
    <div>NewComponent {id}</div>
  )
}

export default NewComponent