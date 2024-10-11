import useSampleList from "@/hooks/useSampleList";
import { formatDate } from "@/lib/utils";
import { Table, TableBody } from "@/components/ui/table";
import Image from "next/image";
import SampleMarkersTabs from "@/components/map/SampleMarkersTabs";
import BioRow from "@/components/map/BioRow";

export default function BiodiversitySamplePage({
  params,
}: {
  params: { sampleId: Sample["Elabjournal_Sample_ID"] };
}) {
  const { sampleList } = useSampleList();
  const sample = sampleList.find(
    (sample) => sample.Elabjournal_Sample_ID === params.sampleId
  );

  if (!sample) {
    return <div>Sample not found</div>;
  }
  const {
    Elabjournal_Sample_ID,
    Matrix,
    Sample_Markers,
    Sample_Latitude,
    Sample_Longitude,
    Timestamp_Sampling,
    FASTQ_ID_Sequence_Provider,
    Pipeline_01_Version,
  } = sample;
  const locationString = `${Sample_Latitude},${Sample_Longitude}`;
  return (
    <div className="w-full overflow-hidden flex-col gap-8 flex items-start justify-start py-4">
      <header className="gap-4 w-full flex flex-col items-start justify-start">
        <div className="w-16 h-16 bg-secondary border-primary border-2 rounded-[90px]">
          <Image
            src="/icons/cylinder.svg"
            alt="Cylinder icon"
            width={75}
            height={75}
          />
        </div>
        <div className=" flex-col gap-0 inline-flex   ">
          <h2 className="text-base font-bold font-sans">
            {Elabjournal_Sample_ID}
          </h2>
          <p className="text-base text-primary/70">Biodiversity Sample</p>
        </div>

        <Table className="border-t ">
          <TableBody>
            <BioRow
              label="Matrix"
              type={"badge"}
              obj={Matrix}
              badgeContent={Matrix}
            />
            <BioRow
              label="Coordinates"
              type={"badge"}
              obj={locationString}
              badgeContent={locationString}
            />
            <BioRow
              label="Longitude"
              type={"badge"}
              obj={Sample_Longitude}
              badgeContent={Sample_Longitude}
            />
            <BioRow
              label="Date of collection"
              type={"badge"}
              obj={Timestamp_Sampling}
              badgeContent={formatDate(Timestamp_Sampling)}
            />
            <BioRow
              label="FASTQ ID"
              type={"badge"}
              obj={Elabjournal_Sample_ID}
              badgeContent={Elabjournal_Sample_ID}
            />
            <BioRow
              label="FASTQ Sequence Provider"
              type={"badge"}
              obj={FASTQ_ID_Sequence_Provider}
              badgeContent={FASTQ_ID_Sequence_Provider}
            />
          </TableBody>
        </Table>
      </header>
      <SampleMarkersTabs Sample_Markers={Sample_Markers} />
    </div>
  );
}
