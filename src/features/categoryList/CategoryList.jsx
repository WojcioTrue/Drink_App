import { useSelector } from "react-redux"


const CategoryListRedux = () => {
  const category = useSelector(state => state.categoryList.category)
    return (
    <p>{category}</p>
  )
}

export default CategoryListRedux