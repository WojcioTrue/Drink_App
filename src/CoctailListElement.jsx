import { Link } from "react-router-dom";
import Button from "./sharedComponents/Button";
import AddRemButton from "./sharedComponents/AddRemButton";

const CoctailElement = ({ id, name, imgSrc }) => {
  
  return (
    <section className="grid-coctails__product">
      <div>
        <img alt="#" src={imgSrc} />
        <h4>{name}</h4>
      </div>
      <Link to={`/${id}`}>
        <Button variant="product-button" >{"Details"}</Button>
      </Link>
      <AddRemButton name={name} id={id} img={imgSrc} className="grid-button"/>
    </section>
  );
};

export default CoctailElement;
