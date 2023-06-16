// Функція для виконання GET-запиту
async function getRequest(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

// Функція для отримання списку порід
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return getRequest(url);
}

// Функція для отримання інформації про кота за породою
export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return getRequest(url);
}
