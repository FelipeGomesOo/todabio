"use client";
import TodabioMap from "@/components/map/Map";
import { Suspense } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import useSampleList from "@/hooks/useSampleList";
import {
  GlobalSamplesProvider,
  useGlobalSamples,
} from "@/context/GlobalSamples";

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
        <GlobalSamplesProvider>
          <div className="flex grow p-4 gap-4 mapHolder">
            <aside className="max-w-[450px] min-w-[400px] h-[calc(100svh-6rem)] overflow-hidden px-2  rounded-xl border border-border">
              <div className="overflow-y-scroll px-2   h-full">{children}</div>
            </aside>
            <div className="grow bg-slate-100 h-[calc(100svh-6rem)] overflow-hidden  rounded-xl ">
              <Suspense fallback={<div>Loading...</div>}>
                <TodabioMap mapId={mapId} />
              </Suspense>
            </div>
          </div>
        </GlobalSamplesProvider>
      </APIProvider>
    </>
  );
}
