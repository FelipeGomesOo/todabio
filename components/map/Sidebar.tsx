"use client";
import { useState } from "react";
import SampleCard from "@/components/ui/sampleCard";
import SampleFullCard from "./SampleFullCard";

export default function Sidebar({ content }: { content: any }) {
  const [mapSidebar, setMapSidebar] = useState({
    type: "Sample List",
    content: sampleList,
  });
  const handleSampleClick = (id: Sample["hashId"]) => {
    setMapSidebar((prevState) => {
      const selectedSample = prevState.content.find(
        (sample: Sample) => sample.hashId === id
      );
      if (selectedSample) {
        return {
          type: "Sample",
          content: selectedSample ? [selectedSample] : [],
        };
      } else {
        // Handle the case where no matching sample is found
        return prevState;
      }
    });
  };

  return (
    <aside className="max-w-[500px] min-w-[400px] bg-slate-100 h-[calc(100svh-6rem)] overflow-y-scroll overflow-hidden  rounded-xl p-4 m-[1rem] border-[0.5rem] border-slate-100">
      {mapSidebar.type === "Sample List" && (
        <><div className=" w-full flex-col gap-9 flex">
          
            <h2 className="text-xl fontsampleList-bold mb-4">Samples</h2>
            <div className="flex flex-col gap-4">
              {mapSidebar.content.map((sample: Sample, index: number) => (
                <SampleCard
                  key={index}
                  sample={sample}
                  handleSampleClick={handleSampleClick}
                />
              ))}
            </div>
        </div>v>
        </>
      )}
      {mapSidebar.type === "Sample" && (
        <>
          <SampleFullCard
            sample={mapSidebar.content[0]}
            sampleList={sampleList}
          />
        </>
      )}
    </aside>
  );
}
