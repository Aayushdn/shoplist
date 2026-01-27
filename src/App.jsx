import "./App.css";

import { Route, createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AppLayout from "./pages/AppLayout";
import FindProduct from "./components/FindProduct";
import ProductDataContextProvider from "./contexts/ProductDataContextProvider";
import HomePage from "./components/HomePage";
import NotFoundPage from "./pages/notFound";

const router = createHashRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, Component: HomePage },
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
