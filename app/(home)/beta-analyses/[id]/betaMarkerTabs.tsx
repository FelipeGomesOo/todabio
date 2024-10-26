"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BetaDetails from "./BetaDetails";
import { useGlobalSamples } from "@/context/GlobalSamples";
import { betaHasMarker } from "@/lib/utils";
import { useRouter } from "next/navigation";
export default function BetaMarkerTabs({
  analysis,
}: {
  analysis: BetaAnalysis;
}) {
  const {
    setCurrentBeta,
    currentBeta,
    selectedMarker,
    setSelectedMarker,
    setIsLoading,
    currentGamma,
  } = useGlobalSamples();
  const router = useRouter();
  if (betaHasMarker(analysis, selectedMarker)) {
    if (currentBeta !== analysis.ID) {
      setIsLoading(true);
      setCurrentBeta(analysis.ID);
      console.log("Beta Page changed beta to", analysis.ID);
    }
  } else {
    setIsLoading(true);
    setCurrentBeta("All Betas");
    router.push(`/gamma-analyses/${currentGamma}`);
  }

  const defaultMarker: MarkerType =
    selectedMarker === "All Markers"
      ? ("12S" as MarkerType)
      : (selectedMarker as MarkerType);

  return (
    <Tabs defaultValue={defaultMarker} className="w-full">
      <section className="flex items-center justify-between">
        <h3 className="text-sm font-bold font-sans">Analysis by marker</h3>
        <TabsList>
          {analysis.BetaMarkers.map((betaMarker, index) => (
            <TabsTrigger
              key={`tabs${index}`}
              value={betaMarker.Marker}
              onClick={() => setSelectedMarker(betaMarker.Marker)}
            >
              {betaMarker.Marker}
            </TabsTrigger>
          ))}
        </TabsList>
      </section>
      {analysis.BetaMarkers.map((betaMarker, index) => (
        <>
          <TabsContent key={`tabscontent${index}`} value={betaMarker.Marker}>
            <BetaDetails analysis={betaMarker} />
          </TabsContent>
        </>
      ))}
    </Tabs>
  );
}
