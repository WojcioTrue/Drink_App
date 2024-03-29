import { Link } from "react-router-dom";
import Button from "../../sharedComponents/Button";
import AddRemButton from "../../sharedComponents/AddRemButton";
import { motion } from "framer-motion";
import { coctailButton } from "../../framerStyles/variants"

type CoctailElementProps = {
  id: string,
  name: string,
  imgSrc: string,
  useLayout?: boolean
}

const CoctailElement = ({ id, name, imgSrc, useLayout }: CoctailElementProps) => {

  return (
    <motion.section
      // for some reason variants dont work with whileInView
      // option...
      // if CoctailElement is in FavListFullScreen, add layout effect
      layout = {useLayout ? true : false}
      initial={{ opacity: 0.2, x: 15 }}
      exit={{opacity: 0, x: -15}}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid-coctails__product"
    >
      <div>
        <img alt={name} src={imgSrc}/>
        <h4>{name}</h4>
      </div>
      <Link to={`/drink/${id}`}>
        <Button animationVariant={coctailButton} variant="product-button">{"Details"}</Button>
      </Link>
      <AddRemButton name={name} id={id} img={imgSrc} className="grid-button" />
    </motion.section>
  );
};

export default CoctailElement;
