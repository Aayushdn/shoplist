import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useProductData } from "../contexts/productDataContext";
import BarcodeScanner from "./BarcodeScanner";
// import BarcodeScanIcon from "../assets/BarcodeScanIcon";

const inputClassName = "border-2 border-black-600 pe-2 ps-2 py-2 rounded-xl";

function findMatches(wordToBeMatched, data) {
  if (!wordToBeMatched) return;
  const regex = new RegExp(wordToBeMatched, "gi");
  console.log(regex, wordToBeMatched);
  return data.filter((item) => {
    return item.name.match(regex);
  });
}

function AddForm({ toggleScanner }) {
  const [productName, setProductName] = useState("hello");
  const [debounceVal, setDebounceVal] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [qty, setQty] = useState("1");

  const { productData } = useProductData();

  const debouncedChanged = useDebounce((inputValue) => {
    setDebounceVal(inputValue);
  }, 100);

  useEffect(
    function () {
      const result = findMatches(debounceVal, productData);
      setSearchResult(result);
    },
    [debounceVal, productData]
  );

  function handleInputChange(e) {
    setProductName(e.target.value);
    debouncedChanged(e.target.value);
  }

  return (
    <form action="#" method="post" className="w-full">
      <div className="formGroup my-4 flex flex-col">
        <label htmlFor="productName">Product Name </label>
        <input
          type="Name"
          placeholder="Product Name"
          id="productName"
          className={inputClassName}
          value={productName}
          onChange={handleInputChange}
        />
        <ul className="m-1">
          {searchResult?.map((item, i) => {
            return (
              <li key={item.id} className="m-2 p-4 bg-green-200/60 rounded-md">
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="formGroup my-4 flex bg-green-200/90 p-4">
        <div>
          {/* <BarcodeScanIcon /> */}
          {/* <BarcodeScanner /> */}
          <p onClick={() => toggleScanner(true)}>Scan with Barcode</p>
        </div>
      </div>
      <div className="formGroup my-4 flex flex-col">
        <label htmlFor="userPsw">Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          id="quantity"
          className={inputClassName}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          autoComplete="true"
        />
      </div>

      <div className="formGroup">
        <button
          name="login"
          type="submit"
          className="w-1/5 cursor-pointer rounded-xl bg-blue-300 py-2"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
