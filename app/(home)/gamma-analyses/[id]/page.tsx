import { getGammaAnalysisByID } from "@/lib/data";
import { ReaderIcon } from "@radix-ui/react-icons";
import GammaMarkerTabs from "./GammaMarkerTabs";
export default function GammaAnalisysPage({
  params,
}: {
  params: { id: GammaAnalysis["ID"] };
}) {
  const analysis = getGammaAnalysisByID(params.id);

  if (!analysis) {
    return <div>Gamma Analysis not found </div>;
  }

  return (
    <div className="w-full overflow-hidden flex-col gap-8 flex items-start justify-start py-4">
      <header className="gap-4 w-full flex flex-col items-start justify-start">
        <div className="w-16 h-16 bg-secondary border-primary border-2 rounded-[90px] flex items-center justify-center ">
          <ReaderIcon className="h-10 w-10" />
        </div>
        <div className=" flex-col gap-2 inline-flex">
          <h2 className="text-base font-bold font-sans">{analysis.ID}</h2>
          <p className="text-sm text-primary/70">Gamma</p>
        </div>
      </header>
      <GammaMarkerTabs key={analysis.ID} analysis={analysis} />
    </div>
  );
}
