const apiKey =
  'live_QMAtmTQkiGazrxebG23AS3wtLILf4Zqg5dX2f7pphHKbPeLUhSV5yTLIfmU4s3pe';

export async function fetchBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey,
    },
  });
  const breeds = await response.json();
  return breeds;
}

export async function fetchCatByBreed(breedId) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  );
  const catData = await response.json();
  return catData[0];
}
