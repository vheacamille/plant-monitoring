import {useLocation} from 'react-router-dom';

import Plant from '../components/Plant/Plant';

const PlantCondition = () => {
    const data = useLocation();

    let plantName = getPlantName(data);

    return (
        <>
            <div className="page-name">
                <h2>{plantName}</h2>
            </div>
            <Plant plantName={plantName} />
        </>
    )
}

function getPlantName(data) {

    let plantName = null;

    if(data.state != null && data.state.plantName != null) {
        sessionStorage.setItem('plantName', data.state.plantName);
    }

    plantName = data.state != null ? data.state.plantName : sessionStorage.getItem('plantName');

    if(plantName === null || plantName === '') {
        // Default to Okra
        plantName = 'Okra';
    }

    return plantName;
}

export default PlantCondition