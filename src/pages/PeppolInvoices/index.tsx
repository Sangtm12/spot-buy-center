import { useEffect } from "react";
import Tabs from "../../components/Tabs";
import MasterData from "./MasterData";

const RenderTabs = [
  {
    label: "Master data",
    content: <MasterData />,
  },
  {
    label: "PO Matching",
    content: <p>PO Matching</p>,
  },
  {
    label: "Protested",
    content: <p>Protested</p>,
  },
  {
    label: "Processed",
    content: <p>Processed</p>,
  },
  {
    label: "Deleted",
    content: <p>Deleted</p>,
  },
];

const PeppolInvoices = () => {
  useEffect(() => {
    sessionStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.VtpWYt1FwTlwATlhjrnqYsp4JXLpSp0Ws9SEdLc2Ob8"
    );
    return () => {
      sessionStorage.removeItem("token");
    };
  }, []);

  return (
    <div className="bg-white flex-1 min-h-0 flex flex-col items-stretch">
      <h2 className="text-xl">Incoming PEPPOL invoices</h2>
      <Tabs tabs={RenderTabs} className="mt-4 flex-1 min-h-0" />
    </div>
  );
};

export default PeppolInvoices;
