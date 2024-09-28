"use client";
import TodabioMap from "@/components/map/Map";
import { Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import sampleList from "@/lib/locations";

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? "";
  const mapId = process.env.NEXT_PUBLIC_MAP_ID ?? "";

  return (
    <>
      <APIProvider apiKey={API_KEY}>
        <div className="flex grow">
          <aside className="max-w-[500px] min-w-[400px] bg-slate-100 h-[calc(100svh-6rem)] overflow-y-scroll overflow-hidden  rounded-xl p-4 m-[1rem] border-[0.5rem] border-slate-100">
            {children}
          </aside>
          <Suspense fallback={<div>Loading...</div>}>
            <TodabioMap mapId={mapId} sampleList={sampleList} />
          </Suspense>
        </div>
      </APIProvider>
    </>
  );
}
