"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import Point from "@/components/map/Point";
import { getMaxGroup, interpolateColors } from "@/lib/utils";
import useCurrentGlobalMarker from "@/hooks/useCurrentGlobalMarker";
const PoiMarkers = (props: { pois: RegularSample[] }) => {
  const currentGlobalMarker = useCurrentGlobalMarker();
  const markerString = currentGlobalMarker
    ? `?marker=${currentGlobalMarker}`
    : "";
  const map = useMap();
  const router = useRouter();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);
  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent, hashId: string) => {
      if (!map) return;
      if (!ev.latLng) return;
      console.log("marker clicked:", ev.latLng.toString());
      console.log("markers:", markers);
      //map.panTo(ev.latLng);
      router.push(
        `/verifiable-biodiversity/biodiversity-samples/${hashId}${markerString}`
      );
    },
    [map]
  );

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    //clusterer.current?.clearMarkers();
    //clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const dapcLength = props.pois[0].dapc?.length || 0;

  const DAPCColors = dapcLength > 0 && interpolateColors(dapcLength);

  function getPointColor(poi: RegularSample) {
    if (poi.dapc && Object.keys(poi.dapc).length > 0) {
      const DAPCGrouping = getMaxGroup(poi.dapc);
      if (DAPCGrouping && "index" in DAPCGrouping) {
        const { index } = DAPCGrouping;
        if (Array.isArray(DAPCColors)) {
          return DAPCColors[index];
        }
      }
    } else {
      return "#3355FF";
    }
  }
  return (
    <>
      {props.pois.map((poi: RegularSample, index: number) => (
        <AdvancedMarker
          key={index}
          position={{ lat: poi.Sample_Latitude, lng: poi.Sample_Longitude }}
          ref={(marker) => setMarkerRef(marker, poi.Elabjournal_Sample_ID)}
          clickable={true}
          onClick={(ev) => handleClick(ev, poi.Elabjournal_Sample_ID)}
        >
          <Point background={getPointColor(poi)} />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default PoiMarkers;
