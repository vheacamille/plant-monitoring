import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseDb from '../components/Database/firebaseDbConfig';

const WaterLevel = () => {

    const [waterLevel, setWaterLevel] = useState('NA');
    
    useEffect(() => {
        const getWaterLevel = async () => {
            const db = getDatabase(firebaseDb);
            const waterLevelRef = await ref(db, '/WaterLevel/WATER_LEVEL');
            onValue(waterLevelRef, (snapshot) => {
                if(snapshot.exists()) {
                    setWaterLevel(JSON.stringify(snapshot.val()));
                }
                else {
                    setWaterLevel('0');
                }
            })
        }

        getWaterLevel();
    }, [])


    
    return (
        <div className='water-level'>
            { waterLevel !== 'NA' && (<h1>Water Level: {waterLevel}</h1>) }
        </div>
    )
}

export default WaterLevel