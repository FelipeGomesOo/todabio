import AnalysisCard from "@/components/map/AnalysisCard";
import analysesList from "@/lib/analisys";
export default function VerifiableBiodiversityPage() {
  return (
    <>
      <div className="w-full flex-col gap-6 flex py-4">
        <div className="a">
          <h2 className="text-lg font-bold font-sans mb-2">
            Verifiable Biodiversity Center
          </h2>
          <p>
            Explore our analysis or use the map to discover biodiversity
            samples.
          </p>
        </div>

        <div className="flex-col gap-2 flex">
          <h3 className="text-base font-bold font-sans mb-2">Analyses</h3>
          <div className="w-full flex-col gap-4 flex">
            {analysesList.map((analysis) => (
              <AnalysisCard analysis={analysis} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
