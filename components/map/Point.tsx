import { groupColors, currentMarker } from "@/lib/utils";

export default function Point({ grouping }: { grouping: string }) {
  return (
    <div
      style={{ background: `${groupColors[grouping].color}` }}
      className={`${groupColors[grouping].bg}  relative rounded-full w-3 h-3 flex items-center justify-center hover:scale-150 transition-all`}
      onClick={() => console.log("click")}
    >
      <div
        style={{ background: `${groupColors[grouping].color}` }}
        className={` ${groupColors[grouping].bg}  w-10 h-10 absolute opacity-25 rounded-full`}
      >
        &nbsp;
      </div>
    </div>
  );
}
