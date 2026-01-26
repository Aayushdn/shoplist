import { Activity, useState } from "react";
import AddForm from "./AddForm";
import BcodeScanner from "./BcodeScanner";

function FindProduct() {
  const [isScannerOn, setScannerOn] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="h-full w-full">
      <Activity mode={isScannerOn ? "hidden" : "visible"}>
        <div className="p-4">
          <h1 className="text-center text-2xl font-bold">ShopList</h1>
          <AddForm
            toggleScanner={setScannerOn}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </Activity>
      <Activity mode={isScannerOn ? "visible" : "hidden"}>
        <BcodeScanner
          toggleCamera={setScannerOn}
          setSelectedProduct={setSelectedProduct}
        />
      </Activity>
    </div>
  );
}

export default FindProduct;
