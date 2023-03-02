import "../styles/button.css"

const Button = ({children, variant}) => {
  return (
    <button className={`rounded-button ${variant}`}>{children}</button>
  )
}

Button.defaultProps = {
  text : "Button"
}

export default Button

