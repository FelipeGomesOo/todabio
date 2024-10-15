import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function GammaAnalysisCard({
  analysis,
}: {
  analysis: GammaAnalysis;
}) {
  const { ID, GammaMarkers } = analysis;

  return (
    <Link
      href={`/verifiable-biodiversity/gamma-analyses/${ID}`}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border   hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
    >
      <header>
        <h4 className="text-sm font-bold">{ID}</h4>
        <small className="text-sm text-primary/70">Gamma</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        {GammaMarkers.map((analysis) => (
          <Badge variant="secondary">{`${analysis.Marker}: ${analysis.Samples_Names.length}`}</Badge>
        ))}
      </div>
    </Link>
  );
}
