import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <div className="h-full p-4">
      <h1 className="text-center text-2xl font-bold">ShopList</h1>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default AppLayout;
