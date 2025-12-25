import "./App.css";

import { createBrowserRouter, Route } from "react-router";
import { RouterProvider } from "react-router/dom";

import Item from "./components/Item";
import AppLayout from "./pages/AppLayout";
import List from "./components/List";
import FindProduct from "./components/FindProduct";
import ProductDataContextProvider from "./contexts/ProductDataContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: List },
      { path: "/add", Component: FindProduct },
    ],
  },
]);

function App() {
  return (
    <>
      <ProductDataContextProvider>
        <RouterProvider router={router} />
      </ProductDataContextProvider>
    </>
  );
}

export default App;
