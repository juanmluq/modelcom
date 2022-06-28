import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getAllProducts } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard';
import style from './Home.module.css';
import image from '../../img-cp2/main-image-cp2.jpg';


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount(){
    this.props.getAllProducts()
  }
  
  render() {
    return (
      <div className={style.proDetd}>
     <h2>Model Commerce</h2>
     {/* <img src={image} alt="main-img" /> */}
     <h4>Products</h4>
     <section>
     {this.props.products?.map (product => 
     <ProductCard 
     id= {product.id}
     name= {product.name}
     price= {product.price}
     stock= {product.stock}
    //  si quisiera enviar una clase podria hacerlo: classname= {style.proDetd} y en ProductCard deberia recibir: (id, name,price, stock, classname) y asi la puede usar
     />
     )
      }
     </section>
     </div>
     )
  }
}

export const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)
