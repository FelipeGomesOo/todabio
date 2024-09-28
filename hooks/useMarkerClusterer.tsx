import { useCallback, useEffect } from "react";
import { useMarkerContext } from "@/context/MarkerContext";
import { useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

export const useMarkerClusterer = () => {
  const { markers, clusterer } = useMarkerContext();
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);
};
