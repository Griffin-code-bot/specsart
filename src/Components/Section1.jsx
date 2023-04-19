import React from 'react'
// import mainimg from "./mainimg.png"

// import mainimg from "../assets/mainimg.png";
// import pen from "../assets/pen.png";
// import cards from "../assets/cards.png"

import main from "../assets/main.png"
import media from "../assets/media.png"



function Section1() {
  return (
    <div className="section1">
    <div>
        <p>Home Trial Cart 2.0</p> 
        <h2><span>It's an Experience!</span> <br />
        <span>Four Frames. Three Lenses. 1Laser</span>
        </h2>
        <button className='trynow'>Try Now</button>
        <button>Media</button>
        <img src={media} />
        {/* Watch Whats New! */}
    {/* <img src={pen}  width={250} height={250} />
    <img src={mainimg}  width={500} height={250} />
    <img src={cards} width={125} height={125}/> */}
    </div>

    <div>
    <img src={main}   />
    </div>

    </div>
  )
}

export default Section1