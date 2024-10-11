"use client";
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { similarSamples, getMaxGroup } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BioRow from "@/components/map/BioRow";

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
                  <BioRow
                    label="FASTA"
                    type={"url"}
                    url={SampleMarker.FASTA_ASV_URL}
                    obj={SampleMarker.FASTA_ASV_URL}
                    badgeContent="FASTA ASV"
                  />
                  <BioRow
                    label="Clean FASTA"
                    type={"url"}
                    url={SampleMarker.Clean_FASTA_ASV_URL}
                    obj={SampleMarker.Clean_FASTA_ASV_URL}
                    badgeContent="Clean FASTA ASV"
                  />
                  <BioRow
                    label="FASTA OTU"
                    type={"url"}
                    url={SampleMarker.FASTA_OTU_URL}
                    obj={SampleMarker.FASTA_OTU_URL}
                    badgeContent="FASTA OTU"
                  />
                  <BioRow
                    label="Rarefaction Curve"
                    type={"url"}
                    url={SampleMarker.Rarefaction_Curve_URL}
                    obj={SampleMarker.Rarefaction_Curve_URL}
                    badgeContent="Rarefaction Curve"
                  />
                  <BioRow
                    label="SHA256 Forward"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_FASTQ_Forward}
                    badgeContent={SampleMarker.SHA256_FASTQ_Forward}
                  />
                  <BioRow
                    label="SHA256 Reverse"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_FASTQ_Reverse}
                    badgeContent={SampleMarker.SHA256_FASTQ_Reverse}
                  />
                  <BioRow
                    label="SHA256 FASTA"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_FASTA_ASV}
                    badgeContent={SampleMarker.SHA256_FASTA_ASV}
                  />
                  <BioRow
                    label="SHA256 Clean FASTA"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_Clean_FASTA_ASV}
                    badgeContent={SampleMarker.SHA256_Clean_FASTA_ASV}
                  />
                  <BioRow
                    label="SHA256 FASTA OTU"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_FASTA_OTU}
                    badgeContent={SampleMarker.SHA256_FASTA_OTU}
                  />
                  <BioRow
                    label="SHA256 Rarefaction Curve"
                    type={"sha256"}
                    obj={SampleMarker.SHA256_Rarefaction_Curve}
                    badgeContent={SampleMarker.SHA256_Rarefaction_Curve}
                  />
                  <BioRow
                    label="Shannon"
                    type={"badge"}
                    obj={SampleMarker.Shannon}
                    badgeContent={SampleMarker.Shannon}
                  />
                  <BioRow
                    label="Richness"
                    type={"badge"}
                    obj={SampleMarker.Riqueza}
                    badgeContent={SampleMarker.Riqueza}
                  />
                  <BioRow
                    label="Pielou"
                    type={"badge"}
                    obj={SampleMarker.Equidade}
                    badgeContent={SampleMarker.Equidade}
                  />
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
