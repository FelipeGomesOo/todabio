import useSampleList from "@/hooks/useSampleList";
import SampleCard from "@/components/map/sampleCard";

export default function Home() {
  const { sampleList } = useSampleList();
  return (
    <>
      <div className="w-full flex-col gap-6 flex py-4">
        <h2 className="text-base font-bold font-sans">Biodiversity Samples</h2>
        <div className="flex flex-col gap-4">
          {sampleList.map(
            (sample: RegularSample | ControlSample, index: number) => (
              <SampleCard sample={sample} />
            )
          )}
        </div>
      </div>
    </>
  );
}
