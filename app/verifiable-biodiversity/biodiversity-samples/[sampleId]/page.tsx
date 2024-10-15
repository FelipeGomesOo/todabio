import SampleDetails from "./SampleDetails";

export default function BiodiversitySamplePage({
  params,
}: {
  params: { sampleId: Sample["Elabjournal_Sample_ID"] };
}) {
  return <SampleDetails sampleId={params.sampleId} />;
}
