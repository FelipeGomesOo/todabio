import { Badge, badgeVariants } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import analisysList from "@/lib/analisys";

interface AnalysisRowProps {
  label: string;
  url?: string;
  sha256?: string;
  badgeContent?: string;
  type: "url" | "sha256" | "badge";
  obj?: any;
}
function AnalysisRow({
  label,
  url,
  sha256,
  badgeContent,
  type,
  obj,
}: AnalysisRowProps) {
  if (obj === undefined) {
    return null; // Não renderiza nada se não houver conteúdo
  }
  return (
    <TableRow>
      <TableCell>{label}</TableCell>
      <TableCell className="text-right">
        {type === "url" && url && (
          <Link href={url} className={badgeVariants({ variant: "secondary" })}>
            {badgeContent}
            <ArrowTopRightIcon className="h-4 w-4" />
          </Link>
        )}
        {type === "sha256" && (
          <Link href="/" className={badgeVariants({ variant: "secondary" })}>
            <p className="text-ellipsis w-44 overflow-hidden">{badgeContent}</p>
            <CopyIcon className="h-4 w-4" />
          </Link>
        )}
        {type === "badge" && <Badge variant="secondary">{badgeContent}</Badge>}
      </TableCell>
    </TableRow>
  );
}

export default function AnalisysPage({ params }: { params: { id: any } }) {
  const analisysData = analisysList.find(
    (analisys) => analisys.id === params.id
  );

  if (!analisysData) {
    return <div>Analisys Data not found</div>;
  }
  const {
    id,
    name,
    description,
    Samples_Names,
    DAPC_SVG_compoplot_URL,
    DAPC_SVG_scatterplot_URL,
    PCA_SVG_URL,
    PCoA_SVG_URL,
    FASTA_OTU_URL,
    Pipeline_Version,
    SHA256_DAPC_compoplot,
    SHA256_DAPC_scatterplot,
    SHA256_PCA_SVG,
    SHA256_PCoA_SVG,
    SHA256_FASTA_OTU,
    Pipeline_02_Version,
    DB_Version,
    Marker,
  } = analisysData;

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
        <div className=" flex-col gap-0 inline-flex">
          <h2 className="text-base font-bold font-sans">{name}</h2>
          <p className="text-base text-primary/70">{description}</p>
        </div>

        <Table className="border-t ">
          <TableBody>
            <AnalysisRow
              label="Marker"
              type={"badge"}
              obj={Marker}
              badgeContent={Marker}
            />
            <AnalysisRow
              label="DAPC SVG Compo Plot"
              url={DAPC_SVG_compoplot_URL}
              type={"url"}
              obj={DAPC_SVG_compoplot_URL}
              badgeContent="Open"
            />
            <AnalysisRow
              label="DAPC SVG Scatter Plot"
              type={"url"}
              url={DAPC_SVG_scatterplot_URL}
              obj={DAPC_SVG_scatterplot_URL}
              badgeContent="Open"
            />
            <AnalysisRow
              label="PCA_SVG_URL"
              type={"url"}
              url={PCA_SVG_URL}
              obj={PCA_SVG_URL}
              badgeContent="Open"
            />
            <AnalysisRow
              label="PCoA_SVG_URL"
              type={"url"}
              url={PCoA_SVG_URL}
              obj={PCoA_SVG_URL}
              badgeContent="Open"
            />
            <AnalysisRow
              label="FASTA_OTU_URL"
              type={"url"}
              url={FASTA_OTU_URL}
              obj={FASTA_OTU_URL}
              badgeContent="Open"
            />
            <AnalysisRow
              label="Pipeline_Version"
              type={"badge"}
              obj={Pipeline_Version}
              badgeContent={Pipeline_Version}
            />

            <AnalysisRow
              label="SHA256_DAPC_compoplot"
              type={"sha256"}
              obj={SHA256_DAPC_compoplot}
              badgeContent={SHA256_DAPC_compoplot}
            />

            <AnalysisRow
              label="SHA256_DAPC_scatterplot"
              type={"sha256"}
              obj={SHA256_DAPC_scatterplot}
              badgeContent={SHA256_DAPC_scatterplot}
            />
            <AnalysisRow
              label="SHA256_PCA_SVG"
              type={"sha256"}
              obj={SHA256_PCA_SVG}
              badgeContent={SHA256_PCA_SVG}
            />
            <AnalysisRow
              label="SHA256_PCoA_SVG"
              type={"sha256"}
              obj={SHA256_PCoA_SVG}
              badgeContent={SHA256_PCoA_SVG}
            />
            <AnalysisRow
              label="SHA256_FASTA_OTU"
              type={"sha256"}
              obj={SHA256_FASTA_OTU}
              badgeContent={SHA256_FASTA_OTU}
            />
            <AnalysisRow
              label="Pipeline_02_Version"
              type={"badge"}
              obj={Pipeline_02_Version}
              badgeContent={Pipeline_02_Version}
            />
            <AnalysisRow
              label="DB_Version"
              type={"badge"}
              obj={DB_Version}
              badgeContent={DB_Version}
            />
          </TableBody>
        </Table>
      </header>
    </div>
  );
}
