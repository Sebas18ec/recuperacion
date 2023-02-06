import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import React, { useState }  from 'react';
import { Route, Routes } from 'react-router';
import AboutUs from './components/about-us';
import Home from './components/home';




function App() {
  

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const styles = {
    container: {
      width: "70%",
      height: "100px",
      background: "green",
      margin: "auto",
      textAlign: "center",
      paddingTop: "30px"
    }
  };

  
  return (
    
    <div className="App">
      
      <Navbar />
      <br></br>

      <br></br>

      <Routes>
        <Route path="/airquality" element={
          <div className="container">
            <h1>Contador Personal de Reciclaje</h1>
              <div className="row">
                  <div style={styles.container}>
                    <button onClick={handleClick}>CLICK SI RECICLASTE HOY</button>
                    <p>Has reciclado {count} veces.</p>
                  </div>
              </div>

              <img src="https://media0.giphy.com/media/ZI4owdgI8ob1LtkFjt/giphy.gif" style={{height: 400,width: 400,}} />
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
