import FilterByMarker from "@/components/map/FilterByMarker";
import SearchMap from "@/components/map/SearchMap";

type Props = {};

export default function ContextualMenu({}: Props) {
  return (
    <div className="absolute top-4 right-4">
      <div className="bg-transparent flex justify-end gap-2  ">
        <FilterByMarker />
        <SearchMap />
      </div>
    </div>
  );
}
