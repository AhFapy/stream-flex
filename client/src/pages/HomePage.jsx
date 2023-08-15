import React from 'react'
import Navbar from '../Components/Navbar'
import "./styles.css"
import DefaultButton from '../Components/defaultButton'
import FeaturesComponent from '../Components/HomeComponents/FeaturesComponent'

const HomePage = () => {
  return (
    <>
    <div className='home-page'>
        <Navbar/>
        <div className='start-div'>
          <h2 className='start-header'>Click and Watch!</h2>
          <span className='start-span'>It has never been <span className='gradient-span'>simpler</span></span>
          <div className='gradient-img-container'>
            <img className='laptop' src='../../public/images/streamflex-laptop.png'></img>
          </div>
          <div className='second-span-container'>
            <span className='second-span'>Watch series and films <br/> like NEVER before</span>
            <div className='line'></div>
          </div>
          <div className='learn-more'>
            <DefaultButton value="Learn More"/>
          </div>
          <FeaturesComponent/>
        </div>
    </div>
    </>
  )
}

export default HomePage
