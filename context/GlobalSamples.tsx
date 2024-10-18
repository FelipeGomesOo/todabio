"use client";
import useFetchCSV from "@/hooks/useFetchCSV";
import {
  getAllGammaAnalyses,
  getBetaSamples,
  getGammaSamples,
  getSamplesWithDAPC,
} from "@/lib/data";
import { betaContainsDAPC } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface GlobalSamplesContextType {
  selectedMarker: MarkerType | "All Markers";
  setSelectedMarker: React.Dispatch<React.SetStateAction<MarkerType>>;
  currentGamma: GammaAnalysis["ID"] | null;
  setCurrentGamma: React.Dispatch<React.SetStateAction<GammaAnalysis["ID"]>>;
  currentBeta: BetaAnalysis["ID"];
  setCurrentBeta: React.Dispatch<React.SetStateAction<BetaAnalysis["ID"]>>;
  filteredSamples: Sample[];
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalSamplesContext = createContext<
  GlobalSamplesContextType | undefined
>(undefined);

export function GlobalSamplesProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType>("COI");
  const latestGammaAnalysis = getAllGammaAnalyses().slice(-1)[0];

  const [currentGamma, setCurrentGamma] = useState<GammaAnalysis["ID"]>(
    latestGammaAnalysis.ID
  );
  const [currentBeta, setCurrentBeta] =
    useState<BetaAnalysis["ID"]>("All Betas");
  const { fetchCsv } = useFetchCSV();
  const [filteredSamples, setFilteredSamples] = useState<Sample[]>([]);
  const stopLoadingAfterDelay = (delay: number) => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const gammaSamples = getGammaSamples(currentGamma, selectedMarker);

      if (currentBeta !== "All Betas") {
        const betaSamples = getBetaSamples(currentBeta, selectedMarker);
        const { DAPC_CSV_URL, containsDAPC } = betaContainsDAPC(
          currentBeta,
          selectedMarker
        );

        if (containsDAPC && DAPC_CSV_URL) {
          console.log("Beta contains DAPC!", DAPC_CSV_URL);
          const CSVData: Array<string> = await new Promise((resolve) => {
            fetchCsv(DAPC_CSV_URL, resolve);
          });

          if (CSVData.length > 0) {
            const samplesWithDAPC = getSamplesWithDAPC(CSVData, betaSamples);
            setFilteredSamples(samplesWithDAPC);
            stopLoadingAfterDelay(1000);
            console.log("CSVData.length > 0");
          } else {
            setFilteredSamples(betaSamples);
            stopLoadingAfterDelay(1000);
            console.log("No data returned from CSV.");
          }
        } else {
          setFilteredSamples(betaSamples);
          stopLoadingAfterDelay(1000);
          console.log("Beta does not contain DAPC");
        }
      } else {
        setFilteredSamples(gammaSamples);
        stopLoadingAfterDelay(1000);
        console.log("Samples are all betas");
      }
    };

    fetchData();
  }, [selectedMarker, currentGamma, currentBeta, fetchCsv]);

  return (
    <GlobalSamplesContext.Provider
      value={{
        selectedMarker,
        setSelectedMarker,
        currentGamma,
        setCurrentGamma,
        currentBeta,
        setCurrentBeta,
        filteredSamples,
        isLoading,
        setIsLoading,
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
