type Props = {};

export default function MapSubtitles({}: Props) {
  return (
    <div className="absolute bottom-6 right-4 p-4 bg-white rounded-md flex-col justify-start items-start inline-flex">
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-lightGreen rounded-full"></div>
        <h5 className="text-xs">Acre</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-darkGreen rounded-full"></div>
        <h5 className="text-xs">Jupiá</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-cyan rounded-full"></div>
        <h5 className="text-xs">Rosana</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-blue rounded-full"></div>
        <h5 className="text-xs">"Três Irmãos"</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-purple rounded-full"></div>
        <h5 className="text-xs">Guadalupe</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-pink rounded-full"></div>
        <h5 className="text-xs">Bom Jardim</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-red rounded-full"></div>
        <h5 className="text-xs">Florença</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-orange rounded-full"></div>
        <h5 className="text-xs">Madureira</h5>
      </div>
      <div className="items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-chart-yellow rounded-full"></div>
        <h5 className="text-xs">Pirajá</h5>
      </div>
    </div>
  );
}
