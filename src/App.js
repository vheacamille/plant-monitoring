import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import HomePage from './pages/HomePage';
import AllPlants from './components/AllPlants/AllPlants';
import Navbar from './pages/mainpage/Navbar';

function App() {
  return (
    <Router>
      <HomePage/>
  
      <Routes>
        <Route exact path='/' />

      </Routes>
    </Router>
  );
}

export default App;
