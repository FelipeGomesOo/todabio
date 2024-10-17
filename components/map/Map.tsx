"use client";
import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "@/components/map/PoiMarkers";
import ContextualMenu from "@/components/map/menu/ContextualMenu";
import { useGlobalSamples } from "@/context/GlobalSamples";
import MapSubtitles from "./MapSubtitles";
import {
  applyJitter,
  calculateAveragePoint,
  filterByRegularSamples,
} from "@/lib/utils";

import LoadingMap from "./LoadingMap";

export default function TodabioMap({ mapId }: { mapId: string }) {
  let { filteredSamples, isLoading } = useGlobalSamples();
  const status = isLoading ? "Loading" : "Ready";

  console.log("Status no mapa", status);
  console.log("filteredSamples no mapa", filteredSamples);

  // Verifique se está carregando e retorne antes de renderizar o mapa
  if (isLoading) {
    return (
      <>
        <LoadingMap />
      </>
    );
  }

  const regularSamples = applyJitter(
    filterByRegularSamples(filteredSamples),
    3000
  );
  const mapCenter = calculateAveragePoint(regularSamples);
  return (
    <Map
      mapId={mapId}
      style={{ flexGrow: 1 }}
      defaultCenter={mapCenter}
      defaultZoom={8}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    >
      <ContextualMenu />
      <MapSubtitles regularSamples={regularSamples} />
      <PoiMarkers pois={regularSamples} />
    </Map>
  );
}
