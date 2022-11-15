import PropTypes from 'prop-types';
import { HumidityDropPercent, TempLines, BasicCircle } from 'react-sensor-meters';

import './PlantCondition.css';

const PlantConditionUI = ({condition, value, title, description}) => {
    return (
        <div className="card text-center shadow">
            <div key={value} className="overflow">
                {generateIcon(condition, value) }
                
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{description}</p>
            </div>

            </div>
        </div>

    )
}

function generateIcon(condition, value) {
    if(condition === 'humidity') {
        return <HumidityDropPercent
                    data={value}
                    topEndDataLimit={100}
                    animate={true}
                    neon={''}
                    fillColor={'lightblue'}
                    backFillColor={'linen'}
                    valueColor={'black'}
                    labelColor={'black'}
                    cardColor={'white'}
                    dotColor={'royalblue'}
                    hover={false}
                    gaugeSize={'medium'}
                    labelText={''}
                    highFillColor={'dodgerblue'}
                    highFillThreshold={95}
                    borderColor={'lightGreen'}
                />
    }
    else if(condition === 'temperature') {
        return <TempLines
                    data={value}
                    topEndDataLimit={100}
                    animate={true}
                    neon={''}
                    fillColor={'lightcoral'}
                    backFillColor={'whitesmoke'}
                    valueColor={'black'}
                    labelColor={'white'}
                    cardColor={'white'}
                    dotColor={'gold'}
                    hover={false}
                    gaugeSize={'medium'}
                    labelText={''}
                    highFillColor={"crimson"}
                    highFillThreshold={95}
                />
    }
    else if(condition === 'moisture') {
        return <BasicCircle
                    data={value}
                    topEndDataLimit={100}
                    animate={true}
                    neon={''}
                    fillColor={'steelblue'}
                    backFillColor={'lightcyan'}
                    valueColor={'black'}
                    labelColor={'black'}
                    cardColor={'white'}
                    dotColor={"teal"}
                    hover={false}
                    gaugeSize={'medium'}
                    labelText={''}
                    highFillColor={'dodgerblue'}
                    highFillThreshold={80}
                />
    }
    else {
        return '';
    }
}

PlantConditionUI.propTypes = {
    condition: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired

}


export default PlantConditionUI; 