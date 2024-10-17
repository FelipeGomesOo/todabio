"use client";
import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useGlobalSamples } from "@/context/GlobalSamples";
import Link from "next/link";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
export default function SearchMap() {
  const [open, setOpen] = React.useState(false);

  const { filteredSamples } = useGlobalSamples();

  const handleClick = () => {
    if (!location) return;
    console.log("Sample card clicado:", location.toString());

    setOpen(false);
  };
  //console.log("filteredSamples", filteredSamples);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        <MagnifyingGlassIcon className="h-4 w-4 mr-2" /> Search
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type sample hash..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {filteredSamples.map((sample, index: number) => (
              <CommandItem key={index}>
                <Link
                  href={`/verifiable-biodiversity/biodiversity-samples/${sample.Elabjournal_Sample_ID}`}
                  className="flex items-center justify-between w-full gap-2"
                  onClick={() => handleClick()}
                >
                  {sample.Elabjournal_Sample_ID}
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
