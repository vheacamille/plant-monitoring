import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseDb from '../components/Database/firebaseDbConfig';

const WaterLevel = () => {

    const [waterLevel, setWaterLevel] = useState('0');
    
    useEffect(() => {
        const getWaterLevel = () => {
            const db = getDatabase(firebaseDb);
            const waterLevelRef = ref(db, '/WaterLevel/WATER_LEVEL');
            onValue(waterLevelRef, (snapshot) => {
                if(snapshot.exists()) {
                    setWaterLevel(snapshot.val());
                }
                else {
                    setWaterLevel(0);
                }
            })
        }

        getWaterLevel();
    }, [])


    
    return (
        <div className='water-level'>
            <h1>Water Level: {waterLevel}</h1>
        </div>
    )
}

export default WaterLevel