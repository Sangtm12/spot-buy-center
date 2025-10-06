import { SearchInput } from "@/components/SearchInput";
import Tag from "@/components/Tag";
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
        {/* <div className="font-bold text-white bg-secondary px-4 py-1 text-xs rounded-sm">
          PI
        </div> */}
        <Tag>PI</Tag>
        <span>14.220.545</span>
        <Tag className="bg-sky-500 ml-auto">PEPPOL: 123123123</Tag>
        <Tag className="bg-gray-500">BN86FDF8</Tag>
      </div>
      <div className="flex"></div>
    </>
  );
};

export default MasterData;
