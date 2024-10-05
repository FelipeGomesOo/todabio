"use client";
import TodabioMap from "@/components/map/Map";
import { Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import useSampleList from "@/hooks/useSampleList";

export default function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? "";
  const mapId = process.env.NEXT_PUBLIC_MAP_ID ?? "";
  const sampleList = useSampleList();
  return (
    <>
      <APIProvider apiKey={API_KEY}>
        <div className="flex grow p-4 gap-4">
          <aside className="max-w-[400px] min-w-[400px] bg-slate-100 h-[calc(100svh-6rem)] overflow-y-scroll overflow-hidden  rounded-xl    border-[0.5rem] border-slate-100">
            {children}
          </aside>
          <div className="grow bg-slate-100 h-[calc(100svh-6rem)] overflow-hidden  rounded-xl ">
            <Suspense fallback={<div>Loading...</div>}>
              <TodabioMap mapId={mapId} sampleList={sampleList} />
            </Suspense>
          </div>
        </div>
      </APIProvider>
    </>
  );
}
