"use client";
import TodabioMap from "@/components/map/Map";
import Sidebar from "@/components/map/Sidebar";
import { Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? "";
  const mapId = process.env.NEXT_PUBLIC_MAP_ID ?? "";
  return (
    <>
      <APIProvider apiKey={API_KEY}>
        <div className="flex grow  ">
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <TodabioMap API_KEY={API_KEY} mapId={mapId} />
          </Suspense>
        </div>
      </APIProvider>
    </>
  );
}
