import React from 'react'
import { useDispatch } from 'react-redux';
import { getProductDetail } from '../../redux/actions';
import { useSelector } from 'react-redux';
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = (props) => {
const dispatch = useDispatch();
const id= props.match.params.id;
const prod = useSelector ((state) => state.productDetail)

React.useEffect(() => {
    dispatch(getProductDetail(id))
},[]);

    return (
        <div>
            Product Detail
            <h4>{prod.name}</h4>
            <h2>{prod.price}</h2>
            <h2>{prod.description}</h2>
            <h2>{prod.stock}</h2>
        </div>
    )
}

export default ProductDetail;
