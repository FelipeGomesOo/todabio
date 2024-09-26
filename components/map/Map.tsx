"use client";
import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import locations from "@/lib/locations";
import PoiMarkers from "@/components/map/PoiMarkers";
export default async function TodabioMap({
  API_KEY,
  mapId,
}: {
  API_KEY: string;
  mapId: string;
}) {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={mapId}
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        defaultZoom={13}
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
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
}
