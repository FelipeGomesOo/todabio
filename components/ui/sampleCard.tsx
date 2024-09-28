"use client";
import { Badge } from "@/components/ui/badge";
import { useMap } from "@vis.gl/react-google-maps";
export default function SampleCard({
  hashId,
  sampleType,
  DNASequenceFiles,
  MolecularMarkers,
  location,
  DAPC,
}: Sample) {
  const map = useMap();
  const handleClick = (location: any) => {
    if (!location) return;
    console.log("breguete clicado:", location.toString());
    map?.panTo(location);
  };

  return (
    <div
      className="h-[10rem] p-3.5 bg-white rounded-[5px] border border-[#cccccc] flex-col gap-3.5 inline-flex"
      onClick={() => handleClick(location)}
    >
      <div className="self-stretch h-[88px] flex-col justify-start items-start flex">
        <h4 className="text-base font-semibold">Biodiversity Sample</h4>
        <small className="opacity-60 text-sm">{hashId}</small>
      </div>
      <div className="pt-3.5 border-t border-[#e6e6e6] justify-start items-start gap-1 flex flex-wrap">
        <Badge variant="secondary">{sampleType} Sample</Badge>
        <Badge variant="secondary">{DNASequenceFiles.length} DNA Files</Badge>

        {MolecularMarkers.map((marker, index) => (
          <Badge key={index} variant="secondary">
            {marker}
          </Badge>
        ))}
        {DAPC.map((group, index) => (
          <Badge key={index} variant="secondary">
            {Object.keys(group)[0]}
          </Badge>
        ))}
      </div>
    </div>
  );
}
