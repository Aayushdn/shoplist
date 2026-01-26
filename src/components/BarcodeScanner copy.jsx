import { useEffect, useRef } from "react";

function BarcodeScanner({ toggleCamera }) {
  const videoRef = useRef(null);

  function stopCamera() {
    videoRef.current.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
    toggleCamera(false);
  }

  useEffect(function () {
    let ref = videoRef.current;

    console.log(ref);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("Camera not supported");
      return;
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: windowWidth,
          height: windowHeight,
          facingMode: "environment",
        },
      })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.log(err));

    return () => {
      if (ref && ref.srcObject) {
        ref.srcObject.getTracks().forEach((track) => {
          console.log(track);
          track.stop();
        });
      }
    };
  }, []);

  // useEffect(function () {
  //   if (!("BarcodeDetector" in globalThis)) {
  //     console.log("Barcode Detector is not supported by this browser.");
  //   } else {
  //     const barcodeDetector = new BarcodeDetector({
  //       formats: ["code_39", "codabar", "ean_13"],
  //     });

  //     setInterval(async function () {
  //       const barcode = await barcodeDetector.detect(videoRef.current);
  //       if (barcode.length <= 0) return;
  //       alert(barcode.map((barcode) => barcode.rawValue));
  //     }, 1000);
  //   }
  // }, []);

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
    // <div className="h-full w-full relative">
    //   <video ref={videoRef} autoPlay muted playsInline height="100%"></video>
    //   <button
    //     className="bg-green-700 text-white p-2 rounded-md absolute top-2 left-2"
    //     onClick={stopCamera}
    //   >
    //     Close Camera
    //   </button>
    // </div>
    
  );
}

export default BarcodeScanner;
