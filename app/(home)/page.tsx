"use client";
import BetaAnalysisCard from "@/components/map/cards/BetaAnalysisCard";
import GammaAnalysisCard from "@/components/map/cards/GammaAnalysisCard";
import { getAllGammaAnalyses } from "@/lib/data";
import { getAllBetaAnalyses } from "@/lib/data";
import { useGlobalSamples } from "@/context/GlobalSamples";

export default function VerifiableBiodiversityPage() {
  const gammaAnalyses = getAllGammaAnalyses();
  const betaAnalyses = getAllBetaAnalyses();
  const { currentBeta, setCurrentBeta, setIsLoading } = useGlobalSamples();
  if (currentBeta !== "All Betas") {
    setIsLoading(true);
    setCurrentBeta("All Betas");
    console.log("First Page changed beta to All Betas");
  }
  return (
    <>
      <div className="w-full flex-col gap-6 flex py-4">
        <div className="a">
          <h2 className="text-lg font-bold font-sans mb-2">
            Verifiable Biodiversity Center
          </h2>
          <p>
            Explore our analysis or use the map to discover biodiversity
            samples.
          </p>
        </div>
        <div className="flex-col gap-2 flex">
          <h3 className="text-base font-bold font-sans mb-2">Gamma Analyses</h3>
          <div className="w-full flex-col gap-4 flex">
            {gammaAnalyses.map((analysis) => (
              <GammaAnalysisCard key={analysis.ID} analysis={analysis} />
            ))}
          </div>
        </div>

        <div className="flex-col gap-2 flex">
          <h3 className="text-base font-bold font-sans mb-2">Beta Analyses</h3>
          <div className="w-full flex-col gap-4 flex">
            {betaAnalyses.map((analysis) => (
              <>
                <BetaAnalysisCard analysis={analysis} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
