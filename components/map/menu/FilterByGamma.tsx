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
import { getAllGammaAnalyses } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function FilterByGamma() {
  const { currentGamma, setCurrentGamma } = useGlobalSamples();
  const router = useRouter();
  const handlegammaChange = (gammaID: GammaAnalysis["ID"]) => {
    router.push(`/verifiable-biodiversity/gamma-analyses/${gammaID}`);
    setCurrentGamma(gammaID);
  };
  const Gammanalyses = getAllGammaAnalyses();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Gamma: {currentGamma}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Markers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentGamma || "All gammas"}
          onValueChange={handlegammaChange}
        >
          {Gammanalyses.map((gamma: GammaAnalysis, index: number) => (
            <DropdownMenuRadioItem key={index} value={gamma.ID}>
              {gamma.ID}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
