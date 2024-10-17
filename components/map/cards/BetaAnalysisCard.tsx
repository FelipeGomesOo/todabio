import { Badge } from "@/components/ui/badge";
import { getBetaMarkerAnalysis } from "@/lib/data";
import Link from "next/link";
export default function BetaAnalysisCard({
  analysis,
  marker,
}: {
  analysis: BetaAnalysis;
  marker?: MarkerType;
}) {
  const { ID, Title, Description, BetaMarkers } = analysis;
  const markerAnalysis = marker && getBetaMarkerAnalysis(analysis, marker);

  return (
    <Link
      href={`/verifiable-biodiversity/beta-analyses/${ID}`}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border   hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
    >
      <header>
        <h4 className="text-sm font-bold">{Title}</h4>
        <small className="text-sm text-primary/70">{Description}</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        {markerAnalysis && (
          <Badge>{`${markerAnalysis.Marker}: ${markerAnalysis.Samples_Names.length}`}</Badge>
        )}
        {!markerAnalysis &&
          BetaMarkers.map((analysis, i) => (
            <Badge
              key={i}
              variant="secondary"
            >{`${analysis.Marker}: ${analysis.Samples_Names.length}`}</Badge>
          ))}
      </div>
    </Link>
  );
}
