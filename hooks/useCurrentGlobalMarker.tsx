import { useSearchParams } from "next/navigation";

const useCurrentGlobalMarker = () => {
  const searchParams = useSearchParams();
  const currentMarker = searchParams.get("marker") || "12S";

  return currentMarker;
};

export default useCurrentGlobalMarker;
