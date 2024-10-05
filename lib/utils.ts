import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

export function getMaxGroup(dapc: { [key: string]: number }) {
  return Object.keys(dapc).reduce((maxGroup, currentGroup) => {
    return dapc[currentGroup] > dapc[maxGroup] ? currentGroup : maxGroup;
  });
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
  const maxValue = Math.max(...Object.values(data)); // Encontra o valor máximo
  const result: NormalizedValues = {}; // Cria um objeto para armazenar os resultados

  for (const key in data) {
    const normalizedValue = ((data[key] / maxValue) * 100).toFixed(2); // Normaliza
    result[key] = [data[key], parseFloat(normalizedValue)]; // Adiciona o valor e o valor normalizado
  }

  // Ordena os resultados do maior para o menor com base no valor normalizado
  const sortedResult = Object.entries(result).sort(
    ([, a], [, b]) => b[1] - a[1]
  );

  // Converte de volta para um objeto
  const orderedNormalizedValues: NormalizedValues =
    Object.fromEntries(sortedResult);

  return orderedNormalizedValues; // Retorna o objeto resultante ordenado
};
export function similarSamples(
  samples: Sample[],
  marker: string,
  largestGroup: string
): Sample[] {
  const similarSamples: Sample[] = [];

  samples.forEach((sample) => {
    const sampleMarkers = sample.Sample_Markers;

    sampleMarkers.forEach((sampleMarker) => {
      if (sampleMarker.Name === marker) {
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
