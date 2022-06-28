import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'
// FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const ProductCard = ({name, image, id, stock, price}) => { //para hacer lo del comentario siguiente deberia traer una propiedad llamada main= true
  const dispatch = useDispatch()

  return (
    <div className= {style.datosProd}>
                {/* si quiero puedo agregar otra clase convirtiendo el classname
                 en un array con javascript. Ej: classname= {[style.nav, main ? style.mainCard : ''].join(" ")}
                 estoy haciendo lo siguiente: pregunto si existe una propiedad llamada main (que es lo que 
                  deberia enviar cuando llamo a ProductCard) y si es asi agrego el stilo mainCard,
                 despues uno el array con un join dandole un espacio y de esa forma creo un string con dos clases que se van 
                 aplicar al div
                 */}
     <button onClick={() => dispatch(deleteProduct(id))} className={style.proBtn}>x</button>
     <h3>{name}</h3>
     <img src={image} alt={name} />
     <p>Stock: {stock}</p>
     <p className={style.txt}>Precio: ${price}</p>
     <Link to={`/product/${id}`}>{name}</Link>
    </div>
  );
};

export default ProductCard;