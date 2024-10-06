import FilterByMarker from "@/components/map/FilterByMarker";
import SearchMap from "@/components/map/SearchMap";

type Props = {};

export default function ContextualMenu({}: Props) {
  return (
    <div className="absolute top-0 left-0 p-4  w-full">
      <div className="p-2 px-6 bg-transparent flex justify-end gap-2  ">
        <FilterByMarker />
        <SearchMap />
      </div>
    </div>
  );
}
