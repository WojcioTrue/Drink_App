import "./styles/categories_list.css";

const CategoryListElement = ({getCategory, value , imgSrc , text}) => {

    function changeCategory(e) {
      getCategory(e.currentTarget.getAttribute("value"));
      }

  return (
    <li value={value} onClick={changeCategory}>
          <img alt="#" src={imgSrc} />
          <p>{text}</p>
        </li>
  )
}

export default CategoryListElement