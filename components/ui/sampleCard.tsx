"use client";
import { Badge } from "@/components/ui/badge";
import { useMap } from "@vis.gl/react-google-maps";
import Link from "next/link";
export default function SampleCard({ sample }: { sample: Sample }) {
  const { hashId, sampleType, Sample_Markers, location } = sample;
  const map = useMap();
  const handleClick = () => {
    if (!location) return;
    console.log("Sample card clicado:", location.toString());

    map?.panTo(location);
    map?.setZoom(12);
  };

  return (
    <Link
      href={`/biodiversity-samples/${hashId}`}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border border-[#cccccc] hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
      onClick={handleClick}
    >
      <header>
        <h4 className="text-base font-semibold">{hashId}</h4>
        <small className="opacity-60 text-sm">Biodiversity Sample</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        <Badge variant="secondary">{sampleType} Sample</Badge>

        {Sample_Markers.map((SampleMarker, index) => (
          <Badge key={index} variant="secondary">
            {SampleMarker.Name}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
