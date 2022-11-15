import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlantConditionUI from './PlantConditionUI';
import '../AllPlants/Plants/PlantsCards.css';

const Plant = ({plantName}) => {
    const [humidity, setHumidity] = useState('0');
    const [temperature, setTemperature] = useState('0');
    const [moisture, setMoisture] = useState('0');

    useEffect(() => {
        const getHumidity = async () => {
            const dbResponse = await fetch('https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/humidity.json');
            const humidityData = await dbResponse.json();

            setHumidity(parseFloat(humidityData));
        }

        const getTemperature = async () => {
            const dbResponse = await fetch('https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/temperature.json');
            const temperatureData = await dbResponse.json();

            setTemperature(parseFloat(temperatureData));
        }

        const getMoisture = async () => {
            // VCV: Temporary only because no moisture yet.
            const dbResponse = await fetch('https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/light.json');
            const moistureData = await dbResponse.json();

            setMoisture(parseFloat(moistureData));
        }

        getHumidity();
        getTemperature();
        getMoisture();
    }, [])

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className = "col-md-4"> <PlantConditionUI condition='humidity' value={parseFloat(humidity)} title="Humidity" description='Test description'/></div>
                <div className = "col-md-4"> <PlantConditionUI condition='temperature' value={parseFloat(temperature)} title="Temperature" description='Test description'/></div>
                <div className = "col-md-4"> <PlantConditionUI condition='moisture' value={parseFloat(moisture)} title="Moisture" description='Test description'/></div>
            </div>
        </div>
    )


}

Plant.propTypes = {
    plantName: PropTypes.string.isRequired
}

export default Plant