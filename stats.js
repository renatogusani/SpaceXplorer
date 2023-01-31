// stats.js
const displayStats = data => {
  const statsList = document.querySelector("#stats-list");

  for (const stat of data) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${stat.title}:</strong> ${stat.value}`;
    statsList.appendChild(listItem);
  }
};

fetch("https://api.spacexdata.com/v3/stats")
  .then(response => response.json())
  .then(data => displayStats(data))
  .catch(error => console.error(error));
