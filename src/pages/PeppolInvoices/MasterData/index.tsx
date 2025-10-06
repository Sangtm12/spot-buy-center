import { SearchInput } from "@/components/SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

const MasterData = () => {
  return (
    <>
      <div className="bg-background h-12 flex gap-2 items-center px-2">
        <SearchInput />
        <Select>
          <SelectTrigger className="min-w-18 justify-center bg-white border-border">
            <SelectValue placeholder={<Filter className="w-4 h-4" />} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
        <div className="font-bold text-white bg-secondary px-4 py-1 text-xs rounded-sm">
          PI
        </div>
        <span>14.220.545</span>
        <div className="ml-auto font-bold text-white bg-sky-400 px-4 py-1 text-xs rounded-sm">
          PEPPOL: 123123123
        </div>
        <div className="font-bold text-white bg-gray-400 px-4 py-1 text-xs rounded-sm">
          BN86FDF8
        </div>
      </div>
    </>
  );
};

export default MasterData;
