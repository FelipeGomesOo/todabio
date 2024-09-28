import samples from "@/lib/locations";
import SampleCard from "@/components/ui/sampleCard";
export default function Sidebar() {
  return (
    <aside className="w-[500px] grow-0 bg-gray-100 p-4 overflow-y-scroll h-[calc(100svh-4rem)] sticky">
      <h2 className="text-xl font-bold mb-4">Samples</h2>
      <div className="flex flex-col gap-4">
        {samples.map((sample: Sample, index: number) => (
          <SampleCard
            key={index}
            hashId={sample.hashId}
            sampleType={sample.sampleType}
            location={sample.location}
            DNASequenceFiles={sample.DNASequenceFiles}
            MolecularMarkers={sample.MolecularMarkers}
            CollectionDate={sample.CollectionDate}
            creditId={sample.creditId}
            DAPC={sample.DAPC}
          />
        ))}
      </div>
    </aside>
  );
}
