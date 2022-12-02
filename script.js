const COLLECTION = [
    {
        name: "Title 1",
        director: "placeholder",
        releaseYear: "Year 1",
        genre: "a genre",
        cast: "some people",
    },
    {
        name: "Title 2",
        director: "someone",
        releaseYear: "Year 2",
        genre: "another genre",
        cast: "some other people",
    },
];

function collectionElement() {
    let main = document.createElement("main");
    let section = document.createElement("section");
  
    for (let element of COLLECTION) {
      let article = document.createElement("article");
      article.className = element.name;
  
      let name = document.createElement("h2");
      name.innerText = element.name;
      article.appendChild(name);
  
      let director = document.createElement("h3");
      director.innerText = element.director;
      article.appendChild(director);
  
      let realeaseYear = document.createElement("h4");
      realeaseYear.innerText = element.releaseYear;
      article.appendChild(realeaseYear);
  
      let genre = document.createElement("h5");
      genre.innerText = element.genre;
      article.appendChild(genre);
  
      let cast = document.createElement("p");
      cast.innerText = element.cast;
      article.appendChild(cast);
  
      section.appendChild(article);
      main.appendChild(section);
      document.body.insertBefore(
        main,
        document.getElementsByTagName("footer")[0]
      );
    }
  }
  collectionElement();





  
/*function listElement() {

    let main = document.createElement("main");
    let section = document.createElement("section");

    for (let element of COLLECTION) {
        let article = document.createElement("article");
        article.className = element.name;

        let name = document.createElement("h2");
        name.innerText = element.name;
        article.appendChild(name);

        let year = document.createElement("h3");
        year.innerText = element.year;
        article.appendChild(year);

        section.appendChild(article)
        main.appendChild(section)
        document.body.insertBefore(main, document.getElementsByTagName("footer")[0])
    }
}
listElement();*/