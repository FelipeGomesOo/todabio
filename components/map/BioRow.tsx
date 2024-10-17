"use client";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import { copyToClipboard } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface AnalysisRowProps {
  label: string;
  url?: string | null;
  sha256?: string;
  badgeContent: string | number | null | undefined;
  type: "url" | "sha256" | "badge" | "dialogbox";
  obj?: any;
}
export default function BioRow({
  label,
  url,
  badgeContent,
  type,
  obj,
}: AnalysisRowProps) {
  if (obj === undefined || obj === null) {
    return null;
  }
  return (
    <TableRow>
      <TableCell>{label}</TableCell>
      <TableCell className="text-right">
        {type === "url" && url && (
          <Link href={url} className={badgeVariants({ variant: "secondary" })}>
            {badgeContent} <ArrowTopRightIcon className="h-4 w-4" />
          </Link>
        )}
        {type === "dialogbox" && url && (
          <Dialog>
            <DialogTrigger asChild>
              <Badge variant="secondary" className="cursor-pointer">
                {badgeContent}
                <ArrowTopRightIcon className="h-4 w-4" />
              </Badge>
            </DialogTrigger>
            <DialogContent className="w-[900] max-w-[900]">
              <DialogHeader>
                <DialogTitle>{label}</DialogTitle>
              </DialogHeader>
              <Image src={url} alt="Cylinder icon" width={900} height={400} />
            </DialogContent>
          </Dialog>
        )}
        {type === "sha256" && typeof badgeContent === "string" && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant="secondary"
                  onClick={() => copyToClipboard(badgeContent)}
                  className="cursor-pointer"
                >
                  <p className="text-ellipsis w-44 overflow-hidden">
                    {badgeContent}
                  </p>
                  <CopyIcon className="h-4 w-4" />
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {type === "badge" && <Badge variant="secondary">{badgeContent}</Badge>}
      </TableCell>
    </TableRow>
  );
}
