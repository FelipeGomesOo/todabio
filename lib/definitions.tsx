type DNASequenceFile = {
  url: string;
};

type DAPCGroup = {
  [key: string]: number;
};

type SampleMarker = {
  DAPC: DAPCGroup;
  files: { [key: string]: DNASequenceFile };
};

type SampleMarkers = {
  [marker: string]: SampleMarker;
};

type Sample = {
  hashId: string;
  sampleType: string;
  location: google.maps.LatLngLiteral;
  DNASequenceFiles: { [key: string]: DNASequenceFile };
  CollectionDate: string;
  creditId: Credit["hashId"];
  depth: string;
  DNA_Concentration: number;
  Sample_Markers: SampleMarkers;
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
