"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function AnalysisCard({ analysis }: { analysis: Analysis }) {
  const { id, Title, Description, Samples_Names, Marker, Analysis_Type } =
    analysis;
  return (
    <Link
      href={`/verifiable-biodiversity/analyses/${id}`}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border   hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
    >
      <header>
        <h4 className="text-sm font-bold">{Title}</h4>
        <small className="text-sm text-primary/70">{Description}</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        <Badge variant="secondary">{Samples_Names.length} Samples</Badge>
        <Badge variant="secondary">{Marker}</Badge>
        <Badge variant="secondary">{Analysis_Type}</Badge>
      </div>
    </Link>
  );
}
