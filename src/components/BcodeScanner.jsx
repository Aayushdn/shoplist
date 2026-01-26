// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import { BarcodeScanner } from "react-barcode-scanner";
import "react-barcode-scanner/polyfill";
import { findProductFromBarcode } from "../utils/products";
import { useProductData } from "../contexts/productDataContext";
import Item from "./Item";

function BottomDrawerPopup({ popupOpen, onClose, data, cta }) {
  const detectedProduct = data;
  console.log(detectedProduct);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 h-1/2
        ${popupOpen ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-white rounded-t-2xl p-4 shadow-lg min-h-full">
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        <h2 className="text-lg font-semibold">Results</h2>
        {detectedProduct != null ? (
          <div className="text-gray-600 mt-2">
            Is this the product you are looking
            <Item name={detectedProduct?.name} mode="standard" />
            <button
              onClick={() => cta()}
              className="mt-4 w-full bg-green-900 text-white py-2 rounded"
            >
              Yes
            </button>
          </div>
        ) : (
          <div className="text-gray-600 mt-2">
            Sorry couldnot find the product in our system!
          </div>
        )}

        <button
          onClick={() => onClose()}
          className="mt-10 w-full text-green-900 font-bold uppercase py-2 rounded"
        >
          Re-scan
        </button>
      </div>
    </div>
  );
}

function BcodeScanner({ toggleCamera, setSelectedProduct }) {
  // const [cameraPause, setCameraPause] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [detectedBarcode, setDetectedBarcode] = useState([]);
  const [detectedProduct, setDetectedProduct] = useState();
  const { productData } = useProductData();

  useEffect(
    function () {
      if (detectedBarcode.length > 0) {
        const code = detectedBarcode[0].rawValue;
        const product = findProductFromBarcode(code, productData);
        setDetectedProduct(product);
      }
    },
    [detectedBarcode, productData],
  );

  function stopCamera() {
    toggleCamera(false);
  }

  function onProductSelection() {
    setSelectedProduct(detectedProduct);
    toggleCamera(false);
  }

  function closePopup() {
    setPopupOpen(false);
    // setCameraPause(false);
  }

  function onBarcodeDetection(codes) {
    // setCameraPause(true);
    setDetectedBarcode(codes);
    setPopupOpen(true);
    console.log(codes);
  }

  return (
    <div className="bg-black h-full">
      <button
        className="bg-green-700 text-white p-2 rounded-md absolute top-2 left-2 z-3"
        onClick={stopCamera}
      >
        Close Camera
      </button>

      {popupOpen ? (
        <BottomDrawerPopup
          popupOpen={popupOpen}
          onClose={closePopup}
          data={detectedProduct}
          cta={onProductSelection}
        />
      ) : (
        <BarcodeScanner
          options={{
            delay: 2000,
            formats: ["code_128", "ean_13", "ean_8", "upc_a", "upc_e"],
          }}
          onCapture={onBarcodeDetection}
          paused={popupOpen}
        />
      )}
    </div>
  );
}

export default BcodeScanner;
