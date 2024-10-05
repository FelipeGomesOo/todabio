"use client";
import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "@/components/map/PoiMarkers";
import { FilterByMarker } from "./FilterByMarker";
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
      <div className="absolute top-0 left-0 p-4  w-full">
        <div className="p-2 px-6 bg-primary-light/10  rounded-full">
          <FilterByMarker />
        </div>
      </div>
      <PoiMarkers pois={sampleList} />
    </Map>
  );
}
