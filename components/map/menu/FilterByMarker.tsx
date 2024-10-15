"use client";
import { useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { selectedMarker, setSelectedMarker } = useGlobalSamples();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
          onValueChange={setSelectedMarker}
        >
          <DropdownMenuRadioItem value="All Markers">
            All Markers
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="12S">12S</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="16S">16S</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="COI">COI</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
