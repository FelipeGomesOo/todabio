"use client";
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { similarSamples, getMaxGroup } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GroupChart from "@/components/map/GroupChart";
import SimilarProfiles from "./SimilarProfiles";
import Link from "next/link";
import useCurrentGlobalMarker from "@/hooks/useCurrentGlobalMarker";
export default function SampleMarkersTabs({
  Sample_Markers,
}: {
  Sample_Markers: SampleMarker[];
}) {
  const currentGlobalMarker = useCurrentGlobalMarker();

  return (
    <Tabs defaultValue={"12s"} className="w-full">
      <section className="flex items-center justify-between">
        <h3 className="text-sm font-bold font-sans">Sample Markers</h3>
        <TabsList>
          {Sample_Markers.map((SampleMarker, index) => (
            <TabsTrigger key={index} value={SampleMarker.Marker}>
              {SampleMarker.Marker}
            </TabsTrigger>
          ))}
        </TabsList>
      </section>
      {Sample_Markers.map((SampleMarker, index) => (
        <>
          <TabsContent key={index} value={SampleMarker.Marker}>
            <section className="flex flex-col gap-8 ">
              <Table className="border-t">
                <TableBody>
                  <TableRow>
                    <TableCell>FASTQ Files</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Link
                        href={SampleMarker.FASTQ_Forward_URL}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        Forward
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href={SampleMarker.FASTQ_Reverse_URL}
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
                        href={SampleMarker.FASTA_ASV_URL}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        FASTA ASV
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Clean FASTA</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={SampleMarker.Clean_FASTA_ASV_URL}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        Clean FASTA ASV
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FASTA OTU</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={SampleMarker.FASTA_OTU_URL}
                        className={badgeVariants({ variant: "secondary" })}
                      >
                        FASTA OTU
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rarefaction Curve</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={SampleMarker.Rarefaction_Curve_URL}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        Rarefaction Curve
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
                          {SampleMarker.SHA256_FASTQ_Forward}
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
                          {SampleMarker.SHA256_FASTQ_Reverse}
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
                          {SampleMarker.SHA256_FASTA_ASV}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 Clean FASTA</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_Clean_FASTA_ASV}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 FASTA OTU</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_FASTA_OTU}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SHA256 Rarefaction Curve</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={"/"}
                        className={`${badgeVariants({
                          variant: "secondary",
                        })} `}
                      >
                        <p className="text-ellipsis w-44 overflow-hidden">
                          {SampleMarker.SHA256_Rarefaction_Curve}
                        </p>
                        <CopyIcon className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shannon</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">{SampleMarker.Shannon}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Richness</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">{SampleMarker.Riqueza}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pielou</TableCell>
                    <TableCell className="text-right flex gap-1 justify-end">
                      <Badge variant="secondary">{SampleMarker.Equidade}</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/* {SampleMarker.DAPC && (
            <>
              <GroupChart SampleMarker={SampleMarker} />{" "}
              <SimilarProfiles SampleMarker={SampleMarker} />{" "}
            </>
          )} */}

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
        </>
      ))}
    </Tabs>
  );
}
