import { createBrowserRouter, Navigate } from "react-router-dom";
import PATHS from "./paths";
import AppLayout from "../components/layout/AppLayout";
import PeppolInvoices from "../pages/PeppolInvoices";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={PATHS.PEPPOL_INVOICES} replace />,
      },
      {
        path: PATHS.INCOMING,
        element: <div>INCOMING</div>,
      },
      {
        path: PATHS.CASES,
        element: <div>CASES</div>,
      },
      {
        path: PATHS.SUPPLIERS,
        element: <div>SUPPLIERS</div>,
      },
      {
        path: PATHS.CLIENTS,
        element: <div>CLIENTS</div>,
      },
      {
        path: PATHS.SBC_ENTITIES,
        element: <div>SBC ENTITIES</div>,
      },
      {
        path: PATHS.REPORTING,
        element: <div>REPORTING</div>,
      },
      {
        path: PATHS.SYSTEM,
        element: <div>SYSTEM</div>,
      },
      {
        path: PATHS.PEPPOL_INVOICES,
        element: <PeppolInvoices />,
      },
    ],
  },
]);

export default router;
