"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

const PoiMarkers = (props: { pois: Sample[] }) => {
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
      map.panTo(ev.latLng);
      router.push(`/biodiversity-samples/${hashId}`);
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
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
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

  return (
    <>
      {props.pois.map((poi: Sample) => (
        <AdvancedMarker
          key={poi.hashId}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.hashId)}
          clickable={true}
          onClick={(ev) => handleClick(ev, poi.hashId)}
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
export default PoiMarkers;
