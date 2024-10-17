"use client";
import { useCallback } from "react";
import { usePapaParse } from "react-papaparse";

export default function useFetchCSV() {
  const { readRemoteFile } = usePapaParse();

  const fetchCsv = useCallback(
    (url: string, callback: (data: any[]) => void) => {
      readRemoteFile(url, {
        complete: (results) => {
          console.log("Parsed CSV from the server", results.data);
          callback(results.data); // Chama o callback com os dados
        },
        error: (error) => {
          console.error("Erro ao fazer o parse do arquivo:", error);
          console.log("Error details:", error);
          callback([]); // Chama o callback com um array vazio em caso de erro
        },
        download: true,
        header: true,
      });
    },
    []
  );

  return { fetchCsv };
}
