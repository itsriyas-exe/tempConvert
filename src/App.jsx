import { useState } from 'react';
import './App.css'
import { FaTemperatureHigh } from "react-icons/fa";
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
  return (
    <>
      <header>
        <nav>
          <h3 className='ms-4 mt-3 text-primary'><FaTemperatureHigh className='me-4' />TempConvert</h3>
        </nav>
        </header>
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
      </>
  

)
}
export default App
