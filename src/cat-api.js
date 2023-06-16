const apiKey =
  'live_QMAtmTQkiGazrxebG23AS3wtLILf4Zqg5dX2f7pphHKbPeLUhSV5yTLIfmU4s3pe';

async function fetchCatData() {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?api_key=' + apiKey
  );
  if (!response.ok) {
    throw new Error('Failed to fetch cat data');
  }
  const data = await response.json();
  return data[0];
}

async function fetchBreedData(breedId) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/breeds/${breedId}?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch breed data');
  }
  const data = await response.json();
  return data;
}
