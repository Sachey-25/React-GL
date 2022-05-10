import React from 'react'
import "./style.css"
import Menu from './menuApi'

 const Restraunt = () => {
     const myStyle = { color:"red"}
  return (
      <div>
                    <div className="card-container">
                        <div className='card' style={{ width: '18rem' }}>
                            <div className='card-body'>
                                <span className='card-number card-circle subtle'>1</span>
                                <span className='card-author subtle' style={myStyle}>Breakfast</span>
                                <h3 className='card-title'> Maggi </h3>
                                <span className='card-description subtle' style={{color:"red"}}>
                                    I love having Maggi. Its cooked delicious.
                                    J'adore Maggi, c'est l'un des bons snacks en Inde.
                                    Qui est dans la combinaison de froid et de salé.
                                </span>
                                <div className='card-read'>Read</div>
                            </div>
                            <img src="https://im.rediff.com/getahead/2020/sep/29burnt-garlic-chilli-maggi.jpg?w=670&h=900" 
                            alt="images" className='card-media' style={{width:"18rem"}}/>
                            <div className='card-tag subtle'>Order now</div>
                        </div>
                    </div>
       </div>     
  )
}
export default Restraunt;