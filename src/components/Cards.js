import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
        <h1>Hey !</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    <CardItem 
                    src="/images/provence.jpg"
                    text="Explore"
                    label="Aventure"
                    path="/Services"
                    
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards