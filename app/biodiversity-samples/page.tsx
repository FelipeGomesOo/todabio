import sampleList from "@/lib/locations";
import SampleCard from "@/components/ui/sampleCard";

export default function Home() {
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
