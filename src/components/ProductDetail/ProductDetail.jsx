import React from 'react'
import { useDispatch } from 'react-redux';
import { PageHeader } from 'antd';
import { getProductDetail } from '../../redux/actions';
import { useSelector } from 'react-redux';
import style from './ProductDetail.module.css'
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const ProductDetail = (props) => {
    console.log("props es:" + props.stock);
const dispatch = useDispatch();
const id= props.match.params.id;
const prod = useSelector ((state) => state.productDetail);
console.log("prod.stock es:" + prod.stock);
React.useEffect(() => {
    dispatch(getProductDetail(id))
},[]);

    return (
        <div className={style.proDet}>
            Product Detail
        <div> < PageHeader title="atras" onBack={() => props.history.goBack()}/> </div> 
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={prod.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{prod.name}</h5>
        <p class="card-text">{prod.description}</p>
        <p class="card-text">${prod.price}</p>
        <p class="card-text"><small class="text-muted">Stock: {prod.stock}</small></p>
      </div>
    </div>
  </div>
</div>
            
            {/* <h4>{prod.name}</h4>
            <h2>{prod.price}</h2>
            <h2>{prod.description}</h2>
            <h2>{prod.stock}</h2>
            <img src={prod.image} alt="image not found" /> */}
        </div>
    )
}

export default ProductDetail;
