import { useState } from "react";

function Item({ name, qty, mode = "checkList" }) {
  const [checked, setChecked] = useState(false);

  return (
    <li
      className={`flex gap-1 p-3 border-b border-b-gray-700 ${
        checked ? "line-through color-gray" : ""
      }`}
    >
      <div className="p-3 flex items-center">
        {mode === "checkList" ? (
          <input
            type="checkbox"
            className=""
            value={checked}
            onChange={() => setChecked((state) => !state)}
          />
        ) : null}
      </div>
      <div className="flex-2 p-3">
        <p>{name}</p>
        {qty ? <p>QTY: {qty}</p> : null}
      </div>
      <div className="p-3">
        <img
          src="../favicon.svg"
          alt="productImage"
          height="30"
          width="50"
          className={`${checked ? "grayscale" : null}`}
        />
      </div>
    </li>
  );
}

export default Item;
