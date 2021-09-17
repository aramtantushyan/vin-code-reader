import styles from "./ScannerContainer.module.css"

function ScannerContainer(props) {

  return (
    <div className={styles.scanner}>
    <button className="mb-3" id="readBarcode" onClick={props.onScan}>{props.isScannerVisible ? 'Close VIN scanner' : 'Open VIN scanner'}</button>
    {props.children}
    <div className="d-flex flex-column mt-3" >
      <label htmlFor="VIN">Scanned VIN code</label>
      <input type="text" id="VIN" value={props.scanValue} readOnly />
    </div>
  </div>
  )
}
export default ScannerContainer; 