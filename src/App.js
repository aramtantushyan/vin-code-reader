import { useState, useCallback } from 'react';
import './App.css';

import { VinCodeReaderScandit } from './components/scandit/VinCodeReaderScandit'
import ScannerContainer from './components/scanner-container/ScannerContainer';
import VinCodeReaderDynamsoft from './components/dynamsoft/VinCodeReaderDynamsoft'

function App() {
  const [selectValue, setSelectValue] = useState(null);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [scanValue, setScanValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const scanVinCodeHandler = () => {
    setIsScannerVisible((prevState) => !prevState);
  }

  const handleScanValueChange = useCallback((res) => {
    setScanValue(res);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-3 mt-3">
          <div className="col-8 d-flex flex-column justify-content-center">
            <label htmlFor="scannerSelect">Select Scanner</label>
            <select onChange={handleSelectChange} defaultValue={0} id="scannerSelect">
              <option value={0} disabled>Select...</option>
              <option value="scandit">Scandit</option>
              <option value="dynamsoft">Dynamsoft</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mb-3 mt-3">
          <div className="col-10 d-flex justify-content-center">
            {selectValue && 
            <ScannerContainer 
              onScan={scanVinCodeHandler} 
              scanValue={scanValue} 
              isScannerVisible={isScannerVisible}>
              {selectValue === 'scandit' ?
              <VinCodeReaderScandit
                isScannerVisible={isScannerVisible}
                onScanValueChange={handleScanValueChange}/> : <VinCodeReaderDynamsoft isScannerVisible={isScannerVisible} onScanValueChange={handleScanValueChange}/>
              }
            </ScannerContainer>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
