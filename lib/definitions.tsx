type DAPC = {
  [key: string]: number;
};

interface SampleMarker {
  Marker: string;
  FASTQ_Forward_URL: string;
  SHA256_FASTQ_Forward: string;
  FASTQ_Reverse_URL: string;
  SHA256_FASTQ_Reverse: string;
  FASTA_ASV_URL: string;
  SHA256_FASTA_ASV: string;
  Clean_FASTA_ASV_URL: string;
  SHA256_Clean_FASTA_ASV: string;
  FASTA_OTU_URL: string;
  SHA256_FASTA_OTU: string;
  Rarefaction_Curve_URL: string;
  SHA256_Rarefaction_Curve: string;
  Shannon: number;
  Riqueza: number;
  Equidade: number;
  DAPC?: DAPC;
}
interface Sample {
  "Depth_(m)": number | null | string;
  Matrix: string;
  Elabjournal_Sample_ID: string;
  FASTQ_ID_Sequence_Provider: string;
  Pipeline_01_Version: string;
  Sample_Markers: SampleMarker[];
}
interface RegularSample extends Sample {
  Sample_Latitude: number;
  Sample_Longitude: number;
  Geohash: string;
  Timestamp_Sampling: string | null;
}
interface ControlSample extends Sample {
  Sample_Latitude: null;
  Sample_Longitude: null;
  Geohash: null;
  Timestamp_Sampling: null;
}

type Analysis = {
  id: string;
  Title: string;
  Description: string;
  Samples_Names: string[];
  DAPC_SVG_compoplot_URL?: string;
  DAPC_SVG_scatterplot_URL?: string;
  PCA_SVG_URL?: string;
  PCoA_SVG_URL: string;
  FASTA_OTU_URL?: string | "NA";
  Pipeline_Version?: string;
  SHA256_DAPC_compoplot?: string;
  SHA256_DAPC_scatterplot?: string;
  SHA256_PCA_SVG?: string;
  SHA256_PCoA_SVG?: string;
  SHA256_FASTA_OTU?: string | "NA";
  Pipeline_02_Version?: string;
  DB_Version?: string;
  Marker: string;
  PCA_CSV_IND_COORD_URL?: string;
  SHA256_PCA_CSV_IND_COORD?: string;
  PCA_CSV_EIGENVALUES_URL?: string;
  SHA256_PCA_CSV_EIGENVALUES?: string;
  PCA_SVG_SCREEPLOT_URL?: string;
  SHA256_PCA_SVG_SCREEPLOT?: string;
  PCoA_CSV_IND_COORD_URL?: string;
  SHA256_PCoA_CSV_IND_COORD?: string;
  Analysis_Type: string;
  /* DAPC_CSV_compoplot_URL?: string;
  SHA256_DAPC_CSV_compoplot?: string;
  SHA256_DAPC_CSV_scatterplot?: string;
  SHA256_PCA_CSV?: string;
  DAPC_CSV_scatterplot_URL?: string;
  SHA256_PCoA_CSV: string;
  PCA_CSV_URL?: string;
  PCoA_CSV_URL: string; */
};
declare module "@canvasjs/react-charts";
