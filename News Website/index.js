console.log("script started");
let topNewsArea = document.getElementById("topNews");

let api = "eae46b920c6d43e483a1c19b76604a4b";
let sourse = "bbc-news";
let url = `https://newsapi.org/v2/top-headlines?sources=${sourse}&apiKey=${api}`;

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

let html = "";
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles)

    articles.forEach((news, index) => {
      // console.log(news)

      var dateUTC = new Date(`${news.publishedAt}`);
      var dateUTC = dateUTC.getTime();
      var dateIST = new Date(dateUTC);
      dateIST.setHours(dateIST.getHours() + 5);
      dateIST.setMinutes(dateIST.getMinutes() + 30);

      ////

    ////
    topNewsArea.innerHTML = html;
  } else {
    console.log("Something wents wrong!");
  }
};

xhr.send();

// Search 
let search = document.getElementById("searchArea");
search.addEventListener("input", function(e) {
  e.preventDefault;
  let searchVal = search.value.toLowerCase();

  let newsCards = document.getElementsByClassName("card-body");
  // console.log(newsCards)
  Array.from(newsCards).forEach((element) => {
    let cardText = element.innerText.toLowerCase();
    // console.log(cardText)

    if (cardText.includes(searchVal)) {
      element.parentNode.style.display = "block";
    } else {
      element.parentNode.style.display = "none";
    }
  });
});
