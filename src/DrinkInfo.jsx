import { useParams } from "react-router-dom"

const DrinkInfo = () => {
    const {id} = useParams()
  return (
    <div>DrinkInfo {id}</div>
  )
}

export default DrinkInfo