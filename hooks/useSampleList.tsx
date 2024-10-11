import Samples from "@/lib/locations";

const useSamples = () => {
  const sampleList = Samples;

  // Filtrando as amostras regulares e de controle
  const regularSamples: RegularSample[] = sampleList.filter(
    (sample): sample is RegularSample => {
      return (sample as RegularSample).Sample_Latitude !== null;
    }
  );

  const controlSamples: ControlSample[] = sampleList.filter(
    (sample): sample is ControlSample => {
      return (sample as ControlSample).Sample_Latitude === null;
    }
  );

  return { sampleList, regularSamples, controlSamples };
};

export default useSamples;
