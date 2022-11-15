import React, {Component} from 'react';
import PlantsCard from './PlantsCardUI';

import Sili from './img/sili.png';
import Talong from './img/talong.png';
import Mustasa from './img/mustasa.jpg';
import Pechay from './img/pechay.jpg';
import Okra from './img/okra.jpg';


class PlantsCards extends Component {
    
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className = "col-md-2 padding-0"> <PlantsCard imgsrc={Sili} title ="Sili" description ="Siling labuyo is a small chili pepper cultivar that developed in the Philippines after the Columbian Exchange. It belongs to the species Capsicum frutescens and is characterized by triangular fruits which grow pointing upwards. The fruits and leaves are used in traditional Philippine cuisine."/></div>
                    <div className = "col-md-2 padding-0"> <PlantsCard imgsrc={Talong} title ="Talong" description= "Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition."/></div>
                    <div className = "col-md-2 padding-0"> <PlantsCard imgsrc={Mustasa} title ="Mustasa" description ="Brassica juncea, commonly brown mustard, Chinese mustard, Indian mustard, leaf mustard, Oriental mustard and vegetable mustard, is a species of mustard plant. "/></div>
                    <div className = "col-md-2 padding-0"> <PlantsCard imgsrc={Pechay} title ="Pechay"  description ="Chinese cabbage can refer to two cultivar groups of leaf vegetables often used in Chinese cuisine: the Pekinensis Group and the Chinensis Group. These vegetables are both variant cultivars or subspecies of the turnip and belong to the same genus as such Western staples as cabbage, broccoli, and cauliflower. "/></div>
                    <div className = "col-md-2 padding-0"> <PlantsCard imgsrc={Okra} title ="Okra"  description ="Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods. The geographical origin of okra is disputed, with supporters of West African, Ethiopian, Southeast Asian, and South Asian origins."/></div>

                </div>


            </div>

        );
    }
}

export default PlantsCards;