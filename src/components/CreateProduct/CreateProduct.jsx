import React from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions';

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
         <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" name="name" onChange={handleChange}/></label>
            <label>Price: <input type="number" name= "price" onChange={handleChange}/></label>
            <label>Description: <textarea name= "description" onChange={handleChange}/></label>
            <label>Stock: <input type="number" name= "stock" onChange={handleChange}/></label>
            <button type='submit'>Create Product</button>
         </form>
      </div>
   );
};

export default CreateProduct;
