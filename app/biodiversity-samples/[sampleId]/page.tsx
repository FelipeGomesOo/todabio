import { ArrowTopRightIcon, Link1Icon, CopyIcon } from "@radix-ui/react-icons";
import useSampleList from "@/hooks/useSampleList";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  formatDate,
  currentMarker,
  similarSamples,
  getMaxGroup,
} from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SampleCard from "@/components/ui/sampleCard";
import Image from "next/image";
import GroupChart from "@/components/map/GroupChart";
import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";

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
      <Table className="border-t border-[#cccccc]">
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
            <TableCell>Date of collection</TableCell>
            <TableCell className="text-right">
              <Badge variant="secondary">{formatDate(CollectionDate)}</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Tabs defaultValue={Sample_Markers[0].Name} className="w-full">
        <TabsList>
          {Sample_Markers.map((SampleMarker, index) => (
            <TabsTrigger key={index} value={SampleMarker.Name}>
              {SampleMarker.Name}
            </TabsTrigger>
          ))}
        </TabsList>
        {Sample_Markers.map((SampleMarker, index) => (
          <TabsContent key={index} value={SampleMarker.Name}>
            <section className="  flex flex-col  gap-8 ">
              <Table className="border-t border-[#cccccc]">
                <TableBody>
                  <TableRow>
                    <TableCell>Molecular marker</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">{SampleMarker.Name}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>qPCR</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">
                        {SampleMarker.qPCR_nM} nM
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FASTQ ID</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">
                        {SampleMarker.FASTQ_ID_Sequence_Provider}
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FASTQ Files</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Link
                        href={SampleMarker.URL_FASTQ_Forward}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        Forward
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href={SampleMarker.URL_FASTQ_Reverse}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        Reverse
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FASTA</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={SampleMarker.URL_fastaASV}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        FASTA
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pipeline log</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={SampleMarker.Pipeline_Log}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        Pipeline Log
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 Forward</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_Forward}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 Reverse</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_Reverse}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 FASTA</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_fastaASV}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <section className="flex flex-col justify-start items-start gap-4 ">
                <h3 className="text-base leading-loose">
                  Sample Origin - DAPC - {SampleMarker.Name}
                </h3>

                <GroupChart marker={SampleMarker} />
                <p className="text-sm">
                  We use DAPC to verify this sample's origin. Each color
                  represents its likelihood of belonging to one of the analyzed
                  groups.
                </p>
              </section>
              <section>
                <h3 className="text-base font-semibold ">
                  {SampleMarker.Name} Similar biodiversity profiles
                </h3>
                <div className="overflow-auto w-full">
                  <div className="flex gap-2 py-4">
                    {similarSamples(
                      sampleList,
                      SampleMarker.Name,
                      getMaxGroup(SampleMarker.DAPC)
                    ) && (
                      <>
                        {similarSamples(
                          sampleList,
                          SampleMarker.Name,
                          getMaxGroup(SampleMarker.DAPC)
                        ).map((sample: Sample, index: number) => (
                          <SampleCard key={index} sample={sample} />
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </section>
              {/*     <section>
                <h3 className="text-base font-semibold ">DNA Sequence Files</h3>
                <p className="text-sm">
                  Each entry links to an original FASTQ sequencing file,
                  accompanied by an F5 file, a SHA-256 hash, geolocation data,
                  and a collection timestamp.
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
              </section> */}
            </section>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
