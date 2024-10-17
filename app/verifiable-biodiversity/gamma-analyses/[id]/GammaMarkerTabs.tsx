"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GammaDetails from "./GammaDetails";
import { useGlobalSamples } from "@/context/GlobalSamples";
import { useEffect } from "react";
import { getBetaAnalysesByMarker } from "@/lib/data";
import BetaAnalysisCard from "@/components/map/cards/BetaAnalysisCard";

export default function GammaMarkerTabs({
  analysis,
}: {
  analysis: GammaAnalysis;
}) {
  const {
    setCurrentGamma,
    setCurrentBeta,
    selectedMarker,
    setSelectedMarker,
    setIsLoading,
    currentBeta,
  } = useGlobalSamples();

  const defaultMarker: MarkerType =
    selectedMarker === "All Markers"
      ? ("12S" as MarkerType)
      : (selectedMarker as MarkerType);

  useEffect(() => {
    setCurrentGamma(analysis.ID);
    setSelectedMarker(defaultMarker);
    //setCurrentBeta("All Betas");
  }, [analysis]);
  if (currentBeta !== "All Betas") {
    setIsLoading(true);
    setCurrentBeta("All Betas");
    console.log("Gamma Page changed beta to All Betas");
  }

  return (
    <Tabs defaultValue={defaultMarker} className="w-full">
      <section className="flex items-center justify-between">
        <h3 className="text-sm font-bold font-sans">Analysis by marker</h3>
        <TabsList>
          {analysis.GammaMarkers.map((gammaMarker, index) => (
            <TabsTrigger
              key={index}
              value={gammaMarker.Marker}
              onClick={() => setSelectedMarker(gammaMarker.Marker)}
            >
              {gammaMarker.Marker}
            </TabsTrigger>
          ))}
        </TabsList>
      </section>
      {analysis.GammaMarkers.map((gammaMarker, index) => (
        <>
          <TabsContent key={index} value={gammaMarker.Marker}>
            <GammaDetails analysis={gammaMarker} />

            <div className="flex flex-col gap-4 mt-4">
              <h4 className="text-sm font-bold">Beta analyses by marker</h4>
              {getBetaAnalysesByMarker(gammaMarker.Marker).map(
                (analysis, index) => (
                  <>
                    <BetaAnalysisCard
                      analysis={analysis}
                      marker={gammaMarker.Marker}
                    />
                  </>
                )
              )}
            </div>
          </TabsContent>
        </>
      ))}
    </Tabs>
  );
}
