import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Card from './components/card';
import React from 'react';
import { Route, Routes } from 'react-router';
import AboutUs from './components/about-us';
import Home from './components/home';
import places from './data/data.json'



function App() {
  

  const dataComponents = places.places.map((place) => {
    return(
      <div className="col p-4">
            <Card title={place.country} description={place.location} measurements_sourcename={place.measurements_sourcename} measurements_value={place.measurements_value} measurements_unit={place.measurements_unit}/>
      </div>
    );
  });


  
  return (
    
    <div className="App">
      
      <Navbar />
      <br></br>

      <br></br>

      <Routes>
        <Route path="/airquality" element={
          <div className="container">
            <h1>Información sobre la calidad del aire</h1>
              <div className="row">
                {dataComponents}
              </div>
          </div>}>
        </Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
       
      </Routes>

      <br></br>
      
    </div>
  );
}

export default App;
