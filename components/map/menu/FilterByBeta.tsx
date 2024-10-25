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
import { getAllBetaAnalyses, getBetaAnalysisByID } from "@/lib/data";
import { filterBetaByGammaIDandMarker } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function FilterByBeta() {
  const { currentBeta, currentGamma, selectedMarker } = useGlobalSamples();
  const router = useRouter();
  const allBetas = { ID: "All Betas", Title: "All Betas" };
  const currentBetaAnalysis = getBetaAnalysisByID(currentBeta) || allBetas;

  const handleBetaChange = (betaID: BetaAnalysis["ID"]) => {
    if (betaID !== "All Betas") {
      router.push(`/beta-analyses/${betaID}`);
    } else {
      console.log("Pushed to Gamma Page");
      router.push(`/gamma-analyses/${currentGamma}`);
    }
    //setCurrentBeta(betaID);
  };
  const betaAnalyses = currentGamma
    ? filterBetaByGammaIDandMarker(
        getAllBetaAnalyses(),
        currentGamma,
        selectedMarker
      )
    : getAllBetaAnalyses();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Beta: {currentBetaAnalysis.Title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Markers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentBetaAnalysis.ID}
          onValueChange={handleBetaChange}
        >
          <DropdownMenuRadioItem value="All Betas">
            All Betas
          </DropdownMenuRadioItem>
          {betaAnalyses.map((beta: BetaAnalysis, index: number) => (
            <DropdownMenuRadioItem key={index} value={beta.ID}>
              {beta.Title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
