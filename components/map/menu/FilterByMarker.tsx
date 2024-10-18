"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalSamples } from "@/context/GlobalSamples";
import { getCurrentMarkers } from "@/lib/utils";

export default function FilterByMarker() {
  const { selectedMarker, setSelectedMarker, currentGamma } =
    useGlobalSamples();

  const handleMarkerChange = (value: string) => {
    setSelectedMarker(value as MarkerType);
  };
  const currentMarkers = getCurrentMarkers(currentGamma);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Current Marker: {selectedMarker}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Markers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedMarker}
          onValueChange={handleMarkerChange}
        >
          {currentMarkers &&
            currentMarkers.map((marker) => (
              <DropdownMenuRadioItem key={marker} value={marker}>
                {marker}
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
