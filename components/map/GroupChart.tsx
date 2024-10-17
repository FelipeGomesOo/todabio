import {
  groupColors,
  getValuesWithNormalization,
  interpolateColors,
  roundPercentage,
} from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
export default function GroupChart({
  dapc,
  Marker,
}: {
  dapc: DAPC;
  Marker: MarkerType;
}) {
  if (dapc === undefined) {
    throw new Error("dapc is required");
  }
  const data = getValuesWithNormalization(dapc);

  if (dapc?.length === 0) {
    return null;
  }

  const DAPCColors = interpolateColors(dapc.length);

  function groupColor(index: number) {
    return DAPCColors && index >= 0 && index < DAPCColors.length
      ? DAPCColors[index]
      : undefined;
  }

  return (
    <>
      <section className="inline-flex flex-col gap-4">
        <h3 className="text-sm font-bold font-sans flex  justify-between w-full items-center">
          Sample Origin - DAPC
          <Badge variant="secondary">{Marker}</Badge>
        </h3>
        <Table className="border-t">
          <TableBody>
            {Object.entries(data).map(([key, value], index) => (
              <TableRow key={index}>
                <TableCell className="w-[25%]">{key}</TableCell>
                <TableCell className="w-[65%]">
                  <div className="grow flex gap-2 items-center">
                    <div
                      style={{ background: groupColor(index) }}
                      className={`w-2.5 h-2.5 rounded-full shadow border border-white`}
                    ></div>
                    <div
                      style={{ width: `${value[1]}%` }}
                      className={`w-[${value[1]}%] h-1 relative bg-primary/60 rounded-full transition-all`}
                    ></div>
                  </div>
                </TableCell>
                <TableCell className="w-[10%] text-right text-xs">
                  {roundPercentage(value[0])}%
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
