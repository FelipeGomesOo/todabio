import { groupColors } from "@/lib/utils";

export default function Point({ grouping }: { grouping: string | undefined }) {
  const isGrouped = typeof grouping === "string";
  const bg = isGrouped ? groupColors[grouping].color : "black";

  return (
    <div
      style={{ background: bg }}
      className={`relative rounded-full w-3 h-3 flex items-center justify-center hover:scale-150 transition-all`}
      onClick={() => console.log("click")}
    >
      <div
        style={{ background: bg }}
        className={`w-10 h-10 absolute opacity-25 rounded-full`}
      >
        &nbsp;
      </div>
    </div>
  );
}
