import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidenav from "./Sidenav";

const AppLayout = () => {
  return (
    <div className="h-screen bg-background flex flex-col">
      <Header />
      <div className="p-2 flex-1 flex">
        <Sidenav />
        <div className="p-6 bg-white flex-1 overflow-auto border-t-2 border-border">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
