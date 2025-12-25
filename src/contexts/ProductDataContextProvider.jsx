import { ProductDataContext } from "./productDataContext";

const drinksData = [
  {
    id: 1,
    name: "Deep RiverRock Still Water 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 2,
    name: "Deep RiverRock Still Water 1L",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 3,
    name: "Ballygowan Still Water 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 4,
    name: "Ballygowan Still Water 1L",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 5,
    name: "Deep RiverRock Sparkling Water 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 6,
    name: "Ballygowan Sparkling Water 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 7,
    name: "Deep RiverRock Apple & Pear Flavoured Water 750ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 8,
    name: "Deep RiverRock Watermelon & Peach Flavoured Water 750ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 9,
    name: "Deep RiverRock Tropical Flavoured Water 750ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 10,
    name: "Deep RiverRock Mandarin Flavoured Water 750ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 11,
    name: "VIT HIT Boost 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 12,
    name: "VIT HIT Perform 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 13,
    name: "VIT HIT Immunitea 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 14,
    name: "VIT HIT Lean & Green 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 15,
    name: "VIT HIT Detox 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 16,
    name: "Capri-Sun Orange Pouch 200ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 17,
    name: "Volvic Natural Mineral Water 1L",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 18,
    name: "Volvic Touch of Fruit Lemon 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 19,
    name: "Volvic Touch of Fruit Watermelon 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 20,
    name: "Volvic Touch of Fruit Pineapple 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 21,
    name: "Coca-Cola Original Taste Can 250ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
  {
    id: 22,
    name: "Coca-Cola Original Taste Bottle 500ml",
    category: "drink",
    barcode: "",
    imgUrl: "../favicon.svg",
  },
];

function ProductDataContextProvider({ children }) {
  return (
    <ProductDataContext.Provider value={{ productData: drinksData }}>
      {children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataContextProvider;
