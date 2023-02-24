import "../styles/button.css"

const Button = ({text, variant}) => {
  return (
    <button className={`rounded-button ${variant}`}>{text}</button>
  )
}

Button.defaultProps = {
  text : "Button"
}

export default Button

