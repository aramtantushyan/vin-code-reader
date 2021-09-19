import ScanditBarcodeScanner from 'scandit-sdk-react';
import {
  Barcode,
  BarcodePicker,
  Camera,
  ScanSettings,
} from "scandit-sdk";

// const licenseKey = "AWvA5gEMICbOHM7G6AAjOZo2+u5sIIwq5QlSkZZdqYb/YHKJdg7z1/0c8xSzQsLwOzlZo6ZKLwkXTz7jvFLOg0wPcyJvVVgjCGXxS9BlWlcNCv3PBBgURSA4YEf5Evn1RhIRzu/FGAh1PZSLVbU8n2s08QDzcRPvDI5brLAFfMnAFiGuGhIoB2Ur04duIpIzAMnDmfg7tDQQwISbpTIDx4jWRU9QdJRncSyUtWU2za7ZR9eAsdZ9Ft2RI4lxNzdmz2IHJ0TNpRKMxlbZEnomQNgwDJik1OC0NTmkxDzifA3j2OjgpaQxXOpeWX6+XzztEzpLfTRKDYbyAroVG9mI9/rjX63T07nRno5joI8d8DVoz2O06DaAyn+3y0/O8LGQqtGtKfgjvRxCY1f9d7z4KkqMSM5hpS7tli1e6bIgy91LKOxW1JFbqIKnTo4zHUrF0NL6PRPuQs9c1d9eaO1E1+BT4qcIMIa+TpF396eoQKlWH7RjlpJ3klqSHQAwAhun8aZWqAPia6seR1lhOjTtIEliqlBoTWDv00ZZLPTWPljt7ztPK7dDz0EccLeZLohImF3gjaDyZnSyW8sR9MXa2LUVFvhIqzpNWo2Hw/ufJS2zZvt8tEsq+79//Porafp5/XAxL9qibTlivbmMXEZ0KBZYwiTDO46Yi9nuGhPVE+d1v0I1yFm/QLlahrUO35quKaJ6RQtBZ0UlklhBPErMewt9h+Y+yf/6hqpbcWuQSW5lwZi6e91ZwGq33Ufh8DVeZ7Xgr9iwzx3Wo33DB5myVABZMMdjitU0ap9hSpXkWQ=="

const licenseKey = "AZqw3wwMLcJmFnaC+T2yCtUjhV8fE69KelLdDrpCdUzwTr10/Teo1HMozYBeRJfhulxAoDtWJ8ZfRjw6uwMyi3xunPkZIp4jz2qQts97+pfKZjAuxTkc4Glu3MtkeL4e1UfiqCBl8ecWa1ultk4fStQQAM3+Zrv7YkUa4HVDpgXZZ7rxYHzzOV9CTT/na+W5pX3y85VUKhbLW7qrxXIZrX168HXVd+HZ92jw+klMO+u6ToYwwUmFarhMuEilasBMJmWYNj1jiIsod2RZiERagg5iadxGLym6933YBTRYs0HGePwXM2d+M/J6zLB6choMh1mliaBxAu2BWg2NJEdp84ITpHcVR87DCGvQKqlgbrE1cGVVaFOGdBdntmqRVvo8pX1fk3R4uOtaCWcBpmZC3+NxFK7KSuMHklaE/mNIcDtlRADP7XZHrDNUd6JbVdbQ+GYOJM1f1sNNPWT1q0xd6NdLe/p4aVXnyGUMB8NMuVbXfmrx9WyxyIVjReYgX/WvNyY3k/UkJTBvKP5ROQ3pZrzZ0oeaNhVDrnI1P0dDOvBDCdZznyJo9iOhyabj56Vkr54z4KwcJqteXAyeJVbN0JwLmMoYrvOUK5c7RlqD8NLKoA0LEKHsauOwAH6DlopXx+372XgiNnoLn+u9HYkRN249u3tcXkuufmCoqj7BjOcR1d980jT5NLeqcUd1P3q2N7ci/r448DcH5Bg2ZjLiOVZaFQvk4gI3rKglFUynYe4UJibl0/0WbCZFQUGBbVq1dC970uWeODCs0IqCI7OvR3TT94P/v/o8apZM15Q8CALEPQzKI88FxQ9vdLjhj/KrrIy9FO61xVd4P7c3+MPSZYUq6EJdyEqzMqwAMADWYF+fmtydolasCskxE9/6zx7ZqOoLaReTo77j9NSGX2DSqniagCeKYaZ8jMOM/IfnqZe3SwKPk3+ihLb91yHnbNZ68I6dYr/o7caU0uDvyiS0PpXmynrhkxWftEyP7s+sFI0cmR/yxEthm6yFiOm5OG5vFXzcBgktPQTRazgLyTydf/1uiwRgEDRKBsspJrmH06G5bFheiNQb53HmxlmqaMnuWpcn94qyUvl+rEFa5fX2EkuK+Z4RtqN84qdhTxOLAvCindfiQE+ZzKG1k//BxnxjDwAaq6CyagAIeFVXQVkywvmEFJxMkU4zXzYnIZhV74i/pXxe+HkXnJDyVFTqqD1S";

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