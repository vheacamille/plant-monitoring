import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Plants from "./pages/Plants";
import WaterLevel from "./pages/WaterLevel";
import LightMeter from "./pages/LightMeter";
import PlantCondition from "./pages/PlantCondition";

function App() {

  return (
    <Router>
     
      <HomePage/>

      <Routes>
        <Route exact path="/" />
        <Route exact path="/plants" element={<Plants />} />
        <Route exact path="waterLevel" element={<WaterLevel />} />
        <Route exact path="/lightMeter" element={<LightMeter />} />
        <Route exact path="/plantCondition" element={<PlantCondition/>} />
      </Routes>
    </Router>
  );
}

export default App;
