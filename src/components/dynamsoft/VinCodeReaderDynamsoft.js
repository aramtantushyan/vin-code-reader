import { useEffect, useRef } from 'react';
import '../../dbr'
import { BarcodeScanner, EnumBarcodeFormat } from 'dynamsoft-javascript-barcode';

import styles from './VinCodeReaderDynamsoft.module.css'
import { propTypes } from 'react-bootstrap/esm/Image';

function VinCodeReaderDynamsoft({isScannerVisible, onScanValueChange}) {
  const videoContainer = useRef();
  const scannerRef = useRef();
  let pReader = null;

  async function scan() {
    try {
      scannerRef.current = await (pReader = pReader || BarcodeScanner.createInstance());
      console.log(scannerRef.current)
      await scannerRef.current.setUIElement(videoContainer.current);
      let scanSettings = await scannerRef.current.getScanSettings();
      scanSettings.intervalTime = 500;
      scanSettings.duplicateForgetTime = 1000;
      await scannerRef.current.updateScanSettings(scanSettings);
      let runtimeSettings = await scannerRef.current.getRuntimeSettings();
      runtimeSettings.barcodeFormatIds = EnumBarcodeFormat.BF_CODE_39_EXTENDED | EnumBarcodeFormat.BF_CODE_39;
      await scannerRef.current.updateRuntimeSettings(runtimeSettings);
      /* 
        * onFrameRead is triggered once each frame is read. 
        * There can be one or multiple barcodes on each frame.
        */
      scannerRef.current.onFrameRead = results => {
        console.log(results);
        if (results.length > 0) {
          onScanValueChange(results[0].barcodeText)
        }

        for (let result of results) {
            console.log(result.barcodeFormatString + ": " + result.barcodeText);
        }
      };
      /* 
        * onUnduplicatdRead is triggered once a new barcode is found. 
        * The amount of time that the library 'remembers' the found barcode is defined by duplicateForgetTime 
        * in the ScanSettings interface of the BarcodeScanner class. By default that is set to 3000 ms (or 3 secs) 
        */
      // scanner.onUnduplicatedRead = (txt, result) => {
      //     alert('onUnduplicatedRead', txt);
      //     console.log("Unique Code Found: " + result);
      // }
      await scannerRef.current.show();
    } catch (ex) {
        console.log(ex);
        throw ex;
    } 
  }

  useEffect(() => {
    isScannerVisible ?  scan(): scannerRef.current?.hide()
  }, [isScannerVisible])


  return (
    <div ref={videoContainer}>
      <video className={`dbrScanner-video ${styles.player}`} playsInline={true}></video>
    </div>
  )
}

export default VinCodeReaderDynamsoft;