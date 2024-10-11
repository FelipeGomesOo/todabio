"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function StudyCard({
  id,
  samples,
  name,
  description,
}: {
  id: string;
  samples: number;
  name: string;
  description: string;
}) {
  return (
    <Link
      href={`/verifiable-biodiversity/analyses/${id}`}
      className="p-3.5 w-full min-w-[17rem] bg-white rounded-[5px] border   hover:shadow-md cursor-pointer transition-all flex flex-col gap-4"
    >
      <header>
        <h4 className="text-sm font-bold">{name}</h4>
        <small className="text-sm text-primary/70">{description}</small>
      </header>
      <div className="justify-start items-start gap-1 flex flex-wrap">
        <Badge variant="secondary">{samples} Samples</Badge>
        <Badge variant="secondary">DAPC</Badge>
        <Badge variant="secondary">PCoA</Badge>
      </div>
    </Link>
  );
}
