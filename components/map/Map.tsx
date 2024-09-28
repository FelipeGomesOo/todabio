"use client";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import samples from "@/lib/locations";
import PoiMarkers from "@/components/map/PoiMarkers";
import { MarkerProvider } from "@/context/MarkerContext";
import Sidebar from "@/components/map/Sidebar";
export default async function TodabioMap({
  API_KEY,
  mapId,
}: {
  API_KEY: string;
  mapId: string;
}) {
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
      <MarkerProvider>
        <PoiMarkers pois={samples} />
      </MarkerProvider>
    </Map>
  );
}
