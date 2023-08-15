import React, { useState } from 'react'

const PlanComponent = () => {
  const [selectedDiv, setSelectedDiv] = useState(null)

    const features = ["Access To Films ", "Access To Series ", "2 Users ", "4k and HDR ", "Watch Simultaneously ", "No ads ", "Download Content "];

    const renderFeatures = function(featuresArray) {
        const renderedFeatures = featuresArray.map((feature, index) => {
            <p key={index}>{feature}</p>
        })
        return renderedFeatures;
    }

    const cardInformation = [{name: "Standard", price:"$5.99", numberOfFeatures: 3,}, {name: "Premium", price:"$8.99", numberOfFeatures: 5}, {name: "Prime", price:"$14.99", numberOfFeatures: 7} ]

    const handleClick = (index) => {
      setSelectedDiv(index === selectedDiv ? null : index);
    };  

    const renderedObjects = cardInformation.map((object, index) => (
    <div className='plan-container'>
      <div className='gradient-border-plan'>
        <div className={`gradient-blocker ${selectedDiv === index ? "gradient-blocker-transparent" : ""}`}>
          <div className={`plan gradient-blocker ${selectedDiv === index ? "gradient-blocker-transparent" : ""}`} key={index} onClick={() => handleClick(index)}>
        <div
          className={"plan"}
        >
          <div className={`plan-title gradient-blocker ${selectedDiv === index ? "gradient-blocker-transparent" : ""}`}>
            <h3>{object.name}</h3>
            <p>{object.price}</p>
          </div>
        </div>
        <div className='plan-info'>
          {features.map((feature, i) => (
          <p key={i} className={i <= [2, 4, 6][index] ? 'available' : 'not-available'}>{feature}</p>
          ))}
        </div>
      </div>
        </div>
      </div>
      </div>
    ));
  
    
  return renderedObjects
}

export default PlanComponent
