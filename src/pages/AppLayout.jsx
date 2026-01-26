import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}

export default AppLayout;
