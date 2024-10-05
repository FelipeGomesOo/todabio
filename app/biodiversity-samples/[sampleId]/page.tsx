import useSampleList from "@/hooks/useSampleList";
import { Badge } from "@/components/ui/badge";
import { formatDate, currentMarker } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import SampleCard from "@/components/ui/sampleCard";
import Image from "next/image";
import GroupChart from "@/components/map/GroupChart";

export default function BiodiversitySamplePage({
  params,
}: {
  params: { sampleId: Sample["hashId"] };
}) {
  const sampleList = useSampleList();
  const sample = sampleList.find((sample) => sample.hashId === params.sampleId);
  if (!sample) {
    return <div>Sample not found</div>;
  }
  const { hashId, sampleType, Sample_Markers, location, CollectionDate } =
    sample;

  const similaBiodiversitySamples = sampleList;
  //console.log("similaBiodiversitySamples", similaBiodiversitySamples);
  const locationString = `${location.lat},${location.lng}`;

  return (
    <div className="w-full overflow-hidden flex-col gap-9 flex py-4">
      <header className="gap-6 inline-flex items-center">
        <div className="w-16 h-16  bg-white rounded-[90px]">
          <Image
            src="/icons/cylinder.svg"
            alt="Cylinder icon"
            width={75}
            height={75}
          />
        </div>
        <div className="grow ">
          <h2 className="text-xl font-bold">{hashId}</h2>
          <div className="self-stretch justify-start items-start gap-1 inline-flex">
            <div className=" opacity-60">Biodiversity Sample</div>
          </div>
        </div>
      </header>
      <Table className=" border-t border-[#cccccc]  ">
        <TableBody>
          <TableRow>
            <TableCell>Sample Type</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{sampleType}</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Coordinates</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{locationString}</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Molecular markers</TableCell>
            <TableCell className="text-right flex gap-1 justify-end">
              {Object.keys(Sample_Markers).map((marker, index) => (
                <Badge key={index} variant="secondary">
                  {marker}
                </Badge>
              ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date of collection</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{formatDate(CollectionDate)}</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="h-[432px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-28 flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-xl font-normal font-['PT Mono'] leading-loose">
            Sample Origin - DAPC
          </div>
          <div className="self-stretch text-base font-normal font-['PT Mono'] leading-normal">
            We use DAPC to verify this sample's origin. Each color represents
            its likelihood of belonging to one of the analyzed groups.
          </div>
        </div>
        <GroupChart marker={Sample_Markers[currentMarker]} />
      </div>
      <section>
        <h3 className="text-lg font-semibold ">
          Similar biodiversity profiles
        </h3>
        <div className="overflow-auto  w-full">
          <div className="flex gap-2  py-4">
            {similaBiodiversitySamples && (
              <>
                {similaBiodiversitySamples.map(
                  (sample: Sample, index: number) => (
                    <SampleCard key={index} sample={sample} />
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold ">DNA Sequence Files</h3>
        <p className="text-sm font-normal  ">
          Each entry links to an original FASTQ sequencing file, accompanied by
          an F5 file, a SHA-256 hash, geolocation data, and a collection
          timestamp.
        </p>
        <div className="overflow-auto  w-full">
          <div className="flex gap-4  py-4">
            {similaBiodiversitySamples && (
              <>
                {similaBiodiversitySamples.map(
                  (sample: Sample, index: number) => (
                    <div className="w-[164px] p-2 bg-white rounded-[5px] border border-[#cccccc] flex-col justify-start items-start gap-2.5 inline-flex ">
                      <div className="w-[28.80px] h-9 relative">
                        <Image
                          src="/icons/dna-file.svg"
                          alt="Cylinder icon"
                          width={75}
                          height={75}
                        />
                      </div>
                      <div className=" ">
                        <h4 className="w-[155px] text-sm font-semibold  ">
                          DNA Sequence
                        </h4>
                        <p className="opacity-60 text-sm leading-tight">
                          File 03
                        </p>
                      </div>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
