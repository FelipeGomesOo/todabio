"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
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
import useCurrentGlobalMarker from "@/hooks/useCurrentGlobalMarker";

export function FilterByMarker() {
  const [position, setPosition] = React.useState("bottom");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentGlobalMarker = useCurrentGlobalMarker();
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
        <Button variant="outline">Current Marker: {currentGlobalMarker}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="12S"
            onClick={() => {
              router.push(pathname + "?" + createQueryString("marker", "12S"));
            }}
          >
            {" "}
            12S
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="16S"
            onClick={() => {
              router.push(pathname + "?" + createQueryString("marker", "16S"));
            }}
          >
            {" "}
            16S
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="COI"
            onClick={() => {
              router.push(pathname + "?" + createQueryString("marker", "COI"));
            }}
          >
            COI
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
