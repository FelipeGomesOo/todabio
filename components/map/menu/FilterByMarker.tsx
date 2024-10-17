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

export default function FilterByMarker() {
  const { selectedMarker, setSelectedMarker } = useGlobalSamples();

  const handleMarkerChange = (value: string) => {
    setSelectedMarker(value as MarkerType);
  };

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
          <DropdownMenuRadioItem value="12S">12S</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="16S">16S</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="COI">COI</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
