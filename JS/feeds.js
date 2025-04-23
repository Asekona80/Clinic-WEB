const apiKey = "e5338cfdfe6746b7a79585301bf0cdda"; // Your API key
const url = `https://newsapi.org/v2/everything?q=health&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    let newsHtml = "";
    data.articles.forEach(article => {
      newsHtml += `
        <div class="news-item">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;
    });
    document.getElementById("news-container").innerHTML = newsHtml;
  })
  .catch(error => console.log("Error fetching news: ", error));

  
  fetch('/api/news')
  .then(response => response.json())
  .then(data => {
    let newsHtml = '';
    data.forEach(article => {
      newsHtml += `
        <div class="news-item">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>
      `;
    });
    document.getElementById('news-container').innerHTML = newsHtml;
  });
