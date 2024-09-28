"use client";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import PoiMarkers from "@/components/map/PoiMarkers";
export default async function TodabioMap({
  mapId,
  sampleList,
}: {
  mapId: string;
  sampleList: Sample[];
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
      <PoiMarkers pois={sampleList} />
    </Map>
  );
}
