import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseDb from '../components/Database/firebaseDbConfig';

const LightMeter = () => {
    const [lightMeter, setLightMeter] = useState('0');

    // VCV: TEST ONLY. Replace with correct firebase
    useEffect(() => {
        const getLightMeter = async () => {
            const db = getDatabase(firebaseDb);
            const lightMeterRef = await ref(db, '/WaterLevel/WATER_LEVEL');
            onValue(lightMeterRef, (snapshot) => {
                if(snapshot.exists()) {
                    setLightMeter(JSON.stringify(snapshot.val()));
                }
                else {
                    setLightMeter('0');
                }
            })
        }

        getLightMeter();
    }, [])

    return (
        <div className='light-meter'>
            <h1>Light Meter Page</h1>
        </div>
    )
}

export default LightMeter