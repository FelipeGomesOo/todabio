"use client";
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { similarSamples, getMaxGroup } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SampleCard from "@/components/map/sampleCard";
import GroupChart from "@/components/map/GroupChart";
import Link from "next/link";
import useCurrentGlobalMarker from "@/hooks/useCurrentGlobalMarker";
import useSampleList from "@/hooks/useSampleList";
export default function SampleMarkersTabs({
  Sample_Markers,
}: {
  Sample_Markers: SampleMarker[];
}) {
  const currentGlobalMarker = useCurrentGlobalMarker();
  const sampleList = useSampleList();
  return (
    <Tabs defaultValue={currentGlobalMarker} className="w-full">
      <section className="flex items-center justify-between">
        <h3 className="text-sm font-bold font-sans">Sample Markers</h3>
        <TabsList>
          {Sample_Markers.map((SampleMarker, index) => (
            <TabsTrigger key={index} value={SampleMarker.Name}>
              {SampleMarker.Name}
            </TabsTrigger>
          ))}
        </TabsList>
      </section>
      {Sample_Markers.map((SampleMarker, index) => (
        <TabsContent key={index} value={SampleMarker.Name}>
          <section className="flex flex-col gap-8 ">
            <Table className="border-t">
              <TableBody>
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
            <section className="inline-flex flex-col gap-4">
              <h3 className="text-sm font-bold font-sans flex  justify-between w-full items-center">
                Sample Origin - DAPC
                <Badge variant="secondary">{SampleMarker.Name} </Badge>
              </h3>
              <GroupChart marker={SampleMarker} />
              <p className="text-xs">
                We use DAPC to verify this sample's origin. Each color
                represents its likelihood of belonging to one of the analyzed
                groups.
              </p>
            </section>
            <section>
              <h3 className="text-sm font-bold font-sans flex  justify-between w-full items-center">
                Similar Biodiversity Profiles
                <Badge variant="secondary">{SampleMarker.Name} </Badge>
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
                        <SampleCard
                          key={index}
                          sample={sample}
                          currentMarker={SampleMarker.Name}
                        />
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
  );
}
