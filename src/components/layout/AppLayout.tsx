import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { Dialog, DialogContent } from "../ui/dialog";
import Button from "../Button";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type JWTPayload = {
  role: string;
};

const AppLayout = () => {
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const token =
        sessionStorage.getItem("token") || searchParams.get("token");
      console.log("token", token);
      if (!token) {
        setIsRedirectModalOpen(true);
        return;
      }
      try {
        const decoded = jwtDecode<JWTPayload>(token);
        if (decoded.role !== "admin") {
          setIsRedirectModalOpen(true);
        }
      } catch (err) {
        console.error("Invalid token", err);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <>
      <div className="h-screen bg-custom-background flex flex-col">
        <Header />
        <div className="p-2 flex-1 flex min-h-0">
          <Sidenav />
          <div className="p-6 pb-2 bg-white flex-1 border-t-2 border-border flex flex-col overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Dialog open={isRedirectModalOpen}>
        <DialogContent className="[&>button[data-slot=dialog-close]]:hidden">
          <p className="text-xl font-bold text-center">
            You don't have permission to view this page
          </p>
          <Button
            className="w-fit mx-auto"
            onClick={() => (window.location.href = "https://youtube.com")}
          >
            Accept
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppLayout;
