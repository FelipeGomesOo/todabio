type Sample = {
  "Depth_(m)": number | null | string;
  Matrix: string;
  Elabjournal_Sample_ID: string;
  FASTQ_ID_Sequence_Provider: string;
  Pipeline_01_Version: string;
  Sample_Markers: SampleMarker[];
  dapc?: DAPC;
  Sample_Latitude: number | null;
  Sample_Longitude: number | null;
  Geohash: string | null;
  Timestamp_Sampling: string | null;
};

type MarkerType =
  | "All Markers"
  | "12S"
  | "12S-Vert"
  | "16S"
  | "16S-mam"
  | "18S"
  | "COI"
  | "ITS1"
  | "ITS2"
  | "rbcL"
  | "matK"
  | "trnL"
  | "Other";

type SampleMarker = {
  Marker: MarkerType;
  FASTQ_Forward_URL: string;
  FASTQ_Reverse_URL: string;
  FASTA_ASV_URL: string;
  Clean_FASTA_ASV_URL: string;
  FASTA_OTU_URL: string;
  Rarefaction_Curve_URL: string;
  SHA256_FASTQ_Forward: string;
  SHA256_FASTQ_Reverse: string;
  SHA256_FASTA_ASV: string;
  SHA256_Clean_FASTA_ASV: string;
  SHA256_FASTA_OTU: string;
  SHA256_Rarefaction_Curve: string;
  Shannon: number;
  Riqueza: number;
  Equidade: number;
};
type DAPC = Array<{ [key: string]: number }> | undefined;

type BetaAnalysis = {
  ID: string;
  Title: string;
  Description: string;
  BetaMarkers: BetaMarkerAnalysis[];
  Gamma: GammaAnalysis["ID"];
};
type BetaMarkerAnalysis = {
  Marker: MarkerType;
  Samples_Names: string[];
  Type: string;

  DAPC_SVG_compoplot_URL?: string | null;
  DAPC_SVG_predefined_URL?: string | null;
  CSV_diversity_URL?: string | null;
  PCA_SVG_screeplot_URL?: string | null;
  PCA_SVG_URL?: string | null;
  PCoA_SVG_URL?: string | null;
  Rarefaction_curve_SVG_URL?: string | null;
  DAPC_CSV_eigenvalues_URL?: string | null;
  DAPC_CSV_ind_coords_URL?: string | null;
  DAPC_CSV_probabilities_URL?: string | null;
  PCA_CSV_eigenvalues_URL?: string | null;
  PCA_CSV_ind_coords_URL?: string | null;
  PCoA_CSV_anosim_stats_URL?: string | null;
  PCoA_CSV_ind_coords_URL?: string | null;
  CSV_Perc_p_values_URL?: string | null;

  SHA256_DAPC_compoplot?: string | null;
  SHA256_DAPC_SVG_predefined?: string | null;
  SHA256_CSV_diversity?: string | null;
  SHA256_DAPC_ind_coords?: string | null;
  SHA256_PCA_SVG_screeplot?: string | null;
  SHA256_PCA_SVG?: string | null;
  SHA256_PCoA_SVG?: string | null;
  SHA256_Rarefaction_curve_SVG?: string | null;
  SHA256_DAPC_CSV_eigenvalues?: string | null;
  SHA256_DAPC_CSV_probabilities?: string | null;
  SHA256_PCA_CSV_eigenvalues?: string | null;
  SHA256_PCA_CSV_ind_coords?: string | null;
  SHA256_PCoA_CSV_anosim_stats?: string | null;
  SHA256_PCoA_CSV_ind_coords?: string | null;
  SHA256_CSV_Perc_p_values?: string | null;

  DB_Version?: string | null;
  Pipeline_02_Version?: string | null;
};

type GammaAnalysis = {
  ID: string;
  GammaMarkers: GammaMarkerAnalysis[];
};
type GammaMarkerAnalysis = {
  Marker: MarkerType;
  Samples_Names: string[];
  Type: string;
  DAPC_SVG_compoplot_URL?: string | null;
  DAPC_SVG_predefined_URL?: string | null;
  PCA_SVG_URL?: string | null;
  PCA_SVG_screeplot_URL?: string | null;
  PCoA_SVG_URL?: string | null;
  Rarefaction_curve_SVG_URL?: string | null;
  DAPC_CSV_eigenvalues_URL?: string | null;
  DAPC_CSV_ind_coords_URL?: string | null;
  DAPC_CSV_probabilities_URL?: string | null;
  CSV_diversity_URL?: string | null;
  PCA_CSV_eigenvalues_URL?: string | null;
  PCA_CSV_ind_coords_URL?: string | null;
  PCoA_CSV_anosim_stats_URL?: string | null;
  PCoA_CSV_ind_coords_URL?: string | null;
  CSV_Perc_p_values_URL?: string | null;

  SHA256_DAPC_compoplot?: string | null;
  SHA256_DAPC_CSV_eigenvalues?: string | null;
  SHA256_DAPC_ind_coords?: string | null;
  SHA256_DAPC_SVG_predefined?: string | null;
  SHA256_DAPC_CSV_probabilities?: string | null;
  SHA256_CSV_diversity?: string | null;
  SHA256_PCA_CSV_eigenvalues?: string | null;
  SHA256_PCA_CSV_ind_coords?: string | null;
  SHA256_PCA_SVG_screeplot?: string | null;
  SHA256_PCA_SVG?: string | null;
  SHA256_PCoA_CSV_anosim_stats?: string | null;
  SHA256_PCoA_CSV_ind_coords?: string | null;
  SHA256_PCoA_SVG?: string | null;
  SHA256_CSV_Perc_p_values?: string | null;
  SHA256_Rarefaction_curve_SVG?: string | null;

  Pipeline_02_Version?: string | null;
  DB_Version?: string | null;
};
