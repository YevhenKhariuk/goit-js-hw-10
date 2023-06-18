import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

async function init() {
  try {
    loader.classList.remove('hidden');
    const breeds = await fetchBreeds();
    for (const breed of breeds) {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    }
  } catch (err) {
    error.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
}

async function handleBreedSelect(event) {
  try {
    loader.classList.remove('hidden');
    const breedId = event.target.value;
    const catData = await fetchCatByBreed(breedId);
    error.classList.add('hidden');
    displayCatInfo(catData);
  } catch (err) {
    error.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
}

function displayCatInfo(catData) {
  catInfo.innerHTML = '';
  const img = document.createElement('img');
  img.src = catData.url;
  img.alt = catData.breeds[0].name;
  catInfo.appendChild(img);

  const name = document.createElement('h2');
  name.textContent = catData.breeds[0].name;
  catInfo.appendChild(name);

  const description = document.createElement('p');
  description.textContent = catData.breeds[0].description;
  catInfo.appendChild(description);

  const temperament = document.createElement('p');
  temperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;
  catInfo.appendChild(temperament);
}

init();
breedSelect.addEventListener('change', handleBreedSelect);
