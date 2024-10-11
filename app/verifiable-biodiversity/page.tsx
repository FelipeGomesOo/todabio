import StudyCard from "@/components/map/StudyCard";

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
            <StudyCard
              name="Acre 2023-2024"
              id="analisys-01"
              description="Water Sample Biodiversity Analysis"
              samples={126}
            />
            <StudyCard
              name="Rio Paraná 2023-2024"
              id="analisys-02"
              description="Water Sample Biodiversity Analysis"
              samples={60}
            />
          </div>
        </div>
      </div>
    </>
  );
}
