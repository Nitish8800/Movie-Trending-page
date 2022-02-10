//   let url = `http://www.omdbapi.com/?apikey=381f166f&s=${name}&maxResults=10`;

function getMovie() {
  let movie = document.getElementById("search").value;

  async function makeRequest() {
    let res = await fetch(`http://www.omdbapi.com/?apikey=381f166f&s=${movie}`);
    let data = await res.json();
    appendMovie(data.Search);
    console.log(data.Search);
  }
  makeRequest();
}

let movie = document.getElementById("result");

function appendMovie(prod) {
  movie.textContent = "";
  //console.log(prod)
  if (prod == undefined) {
    // let movies = document.getElementById("result");

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src =
      "https://media2.giphy.com/media/haZOqHKz9tTfW/giphy.webp?cid=ecf05e47gp2b8dw0jh6zzmyinnvbyeejks4wum18jqxny50g&rid=giphy.webp&ct=g";

    img.style.width = "430%";
    img.style.height = "600px";
    img.style.margin = "auto";

    div.append(img);

    movie.append(div);

    return;
  } else {
    prod.forEach(function (movieData) {
      if (movieData.Poster != "N/A") {
        div = document.createElement("div");

        img = document.createElement("img");
        img.src = movieData.Poster;

        let title = document.createElement("h2");
        title.innerHTML = movieData.Title;

        let year = document.createElement("h1");
        year.innerHTML = `Year- ${movieData.Year}`;
        div.append(img, title, year);

        movie.append(div);
      }
    });
  }
}
