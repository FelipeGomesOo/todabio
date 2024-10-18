"use client";
import SampleCard from "@/components/map/cards/sampleCard";
import { useGlobalSamples } from "@/context/GlobalSamples";

export default function Home() {
  const { filteredSamples } = useGlobalSamples();
  return (
    <>
      <div className="w-full flex-col gap-6 flex py-4">
        <h2 className="text-base font-bold font-sans">Biodiversity Samples</h2>
        <div className="flex flex-col gap-4">
          {filteredSamples.map((sample, index) => (
            <SampleCard key={index} sample={sample} />
          ))}
        </div>
      </div>
    </>
  );
}
