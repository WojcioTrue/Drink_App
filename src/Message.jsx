import './styles/message.css'

const Message = ({header, text, secondText, img}) => {
  return (
    <div className="message__list">
          <span className="message__list-img">
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