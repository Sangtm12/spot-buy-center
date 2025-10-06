import Tabs from "../../components/Tabs";
import MasterData from "./TabContent/MasterData";

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
  return (
    <div className="bg-white flex-1 flex flex-col items-stretch">
      <h2 className="text-xl">Incoming PEPPOL invoices</h2>
      <Tabs tabs={RenderTabs} className="mt-4 flex-1" />
    </div>
  );
};

export default PeppolInvoices;
