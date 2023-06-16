// Отримуємо посилання на необхідні елементи
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const catImage = document.getElementById('catImage');
const catInfo = document.getElementById('catInfo');
const nextButton = document.getElementById('nextButton');

// Функція для отримання випадкового зображення кота
async function getRandomCatImage() {
  // Сховати зображення та інформацію про кота
  catImage.style.display = 'none';
  catInfo.style.display = 'none';

  // Показати завантажувач
  loader.style.display = 'block';
  error.style.display = 'none';

  try {
    // Виклик API для отримання випадкового зображення кота
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();

    // Перевірка, чи отримано зображення кота
    if (data && data.length > 0) {
      const imageUrl = data[0].url;
      // Встановити посилання на зображення
      catImage.src = imageUrl;
      // Показати зображення та інформацію про кота
      catImage.style.display = 'block';
      catInfo.style.display = 'block';
    } else {
      // Показати повідомлення про помилку, якщо зображення не отримано
      showError('Error occurred while loading cat information.');
    }
  } catch (error) {
    // Показати повідомлення про помилку, якщо сталася помилка під час виклику API
    showError('Error occurred while fetching cat data.');
  } finally {
    // Сховати завантажувач
    loader.style.display = 'none';
  }
}

// Функція для показу повідомлення про помилку
function showError(message) {
  error.textContent = message;
  error.style.display = 'block';
}

// Обробник події кнопки "Next Cat"
nextButton.addEventListener('click', getRandomCatImage);

// Отримати випадкове зображення кота під час завантаження сторінки
getRandomCatImage();
