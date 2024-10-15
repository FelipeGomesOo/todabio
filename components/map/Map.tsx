"use client";
import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "@/components/map/PoiMarkers";
import ContextualMenu from "@/components/map/menu/ContextualMenu";
import { useGlobalSamples } from "@/context/GlobalSamples";
/* import MapSubtitles from "./MapSubtitles"; */

export default function TodabioMap({ mapId }: { mapId: string }) {
  const { regularSamples } = useGlobalSamples();
  return (
    <Map
      mapId={mapId}
      style={{ flexGrow: 1 }}
      defaultCenter={{ lat: -1.4558, lng: -48.4902 }}
      defaultZoom={5}
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
      {/* <MapSubtitles /> */}
      <PoiMarkers pois={regularSamples} />
    </Map>
  );
}
