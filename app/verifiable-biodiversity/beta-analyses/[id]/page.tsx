import { getBetaAnalysisByID } from "@/lib/data";
import { ReaderIcon } from "@radix-ui/react-icons";
import BetaMarkerTabs from "./betaMarkerTabs";
export default function BetaAnalisysPage({
  params,
}: {
  params: { id: BetaAnalysis["ID"] };
}) {
  const analysis = getBetaAnalysisByID(params.id);

  if (!analysis) {
    return <div>Beta Analysis not found</div>;
  }

  return (
    <div className="w-full overflow-hidden flex-col gap-8 flex items-start justify-start py-4">
      <header className="gap-4 w-full flex flex-col items-start justify-start">
        <div className="w-16 h-16 bg-secondary border-primary border-2 rounded-[90px] flex items-center justify-center ">
          <ReaderIcon className="h-10 w-10" />
        </div>
        <div className=" flex-col gap-2 inline-flex">
          <h2 className="text-base font-bold font-sans">{analysis.Title}</h2>
          <p className="text-sm text-primary/70">{analysis.Description}</p>
        </div>
      </header>
      <BetaMarkerTabs analysis={analysis} />
    </div>
  );
}
