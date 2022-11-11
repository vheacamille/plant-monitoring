import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseDb from '../components/Database/firebaseDbConfig';

const LightMeter = () => {
    const [lightMeter, setLightMeter] = useState('0');

    useEffect(() => {
        const getLightMeter = async () => {
            const dbResponse = await fetch('https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/light.json');
            const lightMeterData = await dbResponse.json();

            setLightMeter(lightMeterData);
        }

        getLightMeter();
    }, [])

    // // VCV: TEST ONLY. Replace with correct firebase
    // useEffect(() => {
    //     setLightMeter('0');
    //     const getLightMeter = async () => {
    //         const db = getDatabase(firebaseDb);
    //         const lightMeterRef = await ref(db, '/WaterLevel/WATER_LEVEL');
    //         onValue(lightMeterRef, (snapshot) => {
    //             if(snapshot.exists()) {
    //                 setLightMeter(JSON.stringify(snapshot.val()));
    //             }
    //             else {
    //                 setLightMeter('0');
    //             }
    //         })
    //     }

    //     getLightMeter();
    // }, [])

    return (
        <div className='light-meter'>

        </div>
    )
}

export default LightMeter