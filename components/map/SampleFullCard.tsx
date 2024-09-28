"use client";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMap } from "@vis.gl/react-google-maps";
import SampleCard from "@/components/ui/sampleCard";
import Image from "next/image";
export default function SampleFullCard({
  sample,
  sampleList,
}: {
  sample: Sample;
  sampleList: Sample[];
}) {
  const {
    hashId,
    sampleType,
    DNASequenceFiles,
    MolecularMarkers,
    location,
    CollectionDate,
  } = sample;
  const map = useMap();
  const handleClick = (location: Sample["location"], id: Sample["hashId"]) => {
    if (!location) return;
    console.log("Sample card clicado:", location.toString());
    map?.panTo(location);
  };
  const similaBiodiversitySamples = sampleList;
  console.log("similaBiodiversitySamples", similaBiodiversitySamples);
  const locationString = `${location.lat},${location.lng}`;

  return (
    <div className="w-full overflow-hidden flex-col gap-9 flex ">
      <header className="gap-8 inline-flex items-center">
        <div className="w-[75px] h-[75px]  bg-white rounded-[90px]">
          <Image
            src="/icons/cylinder.svg"
            alt="Cylinder icon"
            width={75}
            height={75}
          />
        </div>
        <div className="grow shrink basis-0 ">
          <h2 className="text-2xl">Biodiversity Sample</h2>
          <div className="self-stretch justify-start items-start gap-1 inline-flex">
            <strong className="opacity-60 text-base ">Hash ID</strong>
            <div className=" opacity-60 text-base ">
              654ggr75413ba5698fg654...
            </div>
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
            <TableCell>DNA Files</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{DNASequenceFiles.length}</Badge>
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
            <TableCell className="text-right">
              {MolecularMarkers.map((marker, index) => (
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
      <section>
        <h3 className="text-2xl font-semibold ">
          Similar biodiversity profiles
        </h3>
        <div className="overflow-auto  w-full">
          <div className="flex gap-2  py-4">
            {similaBiodiversitySamples && (
              <>
                {similaBiodiversitySamples.map(
                  (sample: Sample, index: number) => (
                    <SampleCard
                      key={index}
                      sample={sample}
                      handleSampleClick={handleClick}
                    />
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-semibold ">DNA Sequence Files</h3>
        <div className="self-stretch text-base font-normal  ">
          Each entry links to an original FASTQ sequencing file, accompanied by
          an F5 file, a SHA-256 hash, geolocation data, and a collection
          timestamp.
        </div>
        <div className="overflow-auto  w-full">
          <div className="flex gap-4  py-4">
            {similaBiodiversitySamples && (
              <>
                {similaBiodiversitySamples.map(
                  (sample: Sample, index: number) => (
                    <div className="w-[164px] p-2 bg-white rounded-[5px] border border-[#cccccc] flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="w-[28.80px] h-9 relative"></div>
                      <div className="self-stretch h-12 flex-col justify-start items-start flex">
                        <div className="w-[155px] text-base font-semibold  ">
                          DNA Sequence
                        </div>
                        <div className="self-stretch opacity-60 text-sm font-normal  leading-tight">
                          File 03
                        </div>
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
