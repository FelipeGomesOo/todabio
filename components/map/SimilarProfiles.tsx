/* import SampleCard from "@/components/map/cards/sampleCard";
import { similarSamples, getMaxGroup } from "@/lib/utils";
import { Badge } from "lucide-react"; */
export default function SimilarProfiles(/* {
  SampleMarker,
}: {
  SampleMarker: SampleMarker;
} */) {
  return (
    <section>
      {/* <h3 className="text-sm font-bold font-sans flex  justify-between w-full items-center">
        Similar Biodiversity Profiles
        <Badge variant="secondary">{SampleMarker.Marker} </Badge>
      </h3>
      <div className="overflow-auto w-full">
        <div className="flex gap-2 py-4">
          {similarSamples(
            sampleList,
            SampleMarker.Marker,
            getMaxGroup(SampleMarker.DAPC)
          ) && (
            <>
              {similarSamples(
                sampleList,
                SampleMarker.Marker,
                getMaxGroup(SampleMarker.DAPC)
              ).map((sample: Sample, index: number) => (
                <SampleCard
                  key={index}
                  sample={sample}
                  currentMarker={SampleMarker.Marker}
                />
              ))}
            </>
          )}
        </div>
      </div> */}
    </section>
  );
}
