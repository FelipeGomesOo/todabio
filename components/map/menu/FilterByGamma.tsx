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
import { getAllGammaAnalyses, getGammaAnalysisByID } from "@/lib/data";

export default function FilterByGamma() {
  const { currentGamma, setCurrentGamma, selectedMarker } = useGlobalSamples();
  if (selectedMarker === "All Markers") {
    return null;
  }
  const currentGammaAnalysis =
    currentGamma && getGammaAnalysisByID(currentGamma);

  const handlegammaChange = (gammaID: GammaAnalysis["ID"]) => {
    let gamma = getGammaAnalysisByID(gammaID);
    if (!gamma) {
      gamma = currentGammaAnalysis || getAllGammaAnalyses()[0];
    }
    setCurrentGamma(gamma.ID);
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
          <DropdownMenuRadioItem value="All gammas">
            All gammas
          </DropdownMenuRadioItem>
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
