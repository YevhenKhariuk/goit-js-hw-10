// Елементи DOM
const loaderElement = document.getElementById('loader');
const errorElement = document.getElementById('error');
const catImagesContainer = document.getElementById('catImages');

// Виклик функції отримання зображень котів
getCatImages();

// Функція отримання зображень котів
function getCatImages() {
  showLoader();

  // Отримання зображень котів
  fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(data => {
      displayCatImages(data);
    })
    .catch(() => {
      hideLoader();
      displayError();
    });
}

// Функція показу прогрес-індикатора
function showLoader() {
  loaderElement.style.display = 'block';
  errorElement.style.display = 'none';
  catImagesContainer.style.display = 'none';
}

// Функція приховування прогрес-індикатора
function hideLoader() {
  loaderElement.style.display = 'none';
}

// Функція показу повідомлення про помилку
function displayError() {
  errorElement.style.display = 'block';
}

// Функція відображення зображень котів
function displayCatImages(catImages) {
  let imagesHTML = '';
  catImages.forEach(catImage => {
    imagesHTML += `<img src="${catImage.url}" alt="${catImage.id}">`;
  });
  catImagesContainer.innerHTML = imagesHTML;
  catImagesContainer.style.display = 'block';

  hideLoader();
}

// Обробник кнопки "Get Cat Images"
const getImagesButton = document.getElementById('getImagesButton');
getImagesButton.addEventListener('click', getCatImages);
