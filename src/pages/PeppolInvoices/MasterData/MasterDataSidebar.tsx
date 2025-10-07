import Tag from "@/components/Tag";
import clsx from "clsx";
import { useState } from "react";

const Invoices = {
  sbcEntityMismatch: [
    { id: "1", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "2", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "3", title: "JALF SDJF LSKJD", description: "123123123" },
  ],
  noVat: [{ id: "4", title: "JALF SDJF LSKJD", description: "123123123" }],
  noPo: [{ id: "5", title: "JALF SDJF LSKJD", description: "123123123" }],
  poOnDifferentSupplier: [
    { id: "6", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "7", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "8", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "9", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "10", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "11", title: "JALF SDJF LSKJD", description: "123123123" },
    { id: "12", title: "JALF SDJF LSKJD", description: "123123123" },
  ],
};

const MasterDataSidebar = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(
    Invoices.sbcEntityMismatch[0]?.id
  );

  return (
    <div className="min-w-64 overflow-y-auto">
      {Object.entries(Invoices).map(([key, invoices]) => {
        return (
          <>
            <div className="bg-neutral-300 px-4 py-2 font-bold">
              {mapInvoiceTitle[key as keyof typeof mapInvoiceTitle]}
            </div>
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                onClick={() => setSelectedInvoiceId(invoice.id)}
                className={clsx(
                  "px-4 py-3 border border-border flex items-center gap-4  cursor-pointer",
                  {
                    "bg-blue-400 text-white": selectedInvoiceId === invoice.id,
                    "hover:bg-neutral-100": selectedInvoiceId !== invoice.id,
                  }
                )}
              >
                <Tag>PI</Tag>
                <div className="text-xs flex flex-col gap-2">
                  <p>{invoice.title}</p>
                  <p>{invoice.description}</p>
                </div>
              </div>
            ))}
          </>
        );
      })}
    </div>
  );
};

export default MasterDataSidebar;

const mapInvoiceTitle = {
  sbcEntityMismatch: "SBC Entity Mismatch",
  noVat: "No VAT",
  noPo: "No PO",
  poOnDifferentSupplier: "PO on Different Supplier",
};
