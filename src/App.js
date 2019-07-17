import React from 'react';
import logo from './logo.svg';
import './App.css';

function getFindAClinic(){
  return 'Find A Clinic';
}

function App() {

  const bookAppointment = 'Book Appointment';
  const style= { color: 'red' }

  return (
    <div className="App">
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal"> 
      <img src="logo.png" style={{width: 48, height: 48}} />
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a style={style} className="btn btn-outline-primary" href="#">{bookAppointment}</a>
        <a className="btn btn-outline-primary" href="#">{getFindAClinic()}</a>
        <a className="btn btn-outline-primary" >Find your Doctor</a>
       
      </nav>
      <a class="btn btn-outline-primary" href="#">Login</a>
    </div>

     
    </div>
  );
}

export default App;
