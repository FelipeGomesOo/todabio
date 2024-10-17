import type { NextApiRequest, NextApiResponse } from "next";

// Função handler da API
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query; // Extrai a URL da query string

  // Verifica se a URL está presente e é uma string
  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "A valid URL is required" });
  }

  try {
    // Faz a requisição para a URL externa
    const response = await fetch(url);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    // Converte a resposta para texto
    const data = await response.text();

    // Envia o conteúdo do CSV de volta ao cliente
    res.status(200).send(data);
  } catch (error: any) {
    // Em caso de erro, responde com código 500 e mensagem de erro
    res.status(500).json({ error: error.message });
  }
}
