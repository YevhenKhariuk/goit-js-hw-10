const catImage = document.getElementById('catImage');
const catInfo = document.getElementById('catInfo');
const nextButton = document.getElementById('nextButton');

const apiKey = 'REPLACE_ME_WITH_YOUR_API_KEY';
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

async function fetchCatImage() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cat image.');
    }

    const data = await response.json();
    const imageUrl = data[0].url;

    catImage.src = imageUrl;
    catImage.style.display = 'block';

    catInfo.textContent = '';
    catInfo.style.display = 'none';
  } catch (error) {
    console.error(error);
    catImage.style.display = 'none';
    catInfo.style.display = 'none';
    showError();
  }
}

function showError() {
  const errorElement = document.getElementById('error');
  errorElement.style.display = 'block';
}

nextButton.addEventListener('click', fetchCatImage);

fetchCatImage();
