// spacex-live-stats.js
const API_URL = "https://api.spacexdata.com/v4/launches/latest";

async function getLatestLaunch() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
