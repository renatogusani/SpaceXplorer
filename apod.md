---
layout: default
title: {{ title }}
---
<script>
  const apiKey = "1ZSBQ0Aj50uSrkIbBMDtIu4cs2h65LTOLtgrdWG7";
  const apodApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  fetch(apodApiUrl)
    .then(response => response.json())
    .then(data => {
      const title = data.title;
      const imageUrl = data.url;

      document.querySelector("h1").textContent = title;
      document.querySelector("img").src = imageUrl;
    });
</script>

<h1></h1>
<img />
