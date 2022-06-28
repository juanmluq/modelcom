 import React from 'react';
// import { Link } from 'react-router-dom';
 import style from './Info.module.css';
 import image from "../../img-cp2/wsp.png";
 import face from "../../img-cp2/face.png";
 import lk from "../../img-cp2/lk.png";
 import foto from "../../img-cp2/foto.jpg"
 // // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


// const info = () => { //para hacer lo del comentario siguiente deberia traer una propiedad llamada main= true
 

//   return (
//     <div className= {style.info}>
//      <h1>Aplicacion creada por</h1>
//      <br />
//      <h3>Juan M Luque</h3>
//      {/* <button onClick={() => dispatch(deleteProduct(id))} className={style.proBtn}>x</button>
//      <img src={image} alt={name} />
//      <p className={style.txt}></p>
//      <Link to={`/product/${id}`}>{name}</Link> */}
//     </div>
//   );
// };

// export default info;
const info = () => { 
return(
  <div className= {style.info}>
<div class="card mb-3" className={style.caja}>
  <div class="row g-0" >
    <div class="col-md-4" >
      <img src={foto} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Web creada por:</h5>
        <p class="card-text"> 
        Juan M. Luque
        <br />
        Full Stack
        </p>
        <p class="card-text"><small class="text-muted">soyluque@hotmail.com
        <br />
        11 7025 9063</small></p>
      </div>
    </div>
  </div>
  <section>
    <img src={image} alt="" />
    <img src={face} alt="" />
    <img src={lk} alt="" />
    </section>
</div>

</div>
  
);
};
export default info;