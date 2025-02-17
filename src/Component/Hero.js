import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h2>New Arrivals Only</h2>
           <div>
            <div className='hero-hand-icon'>
                <p>New</p>
                <img src={ hand_icon} alt=''/>
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
           </div>
          <div className='hero-latest-btn'>
           <div>Latest Collection</div>
           <img src={arrow_icon} alt='' />
          </div>
        </div>
        
        <div className='hero-right'>
            <img src={ hero_image}/>
           
           
        </div>
      
    </div>
  )
}

export default Hero
