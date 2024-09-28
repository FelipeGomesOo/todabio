import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
} from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

type MarkerContextType = {
  markers: { [key: string]: Marker };
  setMarkers: React.Dispatch<React.SetStateAction<{ [key: string]: Marker }>>;
  clusterer: React.MutableRefObject<MarkerClusterer | null>;
};

const MarkerContext = createContext<MarkerContextType | undefined>(undefined);

export const MarkerProvider = ({ children }: { children: ReactNode }) => {
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  return (
    <MarkerContext.Provider value={{ markers, setMarkers, clusterer }}>
      {children}
    </MarkerContext.Provider>
  );
};

export const useMarkerContext = () => {
  const context = useContext(MarkerContext);
  if (!context) {
    throw new Error("useMarkerContext must be used within a MarkerProvider");
  }
  return context;
};
