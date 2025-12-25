import { Activity, useState } from "react";
import AddForm from "./AddForm";
import BarcodeScanner from "./BarcodeScanner";

function FindProduct() {
  const [isScannerOn, setScannerOn] = useState(false);
  return (
    <div className="h-full w-full">
      <Activity mode={isScannerOn ? "hidden" : "visible"}>
        <AddForm toggleScanner={setScannerOn} />
      </Activity>
      <Activity mode={isScannerOn ? "visible" : "hidden"}>
        <BarcodeScanner />
      </Activity>
    </div>
  );
}

export default FindProduct;
