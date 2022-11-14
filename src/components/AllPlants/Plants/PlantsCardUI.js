import React from 'react';


import './PlantsCards.css';



const PlantsCard = props =>{
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src = {props.imgsrc} alt="sili" className="card-img-top"/>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                {/* <p className="card-text text-secondary">{props.description}</p> */}
                <a href="#" className= "btn btn-outline-success">View Plant</a>
            </div>

            </div>
        </div>

    )
}

export default PlantsCard; 