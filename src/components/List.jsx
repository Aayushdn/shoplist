import { useProductData } from "../contexts/productDataContext";
import Item from "./Item";
import NavBar from "./NavBar";
function List() {
  const { productList } = useProductData();

  return (
    <div className="container my-2 h-full">
      <h1 className="text-center text-2xl font-bold">ShopList</h1>
      <ul>
        {productList.map((item) => (
          <Item name={item.name} qty={item.qty} key={item.name} />
        ))}
        {productList.length == 0 ? (
          <div className="font-bold text-gray-700 text-center m-4 h-full">
            <p className="text-5xl grayscale opacity-55 h-full align-middle">
              👋 HI
            </p>
            <p className="uppercase opacity-55">
              Click Add+ to add to the list
            </p>
          </div>
        ) : null}
      </ul>
      <NavBar />
    </div>
  );
}

export default List;
