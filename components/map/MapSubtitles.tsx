import { interpolateColors } from "@/lib/utils";
import React from "react";

type DAPC = {
  [key: string]: number;
};

export default function MapSubtitles({
  regularSamples,
}: {
  regularSamples: RegularSample[];
}) {
  const dapcExample: DAPC[] = regularSamples[0]?.dapc || [];
  if (dapcExample.length === 0) {
    return null;
  }
  const DAPCColors =
    dapcExample.length > 0 ? interpolateColors(dapcExample.length) : undefined;

  function groupColor(index: number) {
    if (DAPCColors && index >= 0 && index < DAPCColors.length) {
      return DAPCColors[index];
    }
    return undefined;
  }

  return (
    <div className="absolute bottom-6 right-4 p-4 bg-white rounded-md flex-col justify-start items-start inline-flex">
      {dapcExample.map((line, index: number) => {
        const [key, value] = Object.entries(line)[0];

        return (
          <div key={index} className="items-center gap-2 inline-flex">
            <div
              style={{ background: groupColor(index) }}
              className="w-2 h-2   rounded-full"
            ></div>
            <h5 className="text-xs">{key}</h5>
          </div>
        );
      })}
    </div>
  );
}
