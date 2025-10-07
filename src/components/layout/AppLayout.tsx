import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidenav from "./Sidenav";

const AppLayout = () => {
  return (
    <div className="h-screen bg-background flex flex-col debug">
      <Header />
      <div className="p-2 flex-1 flex min-h-0">
        <Sidenav />
        <div className="p-6 pb-2 bg-white flex-1 border-t-2 border-border flex flex-col overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
