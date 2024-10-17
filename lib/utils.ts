import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getBetaAnalysisByID, getBetaMarkerAnalysis } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return "";

  const [datePart] = dateString.split("T");

  const [year, month, day] = datePart.split("-");

  return `${day}/${month}/${year}`;
}

export function getMaxGroup(dapc: DAPC): { key: string; index: number } | null {
  if (!Array.isArray(dapc) || dapc.length === 0) {
    return null; // Retorna null se dapc não for um array ou estiver vazio
  }

  let maxIndex = 0;
  let maxKey = Object.keys(dapc[0])[0]; // Pega a primeira chave do primeiro objeto
  let maxValue = dapc[0][maxKey]; // Armazena o valor associado à chave

  // Itera sobre cada item no array
  dapc.forEach((item, index) => {
    const currentKey = Object.keys(item)[0]; // Assume que cada objeto tem apenas uma chave
    const currentValue = item[currentKey];

    // Atualiza maxIndex, maxKey e maxValue se o valor atual for maior
    if (currentValue > maxValue) {
      maxIndex = index;
      maxKey = currentKey;
      maxValue = currentValue; // Atualiza o valor máximo
    }
  });

  return { key: maxKey, index: maxIndex };
}

export const groupColors: {
  [key: string]: { bg: string; border: string; color: string };
} = {
  Acre: {
    color: "#BBFF00",
    bg: "bg-[#BBFF00]",
    border: "border-chart-lightGreen",
  },
  Jupiá: {
    color: "#5FB456",
    bg: "bg-[#5FB456]",
    border: "border-chart-darkGreen",
  },
  Rosana: { color: "#00F3EB", bg: "bg-[#00F3EB]", border: "border-chart-cyan" },
  "Três Irmãos": {
    color: "#3355FF",
    bg: "bg-[#3355FF]",
    border: "border-chart-blue",
  },
  Guadalupe: {
    color: "#DA21FF",
    bg: "bg-[#DA21FF]",
    border: "border-chart-purple",
  },
  "Bom Jardim": {
    color: "#FF00AA",
    bg: "bg-[#FF00AA]",
    border: "border-chart-pink",
  },
  Florença: {
    color: "#FF0000",
    bg: "bg-[#FF0000]",
    border: "border-chart-red",
  },
  Madureira: {
    color: "#FF7300",
    bg: "bg-[#FF7300]",
    border: "border-chart-orange",
  },
  Pirajá: {
    color: "#FFE800",
    bg: "bg-[#FFE800]",
    border: "border-chart-yellow",
  },
};

export const currentMarker = "12S";

type NormalizedValues = {
  [key: string]: [number, number];
};
export const getValuesWithNormalization = (data: DAPC): NormalizedValues => {
  if (!Array.isArray(data) || data.length === 0) {
    return {}; // Retorna um objeto vazio se data não for um array ou estiver vazio
  }

  // Obtém todos os valores do array e mapeia para um único objeto
  const combinedValues: { [key: string]: number } = {};

  data.forEach((item) => {
    const key = Object.keys(item)[0]; // Assume que cada objeto tem apenas uma chave
    combinedValues[key] = item[key]; // Adiciona o valor ao objeto combinado
  });

  const maxValue = Math.max(...Object.values(combinedValues)); // Encontra o valor máximo
  const result: NormalizedValues = {}; // Cria um objeto para armazenar os resultados

  for (const key in combinedValues) {
    const normalizedValue = ((combinedValues[key] / maxValue) * 100).toFixed(2); // Normaliza
    result[key] = [combinedValues[key], parseFloat(normalizedValue)]; // Adiciona o valor e o valor normalizado
  }

  // Ordena os resultados do maior para o menor com base no valor normalizado
  const sortedResult = Object.entries(result).sort(
    ([, a], [, b]) => b[1][1] - a[1][1]
  );

  // Converte de volta para um objeto
  const orderedNormalizedValues: NormalizedValues =
    Object.fromEntries(sortedResult);

  return orderedNormalizedValues; // Retorna o objeto resultante ordenado
};

/* export function similarSamples(
  samples: Sample[],
  marker: string,
  largestGroup: string
): Sample[] {
  const similarSamples: Sample[] = [];

  samples.forEach((sample) => {
    const sampleMarkers = sample.Sample_Markers;

    sampleMarkers.forEach((sampleMarker) => {
      if (sampleMarker.Marker === marker) {
        const dapcValue = sampleMarker.DAPC[largestGroup];

        const isLargest = Object.values(sampleMarker.DAPC).every(
          (value) => value <= dapcValue
        );

        if (isLargest) {
          similarSamples.push(sample);
        }
      }
    });
  });

  return similarSamples;
}
 */
type DataPoint = string[]; // Define o tipo para cada ponto de dados, que é um array de strings

interface Result {
  depths: number[]; // Um array de profundidades numéricas
  maxIterations: number; // A quantidade máxima de iterações
}

export function extractDepthsAndIterations(input: DataPoint[]): Result {
  //console.log("input", input);
  const headers = input[0]; // O primeiro array que contém os cabeçalhos
  const depths: number[] = [];
  const depthIterations: Record<number, number> = {}; // Um objeto para contar iterações por profundidade

  // Percorre os cabeçalhos, começando do índice 1 (excluindo "sample-id")
  for (let i = 1; i < headers.length; i++) {
    const header = headers[i];

    // Extrai a profundidade do cabeçalho usando regex
    const depthMatch = header.match(/depth-(\d+)_iter-\d+/);
    if (depthMatch) {
      const depth = Number(depthMatch[1]);

      // Adiciona a profundidade ao array, se ainda não estiver presente
      if (!depths.includes(depth)) {
        depths.push(depth);
      }

      // Atualiza a contagem de iterações para a profundidade
      if (!depthIterations[depth]) {
        depthIterations[depth] = 0;
      }
      depthIterations[depth]++;
    }
  }

  // Encontra a quantidade máxima de iterações
  const maxIterations = Math.max(...Object.values(depthIterations));

  return {
    depths,
    maxIterations,
  };
}

export function getSampleValues(
  input: DataPoint[],
  depths: any,
  iterations: any
) {
  const last_key = depths.length * iterations;
  const sampleValues = input[1].slice(1, last_key + 1);
  const sampleValuesNumbers = convertArrayToNumbers(sampleValues);

  console.log("sampleValuesNumbers", sampleValuesNumbers);
  return sampleValuesNumbers;
}

export function getDataPoints(samples: any) {
  let { depths, maxIterations } = extractDepthsAndIterations(samples);
  //console.log("depths", depths);
  //console.log("maxIterations", maxIterations);
  let sampleValueArray = getSampleValues(samples, depths, maxIterations);
  //console.log("sampleValueArray", sampleValueArray);
  let dataPoints = [];

  for (let i = 0; i < depths.length; i++) {
    let sampleValues = sampleValueArray.slice(
      i * maxIterations,
      (i + 1) * maxIterations
    );
    dataPoints.push({ x: depths[i], y: sampleValues });
  }

  // console.log("dataPoints", dataPoints);
  return dataPoints;
}

export function convertArrayToNumbers(
  inputArray: (string | number)[]
): number[] {
  return inputArray
    .map((item) => Number(item)) // Tenta converter cada item para número
    .filter((num) => !isNaN(num)); // Filtra valores que não são números (NaN)
}

export function copyToClipboard(content: string) {
  navigator.clipboard.writeText(content);
}

export function extractSampleId(strings: string[]): string[] {
  return strings.map((str) => str.split("_")[0]);
}

export const pipelineURL = {
  "01": "https://github.com/Todabio/Todabio",
  "02": "https://github.com/Todabio/Pipeline_OTUsDB",
};

export function interpolateColors(steps: number) {
  const stepFactor = 1 / (steps - 1);
  const interpolatedColors: string[] = [];
  const startColor = [188, 255, 0, 1];
  const endColor = [0, 54, 92, 1];
  for (let i = 0; i < steps; i++) {
    const interpolatedColor = interpolateColor(
      startColor,
      endColor,
      stepFactor * i
    );
    interpolatedColors.push(`rgba(${interpolatedColor.join(", ")})`);
  }

  return interpolatedColors;
}

export function interpolateColor(
  startColor: number[],
  endColor: number[],
  factor: number
) {
  const result = startColor.slice();

  for (let i = 0; i < 4; i++) {
    result[i] = Math.round(
      startColor[i] + factor * (endColor[i] - startColor[i])
    );
  }

  return result;
}

export function betaContainsDAPC(
  betaID: BetaAnalysis["ID"],
  marker: MarkerType
) {
  const betaAnalysis = getBetaAnalysisByID(betaID);
  const betaMarkerAnalysis =
    betaAnalysis && getBetaMarkerAnalysis(betaAnalysis, marker);

  const DAPC_CSV_URL = betaMarkerAnalysis?.DAPC_CSV_probabilities_URL;

  const containsDAPC = DAPC_CSV_URL != null;

  return { DAPC_CSV_URL, containsDAPC };
}

export function createDapcObjects(
  inputArray: Array<{ "": string; [key: string]: string }>
): Array<{ id: string; dapc: Array<{ [key: string]: number }> }> {
  return inputArray.map((item) => {
    const id = item[""].split("_")[0];
    const dapcArray = Object.entries(item)
      .filter(([key]) => key !== "")
      .map(([key, value]) => ({ [key]: Number(value) }));

    return {
      id: id,
      dapc: dapcArray,
    };
  });
}

export function mergeDapcIntoSamples(
  regularSamples: Sample[],
  DAPC_Samples: any
): Sample[] {
  const result: Sample[] = [];

  const dapcMap = new Map<string, number[]>();

  for (const b of DAPC_Samples) {
    dapcMap.set(b.id, b.dapc);
  }

  for (const a of regularSamples) {
    const dapc = dapcMap.get(a.Elabjournal_Sample_ID);

    result.push({ ...a, dapc: dapc as DAPC });
  }

  return result;
}

export function filterByRegularSamples(
  samples: RegularSample[] | ControlSample[]
) {
  return samples.filter((sample) => sample.Sample_Latitude !== null);
}
export function filterByControlSamples(
  samples: RegularSample[] | ControlSample[]
) {
  return samples.filter((sample) => sample.Sample_Latitude === null);
}

export function calculateAveragePoint(points: any) {
  if (!points || points.length === 0) {
    return { lat: -1.4558, lng: -48.4902 };
  }

  const totalLatitude = points.reduce(
    (sum: any, point: any) => sum + point.Sample_Latitude,
    0
  );
  const totalLongitude = points.reduce(
    (sum: any, point: any) => sum + point.Sample_Longitude,
    0
  );

  const averageLatitude = totalLatitude / points.length;
  const averageLongitude = totalLongitude / points.length;

  return { lat: averageLatitude, lng: averageLongitude };
}

export function applyJitter(
  samples: RegularSample[],
  jitterAmountMeters: number
) {
  const latitudeToMeters = 111320; // 1 grau de latitude em metros
  const longitudeToMeters = 111320; // 1 grau de longitude em metros na equatorial (média)

  const jitterAmountLat = jitterAmountMeters / latitudeToMeters; // Converter para graus
  const jitterAmountLon =
    jitterAmountMeters /
    (longitudeToMeters *
      Math.cos(samples[0].Sample_Latitude * (Math.PI / 180))); // Ajuste para longitude

  return samples.map((sample) => {
    const jitteredLat =
      sample.Sample_Latitude +
      (Math.random() * jitterAmountLat - jitterAmountLat / 2);
    const jitteredLon =
      sample.Sample_Longitude +
      (Math.random() * jitterAmountLon - jitterAmountLon / 2);

    // Retorna um novo objeto com o valor jitter aplicado
    return {
      ...sample,
      Sample_Latitude: jitteredLat,
      Sample_Longitude: jitteredLon,
    };
  });
}
