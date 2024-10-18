"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function SampleCard({ sample }: { sample: Sample }) {
  const { Elabjournal_Sample_ID: ID, Matrix, Sample_Markers } = sample;

  return (
    <Link
      href={`/alpha-analyses/${ID} `}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
    >
      <header>
        <h4 className="text-sm font-bold">{ID}</h4>
        <small className="text-sm text-primary/70">Biodiversity Sample</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        <Badge variant="secondary">{Matrix} Sample</Badge>

        {Sample_Markers.map((SampleMarker, index) => (
          <Badge key={index} variant="secondary">
            {SampleMarker.Marker}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
