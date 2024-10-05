import Samples from "@/lib/locations";

const useSamples = () => {
  const sampleList: Sample[] = Object.keys(Samples).map((key) => ({
    ...Samples[key],
  }));

  return sampleList;
};

export default useSamples;
