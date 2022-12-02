
const COLLECTION = [
    {
        name: "I HAVE A DREAM",
        project: "See-Saw",
        releaseYear: "1993",
        type: "Album",
        artists: "Chiaki Ishikawa",
        tracks: "11 tracks"
    },
    {
        name: "Chao Tokyo",
        project: "See-Saw",
        releaseYear: "1994",
        type: "Single",
        artists: "Chiaki Ishikawa",
        tracks: "3 tracks"
    },
    {
        name: "See-Saw",
        project: "See-Saw",
        releaseYear: "1994",
        type: "Album",
        artists: "Chiaki Ishikawa",
        tracks: "7 tracks"
    },
    {
        name: "early best",
        project: "See-Saw",
        releaseYear: "2003",
        type: "Album",
        artists: "Chiaki Ishikawa",
        tracks: "14 tracks"
    },
    {
        name: "Dream Field",
        project: "See-Saw",
        releaseYear: "2003",
        type: "Album",
        artists: "Chiaki Ishikawa",
        tracks: "13 tracks"
    },
    {
        name: "Everlasting Songs",
        project: "FictionJunction",
        releaseYear: "2009",
        type: "Album",
        artists: ["Asuka Kato",
            " Kaori Oda",
            " Keiko Kubota",
            " Wakana Ootaki",
            " Yuuka Nanri",
            " Yuriko Kaida"],
        tracks: "15 tracks" //ideally: button to display tracklist
    },
    {
        name: "Seventh Heaven",
        project: "Kalafina",
        releaseYear: "2009",
        type: "Album",
        artists: ["Hikaru Masai",
            " Keiko Kubota",
            " Wakana Ootaki",
            " Maya Toyoshima"],
        tracks: "14 tracks"
    },
    {
        name: "Red Moon",
        project: "Kalafina",
        releaseYear: "2010",
        type: "Album",
        artists: ["Hikaru Masai",
            " Keiko Kubota",
            " Wakana Ootaki"],
        tracks: "13 tracks"
    },
    {
        name: "After Eden",
        project: "Kalafina",
        releaseYear: "2011",
        type: "Album",
        artists: ["Hikaru Masai",
            " Keiko Kubota",
            " Wakana Ootaki"],
        tracks: "13 tracks"
    },
    {
        name: "Consolation",
        project: "Kalafina",
        releaseYear: "2013",
        type: "Album",
        artists: ["Hikaru Masai",
            " Keiko Kubota",
            " Wakana Ootaki"],
        tracks: "13 tracks"
    },
    {
        name: "elemental",
        project: "FictionJunction",
        releaseYear: "2014",
        type: "Album",
        artists: ["Asuka Kato",
            " Kaori Oda",
            " Keiko Kubota",
            " Wakana Ootaki",
            " Yuuka Nanri",
            " Yuriko Kaida"],
        tracks: "13 tracks"
    },
    {
        name: "far on the water",
        project: "Kalafina",
        releaseYear: "2015",
        type: "Album",
        artists: ["Hikaru Masai",
            " Keiko Kubota",
            " Wakana Ootaki"],
        tracks: "13 tracks"
    }
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
  
      let project = document.createElement("h3");
      project.innerText = element.project;
      article.appendChild(project);
  
      let realeaseYear = document.createElement("h4");
      realeaseYear.innerText = element.releaseYear;
      article.appendChild(realeaseYear);
  
      let type = document.createElement("h5");
      type.innerText = element.type;
      article.appendChild(type);
  
      let artists = document.createElement("p");
      artists.innerText = element.artists;
      article.appendChild(artists);

      let tracks = document.createElement("p");
      tracks.innerText = element.tracks;
      article.appendChild(tracks);
  
      section.appendChild(article);
      main.appendChild(section);
      document.body.insertBefore(
        main,
        document.getElementsByTagName("footer")[0]
      );
    }
  }
  collectionElement();






  /*
function collectionElement() {
  let main = document.createElement("main");
  let section = document.createElement("section");

  for (let element of collection) {
    let article = document.createElement("article");
    article.className = element.name;

    let name = document.createElement("h2");
    name.innerText = element.name;
    article.appendChild(name);

    let picture = document.createElement("img");
    picture.setAttribute("src", element.picture);
    article.appendChild(picture);

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
*/

/*
//const footer = document.getElementsByTagName("footer")[0];

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
      document.insertBefore(
        main,
        document.getElementsByTagName("footer")[0]);
    }
  }
  collectionElement();*/






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