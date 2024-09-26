import TodabioMap from "@/components/map/Map";
import { Suspense } from "react";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? "";
  const mapId = process.env.NEXT_PUBLIC_MAP_ID ?? "";
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TodabioMap API_KEY={API_KEY} mapId={mapId} />
      </Suspense>
    </>
  );
}
