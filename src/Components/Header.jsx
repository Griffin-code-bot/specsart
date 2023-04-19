import React from 'react'
// import Cart from './src/assets/Cart'
import Cart from "../assets/Cart.png";
import Search from "../assets/Search.png";
import Customer from "../assets/Customer.png";
import Heart from "../assets/Heart.png";
import Home from "../assets/Home.png";
import specscart from "../assets/specscart.png";
import '../App.css'


// Group2965
// Group2966
// Group2967

function Header() {
  return (
    <>
    <div className="divmain">

      <div className="div0"> 
          <div className="div1">
            <span>Free returns</span>
            <span>|</span>
            <span>Try at Home</span>
            <span>|</span>
            <span>24 Hr Dispatch</span>
            
            </div>

            <div className="div0span">
              <span>Glasses</span>
              <span>Sunglasses</span>
              <span>Eye-Test</span>
              <span>Blogs</span>
            </div>
        </div>

        <div>
          <img src={specscart} />
        </div>


      <div className="divright">
          <div className='div2'>
        <span>+441613125767</span> 
        <span>|</span>
        <span>Help</span>
        <span>|</span>
        <span>Log In</span>
        </div>

        <div className="imagediv">
          <img src={Search} />
          <img src={Customer} />
          <img src={Heart} />
          <img src={Home} />
          <img src={Cart} />
          </div>

        </div>


        





    </div>

    </>
  )
}

export default Header