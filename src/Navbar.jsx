import shoppingcartimage from './assets/icons8-shopping-cart-80.png'
import { useState } from 'react'

function Navbar({counter , showCounter}) {
    
    
    return(
        <nav className="navbar">
            <h2 className="logo"><strong>FruitShop</strong></h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Store Locator</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="kart">
                {showCounter && (
                    <div className="itemcounter">
                    <p>{counter}</p>
                    </div>
                )}
                
                <div className="kartimage"><img src={shoppingcartimage} style={{height: "45px", width: "45px"}}/></div>
            </div>
            <button className="login-button">Login</button>
        </nav>
    )
}

export default Navbar