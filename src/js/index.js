import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// Функція для заповнення select елементу зі списком порід
function populateBreeds(breeds) {
  const selectElement = document.querySelector('.breed-select');

  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    selectElement.appendChild(option);
  });
}

// Функція для відображення зображення та інформації про кота
function displayCatInfo(catInfo) {
  const catInfoElement = document.querySelector('.cat-info');

  catInfoElement.innerHTML = `
    <img src="${catInfo.url}" alt="Cat Image">
    <p><strong>Breed:</strong> ${catInfo.breeds[0].name}</p>
    <p><strong>Description:</strong> ${catInfo.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${catInfo.breeds[0].temperament}</p>
  `;
}

// Функція для обробки помилки
function displayError() {
  const errorElement = document.querySelector('.error');
  errorElement.style.display = 'block';
}

// Функція для очищення блоку з інформацією про кота
function clearCatInfo() {
  const catInfoElement = document.querySelector('.cat-info');
  catInfoElement.innerHTML = '';
}

// Обробник події при зміні вибраної породи кота
function onBreedSelectChange(event) {
  const breedId = event.target.value;

  // Очищення блоку з інформацією про кота
  clearCatInfo();

  // Показ завантажувача
  const loaderElement = document.querySelector('.loader');
  loaderElement.style.display = 'block';

  // Виконання запиту за інформацією про кота
  fetchCatByBreed(breedId)
    .then(catInfo => {
      // Приховування завантажувача
      loaderElement.style.display = 'none';

      // Відображення зображення та інформації про кота
      displayCatInfo(catInfo);
    })
    .catch(() => {
      // Приховування завантажувача та відображення помилки
      loaderElement.style.display = 'none';
      displayError();
    });
}

// Завантаження списку порід та ініціалізація події зміни вибраної породи
function initialize() {
  // Показ завантажувача
  const loaderElement = document.querySelector('.loader');
  loaderElement.style.display = 'block';

  // Виконання запиту за списком порід
  fetchBreeds()
    .then(breeds => {
      // Приховування завантажувача
      loaderElement.style.display = 'none';

      // Заповнення select елементу зі списком порід
      populateBreeds(breeds);

      // Додавання обробника події при зміні вибраної породи
      const breedSelectElement = document.querySelector('.breed-select');
      breedSelectElement.addEventListener('change', onBreedSelectChange);
    })
    .catch(() => {
      // Приховування завантажувача та відображення помилки
      loaderElement.style.display = 'none';
      displayError();
    });
}

// Ініціалізація
initialize();
