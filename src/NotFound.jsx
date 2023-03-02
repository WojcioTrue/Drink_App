import Message from "./Message"

const NotFound = () => {
  return (
    <Message 
        header={"Your list is empty!"} 
        text={"Add something to your favourite list."}
        secondText={"Drink responsibly!"}
        img={"./img/fav_icon.png"}
        />
  )
}

export default NotFound