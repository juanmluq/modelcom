import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default class Nav extends Component {
    render() {
        return (
            <div className={style.nav}>
             <Link to= "/">Home</Link>
             <Link to= "/products/create">Create Product</Link>
             <Link to= "/products/info">Info</Link>

            </div>
        )
    }
}
