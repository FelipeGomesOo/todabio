import { groupColors, getValuesWithNormalization } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
export default function GroupChart({
  SampleMarker,
}: {
  SampleMarker: SampleMarker;
}) {
  const data = getValuesWithNormalization(SampleMarker.DAPC);
  return (
    <>
      <section className="inline-flex flex-col gap-4">
        <h3 className="text-sm font-bold font-sans flex  justify-between w-full items-center">
          Sample Origin - DAPC
          <Badge variant="secondary">{SampleMarker.Marker} </Badge>
        </h3>
        <Table className="border-t">
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="w-[25%]">{key}</TableCell>
                <TableCell className="w-[65%]">
                  <div className="grow flex gap-2 items-center">
                    <div
                      style={{ background: `${groupColors[key].color}` }}
                      className={`w-2.5 h-2.5 rounded-full shadow border border-white`}
                    ></div>
                    <div
                      style={{ width: `${value[1]}%` }}
                      className={`w-[${value[1]}%] h-1 relative bg-primary/60 rounded-full transition-all`}
                    ></div>
                  </div>
                </TableCell>
                <TableCell className="w-[10%] text-right text-xs">
                  {" "}
                  {value[0]}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-xs">
          We use DAPC to verify this sample's origin. Each color represents its
          likelihood of belonging to one of the analyzed groups.
        </p>
      </section>
    </>
  );
}
