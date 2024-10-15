import { extractSampleId } from "@/lib/utils";
import Samples from "@/lib/locations";
import betaAnalyses from "@/lib/betaAnalyses";
import gammaAnalyses from "@/lib/gammaAnalyses";

export function getAllSamples() {
  const allSamples = Samples;
  return allSamples;
}
export function getAllBetaAnalyses() {
  const analyses = betaAnalyses;
  return analyses;
}
export function getAllGammaAnalyses() {
  const analyses = gammaAnalyses;
  return analyses;
}

export function getSampleById(sampleId: Sample["Elabjournal_Sample_ID"]) {
  const samples = getAllSamples();
  const sample = samples.find(
    (sample) => sample.Elabjournal_Sample_ID === sampleId
  );
  return sample;
}
export function getBetaAnalysisByID(analysisID: BetaAnalysis["ID"]) {
  const analyses = getAllBetaAnalyses();
  const betaAnalysis = analyses.find((analysis) => analysis.ID === analysisID);
  return betaAnalysis;
}

export function getBetaAnalysesByMarker(marker: MarkerType): BetaAnalysis[] {
  const analyses = getAllBetaAnalyses();

  const filteredAnalyses = analyses.filter((analysis) =>
    analysis.BetaMarkers.some((betaMarker) => betaMarker.Marker === marker)
  );
  return filteredAnalyses;
}

export function getBetaMarkerAnalysis(
  betaAnalysis: BetaAnalysis,
  Marker: MarkerType
) {
  const betaMarkerAnalysis = betaAnalysis.BetaMarkers.find(
    (analysis) => analysis.Marker === Marker
  );
  return betaMarkerAnalysis;
}

export function getGammaAnalysisByID(analysisID: GammaAnalysis["ID"]) {
  const analyses = getAllGammaAnalyses();
  const gammaAnalysis = analyses.find((analysis) => analysis.ID === analysisID);
  return gammaAnalysis;
}

export function getGammaMarkerAnalysis(
  gammaAnalysis: GammaAnalysis,
  Marker: MarkerType
) {
  const gammaMarkerAnalysis = gammaAnalysis.GammaMarkers.find(
    (analysis) => analysis.Marker === Marker
  );
  return gammaMarkerAnalysis;
}

export function getSamplesByAnalysis(
  analysis: GammaMarkerAnalysis | BetaMarkerAnalysis
) {
  if (!Array.isArray(analysis.Samples_Names)) {
    console.warn("Análise inválida: Samples_Names não é um array.");
    return [];
  }

  if (analysis.Samples_Names.length === 0) {
    console.warn("Análise inválida: Samples_Names está vazio.");
    return [];
  }

  const sampleIds = extractSampleId(analysis.Samples_Names);

  if (sampleIds.length === 0) {
    console.warn("Nenhum ID de amostra encontrado.");
    return [];
  }

  const samples = sampleIds.map((sampleId) => getSampleById(sampleId));

  const validSamples = samples.filter((sample) => sample !== undefined);

  if (validSamples.length === 0) {
    console.warn("Nenhuma amostra válida encontrada.");
  }

  return validSamples;
}
