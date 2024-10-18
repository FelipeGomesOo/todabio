"use client";
import { Table, TableBody } from "@/components/ui/table";
import BioRow from "@/components/map/BioRow";
import { pipelineURL } from "@/lib/utils";

export default function BetaDetails({
  analysis,
}: {
  analysis: BetaMarkerAnalysis;
}) {
  const {
    Marker,
    Type,
    DAPC_SVG_compoplot_URL,
    DAPC_SVG_predefined_URL,
    CSV_diversity_URL,
    PCA_SVG_screeplot_URL,
    PCA_SVG_URL,
    PCoA_SVG_URL,
    Rarefaction_curve_SVG_URL,
    DAPC_CSV_eigenvalues_URL,
    DAPC_CSV_ind_coords_URL,
    DAPC_CSV_probabilities_URL,
    PCA_CSV_eigenvalues_URL,
    PCA_CSV_ind_coords_URL,
    PCoA_CSV_anosim_stats_URL,
    PCoA_CSV_ind_coords_URL,
    CSV_Perc_p_values_URL,

    SHA256_DAPC_compoplot,
    SHA256_DAPC_SVG_predefined,
    SHA256_CSV_diversity,
    SHA256_DAPC_ind_coords,
    SHA256_PCA_SVG_screeplot,
    SHA256_PCA_SVG,
    SHA256_PCoA_SVG,
    SHA256_Rarefaction_curve_SVG,
    SHA256_DAPC_CSV_eigenvalues,
    SHA256_DAPC_CSV_probabilities,
    SHA256_PCA_CSV_eigenvalues,
    SHA256_PCA_CSV_ind_coords,
    SHA256_PCoA_CSV_anosim_stats,
    SHA256_PCoA_CSV_ind_coords,
    SHA256_CSV_Perc_p_values,

    DB_Version,
    Pipeline_02_Version,
  } = analysis;

  return (
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
          obj={Type}
          badgeContent={Type}
        />
        <BioRow
          label="DAPC Compo Plot"
          url={DAPC_SVG_compoplot_URL}
          type={"dialogbox"}
          obj={DAPC_SVG_compoplot_URL}
          badgeContent="Open"
        />

        <BioRow
          label="DAPC SVG Predefined"
          url={DAPC_SVG_predefined_URL}
          type={"dialogbox"}
          obj={DAPC_SVG_predefined_URL}
          badgeContent="Open"
        />

        <BioRow
          label="CSV Diversity"
          url={CSV_diversity_URL}
          type={"dialogbox"}
          obj={CSV_diversity_URL}
          badgeContent="Open"
        />

        <BioRow
          label="PCA SVG Screeplot"
          url={PCA_SVG_screeplot_URL}
          type={"dialogbox"}
          obj={PCA_SVG_screeplot_URL}
          badgeContent="Open"
        />

        <BioRow
          label="PCA SVG"
          url={PCA_SVG_URL}
          type={"dialogbox"}
          obj={PCA_SVG_URL}
          badgeContent="Open"
        />

        <BioRow
          label="PCoA SVG"
          url={PCoA_SVG_URL}
          type={"dialogbox"}
          obj={PCoA_SVG_URL}
          badgeContent="Open"
        />
        <BioRow
          label="Rarefaction curve"
          url={Rarefaction_curve_SVG_URL}
          type={"dialogbox"}
          obj={Rarefaction_curve_SVG_URL}
          badgeContent="Open"
        />
        <BioRow
          label="DAPC CSV Eigenvalues"
          type={"url"}
          url={DAPC_CSV_eigenvalues_URL}
          obj={DAPC_CSV_eigenvalues_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="DAPC CSV Ind Coordinates"
          type={"url"}
          url={DAPC_CSV_ind_coords_URL}
          obj={DAPC_CSV_ind_coords_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="DAPC CSV Probabilities"
          type={"url"}
          url={DAPC_CSV_probabilities_URL}
          obj={DAPC_CSV_probabilities_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCA CSV Eigenvalues"
          type={"url"}
          url={PCA_CSV_eigenvalues_URL}
          obj={PCA_CSV_eigenvalues_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCA CSV Ind Coordinates"
          type={"url"}
          url={PCA_CSV_ind_coords_URL}
          obj={PCA_CSV_ind_coords_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCoA CSV Anosim Stats"
          type={"url"}
          url={PCoA_CSV_anosim_stats_URL}
          obj={PCoA_CSV_anosim_stats_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCoA CSV Ind Coordinates"
          type={"url"}
          url={PCoA_CSV_ind_coords_URL}
          obj={PCoA_CSV_ind_coords_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="CSV Perc P Values"
          type={"url"}
          url={CSV_Perc_p_values_URL}
          obj={CSV_Perc_p_values_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="SHA256 DAPC compoplot"
          type={"sha256"}
          obj={SHA256_DAPC_compoplot}
          badgeContent={SHA256_DAPC_compoplot}
        />

        <BioRow
          label="SHA256 DAPC SVG Predefined"
          type={"sha256"}
          obj={SHA256_DAPC_SVG_predefined}
          badgeContent={SHA256_DAPC_SVG_predefined}
        />

        <BioRow
          label="SHA256 CSV Diversity"
          type={"sha256"}
          obj={SHA256_CSV_diversity}
          badgeContent={SHA256_CSV_diversity}
        />

        <BioRow
          label="SHA256 DAPC Ind Coordinates"
          type={"sha256"}
          obj={SHA256_DAPC_ind_coords}
          badgeContent={SHA256_DAPC_ind_coords}
        />

        <BioRow
          label="SHA256 PCA SVG Screeplot"
          type={"sha256"}
          obj={SHA256_PCA_SVG_screeplot}
          badgeContent={SHA256_PCA_SVG_screeplot}
        />

        <BioRow
          label="SHA256 PCA SVG"
          type={"sha256"}
          obj={SHA256_PCA_SVG}
          badgeContent={SHA256_PCA_SVG}
        />

        <BioRow
          label="SHA256 PCoA SVG"
          type={"sha256"}
          obj={SHA256_PCoA_SVG}
          badgeContent={SHA256_PCoA_SVG}
        />

        <BioRow
          label="SHA256 Rarefaction Curve SVG"
          type={"sha256"}
          obj={SHA256_Rarefaction_curve_SVG}
          badgeContent={SHA256_Rarefaction_curve_SVG}
        />

        <BioRow
          label="SHA256 DAPC CSV Eigenvalues"
          type={"sha256"}
          obj={SHA256_DAPC_CSV_eigenvalues}
          badgeContent={SHA256_DAPC_CSV_eigenvalues}
        />

        <BioRow
          label="SHA256 DAPC CSV Probabilities"
          type={"sha256"}
          obj={SHA256_DAPC_CSV_probabilities}
          badgeContent={SHA256_DAPC_CSV_probabilities}
        />

        <BioRow
          label="SHA256 PCA CSV Eigenvalues"
          type={"sha256"}
          obj={SHA256_PCA_CSV_eigenvalues}
          badgeContent={SHA256_PCA_CSV_eigenvalues}
        />

        <BioRow
          label="SHA256 PCA CSV Ind Coordinates"
          type={"sha256"}
          obj={SHA256_PCA_CSV_ind_coords}
          badgeContent={SHA256_PCA_CSV_ind_coords}
        />

        <BioRow
          label="SHA256 PCoA CSV Anosim Stats"
          type={"sha256"}
          obj={SHA256_PCoA_CSV_anosim_stats}
          badgeContent={SHA256_PCoA_CSV_anosim_stats}
        />

        <BioRow
          label="SHA256 PCoA CSV Ind Coordinates"
          type={"sha256"}
          obj={SHA256_PCoA_CSV_ind_coords}
          badgeContent={SHA256_PCoA_CSV_ind_coords}
        />

        <BioRow
          label="SHA256 CSV Perc P Values"
          type={"sha256"}
          obj={SHA256_CSV_Perc_p_values}
          badgeContent={SHA256_CSV_Perc_p_values}
        />

        <BioRow
          label="Pipeline"
          type={"url"}
          url={pipelineURL["02"]}
          obj={Pipeline_02_Version}
          badgeContent={Pipeline_02_Version}
        />
        <BioRow
          label="Database"
          type={"badge"}
          obj={DB_Version}
          badgeContent={DB_Version || "NA"}
        />
      </TableBody>
    </Table>
  );
}
