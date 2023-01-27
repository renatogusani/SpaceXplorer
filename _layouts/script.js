const API_URL = "https://api.nasa.gov/planetary/apod?api_key=1ZSBQ0Aj50uSrkIbBMDtIu4cs2h65LTOLtgrdWG7";
const imageContainer = document.getElementById("image-container");

async function updateAPOD() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    imageContainer.innerHTML = `
      <img src="${data.url}" alt="${data.title}">
      <h2>${data.title}</h2>
      <p>${data.explanation}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

updateAPOD();
