import { useEffect, useRef } from "react";

function BarcodeScanner() {
  const videoRef = useRef(null);

  useEffect(function () {
    const ref = videoRef.current;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("Camera not supported");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.log(err));

    return () => {
      if (ref && ref.srcObject) {
        ref.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  //   if (!("BarcodeDetector" in globalThis)) {
  //     console.log("Barcode Detector is not supported by this browser.");
  //   } else {
  //     console.log("Barcode Detector supported!");

  //     // create new detector
  //     const barcodeDetector = new BarcodeDetector({
  //       formats: ["code_39", "codabar", "ean_13"],
  //     });
  //   }

  return (
    <div className="h-full w-full">
      <video ref={videoRef} autoPlay muted playsInline height="100%"></video>
    </div>
  );
}

export default BarcodeScanner;
