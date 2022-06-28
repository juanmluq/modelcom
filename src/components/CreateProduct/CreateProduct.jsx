import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions';
import style from './CreateProduct.module.css';
import { BiSearchAlt } from "react-icons/bi";
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
   const dispatch = useDispatch();
   const [product, setProduct] = React.useState({
      name: "",
      price: 0,
      description:"",
      stock: 0
   })
 function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProduct(product))
 }
 function handleChange(e) {
    setProduct ({
       ...product,
       [e.target.name]: e.target.value
    })
 }
   return (
      <div>
         <form className={style.create} onSubmit={handleSubmit}>
           
            <label>Name: <input className={style.input} type="text" name="name" onChange={handleChange}/></label>
            <label>Price: <input className={style.input} type="number" name= "price" onChange={handleChange}/></label>
            <label>Stock: <input className={style.input} type="number" name= "stock" onChange={handleChange}/></label>
            <label>Description: <input className={style.input} name= "description" onChange={handleChange}/></label>
            <button className={style.submit} type='submit'>Create Product</button>
            {/* npm i react-icons en consola y descargue una libreria donde traje la etiqueta BiSearchAlt
            que es un icono traido de esa libreria. lo podria usar asi: 
            <button className={style.submit} type='submit'><BiSearchAlt/></button>*/}
         </form>
      </div>
   );
};

export default CreateProduct;
