// Replace YOUR_API_KEY with the key provided in the prompt
const API_KEY = "1ZSBQ0Aj50uSrkIbBMDtIu4cs2h65LTOLtgrdWG7";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const imageContainer = document.getElementById("image-container");

// Function to fetch data from the API and update the webpage
async function updateAPOD() {
  try {
    // Fetch data from the API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Update the webpage with the new data
    imageContainer.innerHTML = `
      <img src="${data.url}" alt="${data.title}">
      <h2>${data.title}</h2>
      <p>${data.explanation}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

// Call the function initially to load the APOD
updateAPOD();

// Set an interval to refresh the APOD every hour
setInterval(updateAPOD, 3600000);
