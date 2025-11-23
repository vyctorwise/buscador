// poverty-data.js

const fetch = require('node-fetch');

async function fetchPovertyData(countryCode, indicator, startYear, endYear) {
  // Fonte: API do World Bank
  // Ex: indicador de pobreza multidimensional: SI.POV.MPWB :contentReference[oaicite:0]{index=0}
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicator}?date=${startYear}:${endYear}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }

  const data = await response.json();
  // A resposta vem em duas partes: metadados + dados reais
  const entries = data[1];
  return entries.map(e => ({
    year: e.date,
    value: e.value
  }));
}

async function main() {
  try {
    // Exemplo: buscar para o mundo ("WLD")
    const country = "WLD";

    // Indicador de pobreza multidimensional
    const multidim = "SI.POV.MPWB";

    // Indicador de linha de pobreza nacional (se disponível para países específicos)
    const headcount = "SI.POV.SOPO"; // pobreza societal line :contentReference[oaicite:1]{index=1}

    const startYear = 2023;
    const endYear = 2024; // ou até onde a API tiver dados

    const multiData = await fetchPovertyData(country, multidim, startYear, endYear);
    const headcountData = await fetchPovertyData(country, headcount, startYear, endYear);

    console.log("Pobreza multidimensional:", multiData);
    console.log("Poverty headcount societal line:", headcountData);

  } catch (err) {
    console.error("Erro no script:", err);
  }
}

main();
