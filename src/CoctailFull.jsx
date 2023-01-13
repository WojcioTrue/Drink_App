import "./styles/coctail_fullscreen_prompt.css"

const CoctailFull = () => {
  return (
    <div class="coctail-full">
      <div class="relative-wrapper">
        <div class="coctail-full__container">
          <i class="fa-solid fa-circle-xmark coctail-full__close"></i>
          <i class="fa-solid fa-circle-plus add-favourite"></i>
          <img alt="#" src={"./img/category.jpg"} />
          <div class="coctail-full__text">
            <h4>Name of Coctail</h4>
            <p>Description of Coctail</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoctailFull