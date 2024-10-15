import {
  getAllGammaAnalyses,
  getAllSamples,
  getBetaAnalysisByID,
  getBetaMarkerAnalysis,
  getGammaAnalysisByID,
  getGammaMarkerAnalysis,
  getSamplesByAnalysis,
} from "@/lib/data";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface GlobalSamplesContextType {
  regularSamples: RegularSample[];
  controlSamples: ControlSample[];
  selectedMarker: string | "All Markers";
  setSelectedMarker: React.Dispatch<React.SetStateAction<MarkerType>>;
  currentGamma: GammaAnalysis["ID"] | null;
  setCurrentGamma: React.Dispatch<
    React.SetStateAction<GammaAnalysis["ID"] | null>
  >;
  currentBeta: BetaAnalysis["ID"];
  setCurrentBeta: React.Dispatch<React.SetStateAction<BetaAnalysis["ID"]>>;
  filteredSamples: (RegularSample | ControlSample)[];
}

const GlobalSamplesContext = createContext<
  GlobalSamplesContextType | undefined
>(undefined);

export function GlobalSamplesProvider({ children }: { children: ReactNode }) {
  const OriginalSamples = getAllSamples();
  const [selectedMarker, setSelectedMarker] =
    useState<MarkerType>("All Markers");
  const [currentGamma, setCurrentGamma] = useState<GammaAnalysis["ID"] | null>(
    null
  );
  const [currentBeta, setCurrentBeta] =
    useState<BetaAnalysis["ID"]>("All Betas");

  const latestGammaAnalysis = getAllGammaAnalyses().slice(-1)[0];

  console.log("selectedMarker", selectedMarker);
  const filteredSamples = useMemo(() => {
    let filtered = [...OriginalSamples];
    console.log("OriginalSamples", OriginalSamples);
    if (selectedMarker && selectedMarker !== "All Markers") {
      setCurrentGamma(latestGammaAnalysis.ID);
      if (currentGamma) {
        const gammaAnalysis = getGammaAnalysisByID(currentGamma);
        console.log("gammaAnalysis", gammaAnalysis);
        const gammaMarkerAnalysis =
          gammaAnalysis &&
          getGammaMarkerAnalysis(gammaAnalysis, selectedMarker);
        console.log("gammaMarkerAnalysis", gammaMarkerAnalysis);
        const gammaSamples =
          gammaMarkerAnalysis && getSamplesByAnalysis(gammaMarkerAnalysis);
        console.log("gammaSamples", gammaSamples);
        filtered = gammaSamples ?? [];
      }

      // Filtrar por Beta Analysis
      if (currentBeta === "All Betas") {
        filtered = filtered;
      } else {
        const betaAnalysis = getBetaAnalysisByID(currentBeta);
        console.log("betaAnalysis", betaAnalysis);
        const betaMarkerAnalysis =
          betaAnalysis && getBetaMarkerAnalysis(betaAnalysis, selectedMarker);
        console.log("betaMarkerAnalysis", betaMarkerAnalysis);
        const betaSamples =
          betaMarkerAnalysis && getSamplesByAnalysis(betaMarkerAnalysis);
        console.log("betaSamples", betaSamples);
        filtered = betaSamples ?? filtered;
      }
      filtered = filtered.filter((sample) =>
        sample.Sample_Markers.some(
          (markerObj) => markerObj.Marker === selectedMarker
        )
      );
      console.log("filteredAfterMarker", filtered); // Verifique após a filtragem por marcador
    } else {
      filtered = [...OriginalSamples];
    }

    console.log("finalFilteredSamples", filtered); // Verifique o resultado final das amostras filtradas
    return filtered;
  }, [OriginalSamples, selectedMarker, currentGamma, currentBeta]);

  // Dividir as amostras em regulares e de controle
  const regularSamples = filteredSamples.filter(
    (sample): sample is RegularSample => sample.Sample_Latitude !== null
  );
  const controlSamples = filteredSamples.filter(
    (sample): sample is ControlSample => sample.Sample_Latitude === null
  );

  return (
    <GlobalSamplesContext.Provider
      value={{
        regularSamples,
        controlSamples,
        selectedMarker,
        setSelectedMarker,
        currentGamma,
        setCurrentGamma,
        currentBeta,
        setCurrentBeta,
        filteredSamples,
      }}
    >
      {children}
    </GlobalSamplesContext.Provider>
  );
}

export function useGlobalSamples(): GlobalSamplesContextType {
  const context = useContext(GlobalSamplesContext);
  if (!context) {
    throw new Error(
      "useGlobalSamples must be used within a GlobalSamplesProvider"
    );
  }
  return context;
}
