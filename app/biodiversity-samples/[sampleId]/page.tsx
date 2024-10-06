import useSampleList from "@/hooks/useSampleList";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import SampleMarkersTabs from "@/components/map/SampleMarkersTabs";
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

  const locationString = `${location.lat},${location.lng}`;

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
          <h2 className="text-base font-bold font-sans">{hashId}</h2>
          <p className="text-base text-primary/70">Biodiversity Sample</p>
        </div>

        <Table className="border-t ">
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
      </header>
      <SampleMarkersTabs Sample_Markers={Sample_Markers} />
    </div>
  );
}
