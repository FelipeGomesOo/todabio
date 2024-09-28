type DNASequenceFile = {
  url: string;
};

type DAPCGroup = {
  [key: string]: number;
};

type Sample = {
  hashId: string;
  sampleType: string;
  location: google.maps.LatLngLiteral;
  DNASequenceFiles: DNASequenceFile[];
  MolecularMarkers: string[];
  CollectionDate: string;
  creditId: Credit["hashId"];
  DAPC: DAPCGroup[];
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
