import Button from "@/components/Button";
import { Lock, Mail, RefreshCcw, Trash } from "lucide-react";
import InvoiceData from "./InvoiceData";
import MasterDataHeader from "./MasterDataHeader";
import MasterDataSidebar from "./MasterDataSidebar";
import PDFViewer from "@/components/PDFViewer";

const MasterData = () => {
  return (
    <div className="flex flex-col max-h-full">
      <MasterDataHeader />
      <div className="flex-1 mt-2 flex min-h-0">
        <MasterDataSidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex gap-2 items-center px-4 py-3 bg-yellow-50">
            <p className="font-bold">User X is working on this invoice</p>
            <Lock size={20} />
          </div>
          <div className="flex flex-1 min-h-0">
            <InvoiceData />
            <PDFViewer />
          </div>
          <div className="h-14 bg-background flex items-center gap-4">
            <Button variant="danger">
              <Trash size={16} /> Delete
            </Button>
            <Button variant="danger">
              <Mail size={16} /> Protest
            </Button>
            <Button className="ml-auto">
              <RefreshCcw size={16} /> Reprocess
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterData;
