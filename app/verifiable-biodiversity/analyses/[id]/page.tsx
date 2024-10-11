import { Table, TableBody } from "@/components/ui/table";
import Image from "next/image";
import analisysList from "@/lib/analisys";
import BioRow from "@/components/map/BioRow";
import { ReaderIcon } from "@radix-ui/react-icons";

export default function AnalisysPage({ params }: { params: { id: any } }) {
  const analisysData = analisysList.find(
    (analisys) => analisys.id === params.id
  );

  if (!analisysData) {
    return <div>Analisys Data not found</div>;
  }
  const {
    id,
    Title,
    Description,
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
    SHA256_PCA_SVG_SCREEPLOT,
    PCoA_CSV_IND_COORD_URL,
    PCA_SVG_SCREEPLOT_URL,
    Analysis_Type,
  } = analisysData;

  return (
    <div className="w-full overflow-hidden flex-col gap-8 flex items-start justify-start py-4">
      <header className="gap-4 w-full flex flex-col items-start justify-start">
        <div className="w-16 h-16 bg-secondary border-primary border-2 rounded-[90px] flex items-center justify-center ">
          <ReaderIcon className="h-10 w-10" />
        </div>
        <div className=" flex-col gap-0 inline-flex">
          <h2 className="text-base font-bold font-sans">{Title}</h2>
          <p className="text-base text-primary/70">{Description}</p>
        </div>

        <Table className="border-t">
          <TableBody>
            <BioRow
              label="Marker"
              type={"badge"}
              obj={Marker}
              badgeContent={Marker}
            />
            <BioRow
              label="Analysis Type"
              type={"badge"}
              obj={Analysis_Type}
              badgeContent={Analysis_Type}
            />
            <BioRow
              label="DAPC Compo Plot"
              url={DAPC_SVG_compoplot_URL}
              type={"dialogbox"}
              obj={DAPC_SVG_compoplot_URL}
              badgeContent="Open"
            />
            <BioRow
              label="DAPC Scatter Plot"
              type={"dialogbox"}
              url={DAPC_SVG_scatterplot_URL}
              obj={DAPC_SVG_scatterplot_URL}
              badgeContent="Open"
            />
            <BioRow
              label="PCA"
              type={"dialogbox"}
              url={PCA_SVG_URL}
              obj={PCA_SVG_URL}
              badgeContent="Open"
            />
            <BioRow
              label="PCoA"
              type={"dialogbox"}
              url={PCoA_SVG_URL}
              obj={PCoA_SVG_URL}
              badgeContent="Open"
            />
            <BioRow
              label="PCA SCREEPLOT"
              type={"dialogbox"}
              url={PCA_SVG_SCREEPLOT_URL}
              obj={PCA_SVG_SCREEPLOT_URL}
              badgeContent={"Open"}
            />
            <BioRow
              label="FASTA OTU"
              type={"url"}
              url={FASTA_OTU_URL}
              obj={FASTA_OTU_URL}
              badgeContent="Open"
            />
            <BioRow
              label="Pipeline"
              type={"badge"}
              obj={Pipeline_Version}
              badgeContent={Pipeline_Version || "NA"}
            />

            <BioRow
              label="SHA256 DAPC compoplot"
              type={"sha256"}
              obj={SHA256_DAPC_compoplot}
              badgeContent={SHA256_DAPC_compoplot || "NA"}
            />

            <BioRow
              label="SHA256 DAPC Scatterplot"
              type={"sha256"}
              obj={SHA256_DAPC_scatterplot}
              badgeContent={SHA256_DAPC_scatterplot || "NA"}
            />
            <BioRow
              label="SHA256 PCA"
              type={"sha256"}
              obj={SHA256_PCA_SVG}
              badgeContent={SHA256_PCA_SVG || "NA"}
            />
            <BioRow
              label="SHA256 PCoA"
              type={"sha256"}
              obj={SHA256_PCoA_SVG}
              badgeContent={SHA256_PCoA_SVG || "NA"}
            />
            <BioRow
              label="SHA256 FASTA OTU"
              type={"sha256"}
              obj={SHA256_FASTA_OTU}
              badgeContent={SHA256_FASTA_OTU || "NA"}
            />
            <BioRow
              label="Pipeline 02"
              type={"badge"}
              obj={Pipeline_02_Version}
              badgeContent={Pipeline_02_Version || "NA"}
            />
            <BioRow
              label="Database"
              type={"badge"}
              obj={DB_Version}
              badgeContent={DB_Version || "NA"}
            />
          </TableBody>
        </Table>
      </header>
    </div>
  );
}
