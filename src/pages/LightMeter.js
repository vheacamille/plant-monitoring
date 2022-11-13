import { useState, useEffect } from "react";
import { LightThick } from "react-sensor-meters";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseDb from '../components/Database/firebaseDbConfig';

const LightMeter = () => {
    const [lightMeter, setLightMeter] = useState("0");

    useEffect(() => {
        const getLightMeter = async () => {
            const dbResponse = await fetch("https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/light.json");
            const lightMeterData = await dbResponse.json();

            setLightMeter(parseFloat(lightMeterData));
        }

        getLightMeter();
    }, [])

    // // // VCV: TEST ONLY. Replace with correct firebase
    // useEffect(() => {
    //     setLightMeter('0');
    //     const getLightMeter = async () => {
    //         const db = getDatabase(firebaseDb);
    //         const lightMeterRef = await ref(db, '/WaterLevel/WATER_LEVEL');
    //         onValue(lightMeterRef, (snapshot) => {
    //             if(snapshot.exists()) {
    //                 setLightMeter(parseFloat(JSON.stringify(snapshot.val())));
    //             }
    //             else {
    //                 setLightMeter(parseFloat('0'));
    //             }
    //         })
    //     }

    //     getLightMeter();
    // }, [])4

    // Data value was modified for display purposes only.
    var data = parseFloat(lightMeter) < 15 ? parseFloat(15) : lightMeter;

    return (
        <>
            <div className="page-name">
                <h2>Light Meter</h2>
            </div>
            <div key={lightMeter} className="light-meter">
                <LightThick
                    data={data}
                    topEndDataLimit={114}
                    animate={true}
                    neon={""}
                    fillColor={"yellow"}
                    backFillColor={"lightgrey"}
                    valueColor={"#F4F3F3"}
                    labelColor={"black"}
                    cardColor={"#F4F3F3"}
                    dotColor={"black"}
                    hover={false}
                    gaugeSize={"medium"}
                    labelText={parseFloat(lightMeter) + "%"}
                />
            </div>
        </>
    )
}

export default LightMeter