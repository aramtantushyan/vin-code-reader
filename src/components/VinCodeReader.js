import { Fragment } from 'react';
import Quagga from 'quagga';

import styles from './VinCodeReader.module.css';

const VinCodeReader = () => {
  console.log(Quagga);
  console.log(navigator)

  const scanVinCodeHandler = () => {
    Quagga.init({
      numOfWorkers: navigator.hardwareConcurrency,
      locate: true,
      inputStream: {
        name: "Live",
        // ImageStream, VideoStream, or LiveStream (default)
        type: "LiveStream",
        // Physical dimensions of the input image
        constraints: {
          width: 400,
          height: 300,
          // Sets the source of the user's camera in case of multiple attached devices
          facingMode: "environment",
          // deviceId can be set if the selection of the camera is given to the user. This can be easily achieved via MediaDevices.enumerateDevices()
          // deviceId: ''
        // },
        // area prop restricts the decoding area of the image. The values are given in percentage, similar to the CSS style property when using position: absolute. This area is also useful in cases the locate property is set to false, defining the rectangle for the user.
        // area: {
        //   top: "0%",    // top offset
        //   right: "0%",  // right offset
        //   left: "0%",   // left offset
        //   bottom: "0%"  // bottom offset
        // }
        }
      },
      locator: {
        patchSize: 'medium',
        halfSample: true,
      },
      frequency: 10,
      decoder: {
        readers: [
          // "code_128_reader",
          // "ean_reader",
          // "ean_8_reader",
          "code_39_reader",
          "code_39_vin_reader",
          // "codabar_reader",
          // "upc_reader",
          // "upc_e_reader",
          // "i2of5_reader",
          // "2of5_reader",
          // "code_93_reader"
        ],
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true
          }
        }
      }
    },
    function(err) {
      if (err) {
        alert("You need a camera to scan barcodes.");
        console.log(err);
        return;
      }

      console.log("Initialization finished. Ready to start");
      Quagga.start();

      // Set flag to is running
      //_scannerIsRunning = true;
    })
  };

  Quagga.onProcessed(function(result) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute("width")),
          parseInt(drawingCanvas.getAttribute("height"))
        );
        result.boxes
          .filter(function(box) {
            return box !== result.box;
          })
          .forEach(function(box) {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: "green",
              lineWidth: 2
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: "#00F",
          lineWidth: 2
        });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(
          result.line,
          { x: "x", y: "y" },
          drawingCtx,
          { color: "red", lineWidth: 3 }
        );
      }
    }
  });

  Quagga.onDetected(
    (res)=>{
      console.log(res)
      if (res.hasOwnProperty('codeResult')) {
        console.log(res.codeResult.code)
        document.querySelector('#VinCode').value = res.codeResult.code;
        Quagga.stop();
      }
    }
  )

  return (
    <Fragment>
      <div className={styles.container}>
        <div id="interactive" className={`viewport ${styles.viewport}`}></div>
      </div>
      <button onClick={scanVinCodeHandler}>Scan VIN Code</button>
      <input type="text" id="VinCode" />
    </Fragment>
  );
}

export default VinCodeReader;