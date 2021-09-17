import ScanditBarcodeScanner from 'scandit-sdk-react';
import {
  Barcode,
  BarcodePicker,
  Camera,
  ScanSettings,
} from "scandit-sdk";

const licenseKey = "AWvA5gEMICbOHM7G6AAjOZo2+u5sIIwq5QlSkZZdqYb/YHKJdg7z1/0c8xSzQsLwOzlZo6ZKLwkXTz7jvFLOg0wPcyJvVVgjCGXxS9BlWlcNCv3PBBgURSA4YEf5Evn1RhIRzu/FGAh1PZSLVbU8n2s08QDzcRPvDI5brLAFfMnAFiGuGhIoB2Ur04duIpIzAMnDmfg7tDQQwISbpTIDx4jWRU9QdJRncSyUtWU2za7ZR9eAsdZ9Ft2RI4lxNzdmz2IHJ0TNpRKMxlbZEnomQNgwDJik1OC0NTmkxDzifA3j2OjgpaQxXOpeWX6+XzztEzpLfTRKDYbyAroVG9mI9/rjX63T07nRno5joI8d8DVoz2O06DaAyn+3y0/O8LGQqtGtKfgjvRxCY1f9d7z4KkqMSM5hpS7tli1e6bIgy91LKOxW1JFbqIKnTo4zHUrF0NL6PRPuQs9c1d9eaO1E1+BT4qcIMIa+TpF396eoQKlWH7RjlpJ3klqSHQAwAhun8aZWqAPia6seR1lhOjTtIEliqlBoTWDv00ZZLPTWPljt7ztPK7dDz0EccLeZLohImF3gjaDyZnSyW8sR9MXa2LUVFvhIqzpNWo2Hw/ufJS2zZvt8tEsq+79//Porafp5/XAxL9qibTlivbmMXEZ0KBZYwiTDO46Yi9nuGhPVE+d1v0I1yFm/QLlahrUO35quKaJ6RQtBZ0UlklhBPErMewt9h+Y+yf/6hqpbcWuQSW5lwZi6e91ZwGq33Ufh8DVeZ7Xgr9iwzx3Wo33DB5myVABZMMdjitU0ap9hSpXkWQ=="

export const VinCodeReaderScandit = (props) => {


  return (
    <ScanditBarcodeScanner
      licenseKey={licenseKey}
      engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build"
      paused={!props.isScannerVisible}
      accessCamera={props.isScannerVisible}
      enableCameraSwitcher={true}
      enablePinchToZoom={true}
      enableTapToFocus={true}
      enableTorchToggle={true}
      guiStyle={BarcodePicker.GuiStyle.LASER}
      playSoundOnScan={true}
      vibrateOnScan={true}
      visible={true}
      cameraType={Camera.Type.BACK}
      scanSettings={new ScanSettings({enabledSymbologies: [Barcode.Symbology.CODE39, Barcode.Symbology.QR, Barcode.Symbology.EAN8, Barcode.Symbology.EAN13], codeDuplicateFilter: 1000})}
      onReady={(res) => console.log(1212, res)}
      onScan={(res) => {console.log(res); props.onScanValueChange(res.barcodes[0].data)}}
      onScanError={(res) => console.log('error', res)} 
      // cameraSettings={CameraSettings.ResolutionPreference.HD}
    />
  );
};