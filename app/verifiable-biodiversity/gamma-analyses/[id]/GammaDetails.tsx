"use client";
import { Table, TableBody } from "@/components/ui/table";
import BioRow from "@/components/map/BioRow";
import { useEffect, useMemo } from "react";

export default function GammaDetails({
  analysis,
}: {
  analysis: GammaMarkerAnalysis;
}) {
  const {
    Marker,
    DAPC_SVG_compoplot_URL,
    DAPC_SVG_predefined_URL,
    PCA_SVG_URL,
    PCA_SVG_screeplot_URL,
    PCoA_SVG_URL,
    Rarefaction_curve_SVG_URL,
    DAPC_CSV_eigenvalues_URL,
    DAPC_CSV_ind_coords_URL,
    DAPC_CSV_probabilities_URL,
    CSV_diversity_URL,
    PCA_CSV_eigenvalues_URL,
    PCA_CSV_ind_coords_URL,
    PCoA_CSV_anosim_stats_URL,
    PCoA_CSV_ind_coords_URL,
    CSV_Perc_p_values_URL,

    SHA256_DAPC_compoplot,
    SHA256_DAPC_CSV_eigenvalues,
    SHA256_DAPC_ind_coords,
    SHA256_DAPC_SVG_predefined,
    SHA256_DAPC_CSV_probabilities,
    SHA256_CSV_diversity,
    SHA256_PCA_CSV_eigenvalues,
    SHA256_PCA_CSV_ind_coords,
    SHA256_PCA_SVG_screeplot,
    SHA256_PCA_SVG,
    SHA256_PCoA_CSV_anosim_stats,
    SHA256_PCoA_CSV_ind_coords,
    SHA256_PCoA_SVG,
    SHA256_CSV_Perc_p_values,
    SHA256_Rarefaction_curve_SVG,

    Pipeline_02_Version,
    DB_Version,
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
          label="DAPC Compoplot"
          type={"dialogbox"}
          url={DAPC_SVG_compoplot_URL}
          obj={DAPC_SVG_compoplot_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="DAPC Predefined"
          type={"dialogbox"}
          url={DAPC_SVG_predefined_URL}
          obj={DAPC_SVG_predefined_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCA SVG"
          type={"dialogbox"}
          url={PCA_SVG_URL}
          obj={PCA_SVG_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCA Screeplot"
          type={"dialogbox"}
          url={PCA_SVG_screeplot_URL}
          obj={PCA_SVG_screeplot_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="PCoA SVG"
          type={"dialogbox"}
          url={PCoA_SVG_URL}
          obj={PCoA_SVG_URL}
          badgeContent={"Open"}
        />

        <BioRow
          label="Rarefaction Curve"
          type={"dialogbox"}
          url={Rarefaction_curve_SVG_URL}
          obj={Rarefaction_curve_SVG_URL}
          badgeContent={"Open"}
        />
        <BioRow
          label="DAPC CSV Eigen values"
          type={"url"}
          url={DAPC_CSV_eigenvalues_URL}
          obj={DAPC_CSV_eigenvalues_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="DAPC CSV Individual Coordinates"
          type={"url"}
          url={DAPC_CSV_ind_coords_URL}
          obj={DAPC_CSV_ind_coords_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="DAPC CSV Probabilities"
          type={"url"}
          url={DAPC_CSV_probabilities_URL}
          obj={DAPC_CSV_probabilities_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="CSV Diversity"
          type={"url"}
          url={CSV_diversity_URL}
          obj={CSV_diversity_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="PCA CSV Eigenvalues"
          type={"url"}
          url={PCA_CSV_eigenvalues_URL}
          obj={PCA_CSV_eigenvalues_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="PCA CSV Individual Coordinates"
          type={"url"}
          url={PCA_CSV_ind_coords_URL}
          obj={PCA_CSV_ind_coords_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="PCoA CSV Anosim Stats"
          type={"url"}
          url={PCoA_CSV_anosim_stats_URL}
          obj={PCoA_CSV_anosim_stats_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="PCoA CSV Individual Coordinates"
          type={"url"}
          url={PCoA_CSV_ind_coords_URL}
          obj={PCoA_CSV_ind_coords_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="CSV Percent P-values"
          type={"url"}
          url={CSV_Perc_p_values_URL}
          obj={CSV_Perc_p_values_URL}
          badgeContent={"Go to file"}
        />

        <BioRow
          label="SHA256 DAPC compoplot"
          type={"sha256"}
          obj={SHA256_DAPC_compoplot}
          badgeContent={SHA256_DAPC_compoplot}
        />

        <BioRow
          label="SHA256 DAPC CSV eigenvalues"
          type={"sha256"}
          obj={SHA256_DAPC_CSV_eigenvalues}
          badgeContent={SHA256_DAPC_CSV_eigenvalues}
        />

        <BioRow
          label="SHA256 DAPC ind coords"
          type={"sha256"}
          obj={SHA256_DAPC_ind_coords}
          badgeContent={SHA256_DAPC_ind_coords}
        />

        <BioRow
          label="SHA256 DAPC SVG predefined"
          type={"sha256"}
          obj={SHA256_DAPC_SVG_predefined}
          badgeContent={SHA256_DAPC_SVG_predefined}
        />

        <BioRow
          label="SHA256 DAPC CSV probabilities"
          type={"sha256"}
          obj={SHA256_DAPC_CSV_probabilities}
          badgeContent={SHA256_DAPC_CSV_probabilities}
        />

        <BioRow
          label="SHA256 CSV diversity"
          type={"sha256"}
          obj={SHA256_CSV_diversity}
          badgeContent={SHA256_CSV_diversity}
        />

        <BioRow
          label="SHA256 PCA CSV eigenvalues"
          type={"sha256"}
          obj={SHA256_PCA_CSV_eigenvalues}
          badgeContent={SHA256_PCA_CSV_eigenvalues}
        />

        <BioRow
          label="SHA256 PCA CSV ind coords"
          type={"sha256"}
          obj={SHA256_PCA_CSV_ind_coords}
          badgeContent={SHA256_PCA_CSV_ind_coords}
        />

        <BioRow
          label="SHA256 PCA SVG screeplot"
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
          label="SHA256 PCoA CSV anosim stats"
          type={"sha256"}
          obj={SHA256_PCoA_CSV_anosim_stats}
          badgeContent={SHA256_PCoA_CSV_anosim_stats}
        />

        <BioRow
          label="SHA256 PCoA CSV ind coords"
          type={"sha256"}
          obj={SHA256_PCoA_CSV_ind_coords}
          badgeContent={SHA256_PCoA_CSV_ind_coords}
        />

        <BioRow
          label="SHA256 PCoA SVG"
          type={"sha256"}
          obj={SHA256_PCoA_SVG}
          badgeContent={SHA256_PCoA_SVG}
        />

        <BioRow
          label="SHA256 CSV Perc p values"
          type={"sha256"}
          obj={SHA256_CSV_Perc_p_values}
          badgeContent={SHA256_CSV_Perc_p_values}
        />

        <BioRow
          label="SHA256 Rarefaction curve SVG"
          type={"sha256"}
          obj={SHA256_Rarefaction_curve_SVG}
          badgeContent={SHA256_Rarefaction_curve_SVG}
        />

        <BioRow
          label="Pipeline 02"
          type={"badge"}
          obj={Pipeline_02_Version}
          badgeContent={Pipeline_02_Version}
        />
        <BioRow
          label="Database"
          type={"badge"}
          obj={DB_Version}
          badgeContent={DB_Version}
        />
      </TableBody>
    </Table>
  );
}
