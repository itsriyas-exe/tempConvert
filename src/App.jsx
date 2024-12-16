import { useState } from 'react';
import './App.css'
import { FaTemperatureHigh } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
function App() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemp, setConvertedTemp] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setTemperature(value);
    if (value === '' || isNaN(value)) {
      setConvertedTemp('');
      return;
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
  };

  const convertTemperature = () => {
    if (temperature === '' || isNaN(temperature)) {
      alert('Please fill the form')
      setConvertedTemp('');
      return;
    }

    const temp = parseFloat(temperature);
    if (unit === 'Celsius') {
      const fahrenheit = (temp * 9) / 5 + 32;
      setConvertedTemp(`${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = ((temp - 32) * 5) / 9;
      setConvertedTemp(`${celsius.toFixed(2)} °C`);
    }
  };

  const clearFields = () => {
    setTemperature('');
    setConvertedTemp('');
  };

  const openlink = ()=>{
    window.open('https://github.com/itsriyas-exe', '_blank');
  }
  return (
    <>
      <header>
        <nav>
          <h3 className='ms-4 mt-3 text-primary' id='titleHead'><FaTemperatureHigh className='me-3' />Temp<span>Convert</span></h3>
        </nav>
        </header>
        <p className='text-secondary ms-4 w-75' style={{textAlign:"justify"}}>Welcome to TempConvert, your go-to destination for all your temperature conversion needs! Whether you're a student tackling homework, a scientist working on a project, or just someone curious about how hot or cold it is across different measurement systems, TempConvert has got you covered.</p>
      <div className='content  ms-4'>
             <label htmlFor="temp"> Temperature
              <input type="text" placeholder='Enter Temperature value' className='form-control' value={temperature} onChange={handleChange} />
             </label>
             <div className='mt-3'> <label htmlFor="unit-dropdown">Select Unit:</label> <select value={unit} className='form-control' style={{width:'200px'}} onChange={handleUnitChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select> </div>
      </div>
      <div className='d-flex ms-4 mt-3'>
          <button className='btn btn-success me-3'  onClick={convertTemperature}>Convert</button>
          <button className='btn btn-danger' onClick={clearFields}>Clear</button>
      </div>
      <div className="result mt-4 ms-4">
        {convertedTemp && <p>Converted Temperature: {convertedTemp}</p>}
      </div>
      <footer className='container'>
         <p className='text-center' style={{fontSize:'15px',marginTop:'350px'}}>TempConvert&nbsp;<span id='brand' onClick={openlink} style={{cursor:'pointer'}}>|&nbsp;<PiGithubLogoLight className='me-1' />
         itsriyas</span></p>
      </footer>
      </>
  

)
}
export default App
