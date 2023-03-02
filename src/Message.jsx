"./img/fav_icon.png"

const Message = ({header, text, secondText, img}) => {
  return (
    <div className="empty-list">
          <span className="empty-list-img">
            <img alt="#" src={img}></img>
          </span>
          <section>
            <h3>{header}</h3>
            <p>{text}<br/></p><p>{secondText}</p>
          </section>
        </div>
  )
}

export default Message