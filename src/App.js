import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal"> 
      <img src="logo.png" width="48" height="48" />

      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="btn btn-outline-primary" href="#">Book Appointment</a>
        <a class="btn btn-outline-primary" href="#">Find A Clinic</a>
        <a class="btn btn-outline-primary" >Find your Doctor</a>
       
      </nav>
      <a class="btn btn-outline-primary" href="#">Login</a>
    </div>

     
    </div>
  );
}

export default App;
