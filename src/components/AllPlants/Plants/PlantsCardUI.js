import React from 'react';
import { Link } from "react-router-dom";
import WrapperP from '../WrapperP';


import './PlantsCards.css';



const PlantsCard = props =>{
    
    return (
        <WrapperP>
        <div className="card text-center shadow">
            <div className="overflow">
                <img src = {props.imgsrc} alt="sili" className="card-img-top"/>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                {/* <p className="card-text text-secondary">{props.description}</p> */}
                <Link to="/plantCondition" state={{plantName: props.title}} className= "btn btn-outline-success">View Plant</Link>
            </div>

            </div>
        </div>

        </WrapperP>
        

    )
}

export default PlantsCard; 