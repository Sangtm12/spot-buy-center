import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

const Fields = [
  "Name",
  "Address",
  "VAT number",
  "Email",
  "IBAN",
  "BIC",
  "Invoice number",
  "OGM",
  "Invoice date",
  "Expiry date",
  "Order number",
];

const InvoiceData = () => {
  return (
    <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <p className="font-bold">Invoice data</p>
        <Button>
          <Edit size={16} />
          Edit
        </Button>
      </div>
      {Fields.map((field, index) => {
        return (
          <div className="flex items-center gap-2" key={index}>
            <p className="min-w-32 text-sm">{`${field}: `}</p>
            <Input />
          </div>
        );
      })}
    </div>
  );
};

export default InvoiceData;
