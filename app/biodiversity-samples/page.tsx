import useSampleList from "@/hooks/useSampleList";
import SampleCard from "@/components/ui/sampleCard";

export default function Home() {
  const sampleList = useSampleList();
  return (
    <>
      <div className=" w-full flex-col gap-9 flex">
        <h2 className="text-xl fontsampleList-bold mb-4">Samples</h2>
        <div className="flex flex-col gap-4">
          {sampleList.map((sample: Sample, index: number) => (
            <SampleCard sample={sample} />
          ))}
        </div>
      </div>
    </>
  );
}
