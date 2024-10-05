import { groupColors, getValuesWithNormalization } from "@/lib/utils";
export default function GroupChart({ marker }: { marker: SampleMarker }) {
  const data = getValuesWithNormalization(marker.DAPC);
  return (
    <div className="self-stretch border-t border-[#cccccc] flex-col justify-start items-start flex">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="self-stretch py-1 border-b border-[#cccccc] justify-start items-center gap-2 inline-flex"
        >
          <div className="w-[7rem] self-stretch ">{key}</div>
          <div className="grow flex gap-2 items-center">
            <div
              style={{ background: `${groupColors[key].color}` }}
              className={`w-2.5 h-2.5 rounded-full shadow border border-white`}
            ></div>
            <div
              style={{ width: `${value[1]}%` }}
              className={`w-[${value[1]}%] h-2 relative bg-[#ababab] rounded-full transition-all`}
            ></div>
          </div>
          <div className="w-[50px] h-5 text-right">{value[0]}%</div>
        </div>
      ))}
    </div>
  );
}
