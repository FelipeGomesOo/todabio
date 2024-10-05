type DAPC = {
  [key: string]: number;
};

type SampleMarker = {
  Name: string;
  FASTQ_ID_Sequence_Provider: string;
  URL_FASTQ_Forward: string;
  URL_FASTQ_Reverse: string;
  SHA256_Forward: string;
  SHA256_Reverse: string;
  SHA256_fastaASV: string;
  URL_fastaASV: string;
  qPCR_nM: number;
  Pipeline_Log: string;
  DAPC: DAPC;
};

type Sample = {
  hashId: string;
  sampleType: string;
  location: google.maps.LatLngLiteral;
  CollectionDate: string;
  creditId: Credit["hashId"];
  depth: string;
  DNA_Concentration: number;
  Sample_Markers: SampleMarker[];
};
type Credit = {
  hashId: string;
  coverArea: string;
  samples: Sample[];
  projectId: Project["projectId"];
};

type Project = {
  projectId: string;
  name: string;
  description: string;
  credits: Credit[];
};
