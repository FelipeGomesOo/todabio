/* import FilterByMarker from "@/components/map/FilterByMarker"; */
import SearchMap from "./SearchMap";
import FilterByBeta from "./FilterByBeta";
import FilterByMarker from "./FilterByMarker";
import FilterByGamma from "./FilterByGamma";

export default function ContextualMenu() {
  return (
    <div className="absolute top-4 right-4">
      <div className="bg-transparent flex justify-end gap-2  ">
        <SearchMap />
        <FilterByMarker />
        <FilterByGamma />
        <FilterByBeta />
      </div>
    </div>
  );
}
