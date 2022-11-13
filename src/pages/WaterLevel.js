import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import LiquidChart from "react-liquidchart";
import firebaseDb from "../components/Database/firebaseDbConfig";

const WaterLevel = () => {

    const [waterLevel, setWaterLevel] = useState('0');
    
    // From public db
    useEffect(() => {
        const getWaterLevel = async () => {
            // VCV: Temporary since no water level yet in db
            const dbResponse = await fetch("https://binhi-data-default-rtdb.asia-southeast1.firebasedatabase.app/FirebaseIOT/humidity.json");
            const waterLevelValue = await dbResponse.json();

            setWaterLevel(waterLevelValue);
        }

        getWaterLevel();
    }, [])

    // useEffect(() => {
    //     const getWaterLevel = async () => {
    //         const db = getDatabase(firebaseDb);
    //         const waterLevelRef = await ref(db, '/WaterLevel/WATER_LEVEL');
    //         onValue(waterLevelRef, (snapshot) => {
    //             if(snapshot.exists()) {
    //                 setWaterLevel(JSON.stringify(snapshot.val()));
    //             }
    //             else {
    //                 setWaterLevel('0');
    //             }
    //         })
    //     }

    //     getWaterLevel();
    // }, [])

    return (
        <>
            <div className="page-name">
                <h2>Water Level</h2>
            </div>
            <div className="water-level">
                <LiquidChart
                    responsive
                    legend=""
                    value={parseFloat(waterLevel)}
                    showDecimal
                    amplitude={4}
                    frequency={2}
                    animationTime={2000}
                    animationWavesTime={2250}
                    postfix="%"
                    legendFontSize={0.1}
                    gradient={{
                        type: 1,
                        x1: 0,
                        x2: 0,
                        y1: 100,
                        y2: 0,
                        stops,
                    }}
                />
            </div>
        </>
    )
}

const stops = [
    <stop key={1} stopColor="#728FCE" offset="5%" />,
    <stop key={2} stopColor="#2B65EC" offset="50%" />,
    <stop key={3} stopColor="#659EC7" offset="85%" />,
  ];

export default WaterLevel