/* toggle button functions */
const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger");

document.onclick = function (e) {
  if (e.target.id !== "burger") {
    sidebar.classList.remove("active");
  }
};

burger.onclick = function () {
  sidebar.classList.toggle("active");
};

/* content function */
const movies = [
  {
    id: 0,
    title: "the lord of the rings: fellowship of the ring",
    info: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
    img: "./mediaFiles/lotr1poster.jpg",
    watch:
      "https://www.primevideo.com/detail/The-Lord-of-the-Rings-The-Fellowship-of-the-Ring/0TFTBBAYAUINPG47JWI8PZGHKB",
  },
  {
    id: 1,
    title: "the lord of the rings: the two tower",
    info: "Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault from his domain.",
    img: "./mediaFiles/lotr2poster.jpg",
    watch:
      "https://www.primevideo.com/detail/Lord-of-the-Rings-The-Two-Towers/0QG0TWNJ93G9ABMWFZ5I24L997",
  },
  {
    id: 2,
    title: "the lord of the rings: return of the king",
    info: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
    img: "./mediaFiles/lotr3poster.jpg",
    watch:
      "https://www.primevideo.com/detail/Lord-Of-The-Rings-The-Return-Of-The-King/0NSGBFYAQDZQKEC8BBWKT8GILJ",
  },
  {
    id: 3,
    title: "the hobbit: an unexcpected journey",
    info: "Bilbo Baggins, a hobbit, is persuaded into accompanying a wizard and a group of dwarves on a journey to reclaim the city of Erebor and all its riches from the dragon Smaug.",
    img: "./mediaFiles/hobbit1poster.jpg",
    watch:
      "https://www.primevideo.com/region/na/detail/The-Hobbit-An-Unexpected-Journey/0LCQAXV4R5PUUZUGFWHO7ZBTD3",
  },
  {
    id: 4,
    title: "the hobbit: desolation of smaug",
    info: "Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug.",
    img: "./mediaFiles/hobbit2poster.jpg",
    watch:
      "https://www.primevideo.com/region/na/detail/The-Hobbit-The-Desolation-Of-Smaug/0QKBS9KVC00BVV35PHUAO115QJ",
  },
  {
    id: 5,
    title: "the hobbit: battle of the five armies",
    info: "Bilbo fights against a number of enemies to save the life of his Dwarf friends and protects the Lonely Mountain after a conflict arises.",
    img: "./mediaFiles/hobbit3poster.jpg",
    watch:
      "https://www.primevideo.com/region/na/detail/The-Hobbit-The-Battle-of-the-Five-Armies/0R5O39EMUMM29GN1290M2TC5QX",
  },
];

const movieTitle = document.querySelector(".movieTitle");
const info = document.querySelector(".info");
const movieImg = document.querySelector(".poster-img");
const watch = document.querySelector(".watch");
const container = document.querySelector(".btn-container");

const sliderBtns = movies.map(function (movie) {
  return `<button onclick="showMovie(${movie.id})"></button>`;
});
container.innerHTML = sliderBtns;

function showMovie(id) {
  const content = movies[id];
  movieImg.src = content.img;
  info.textContent = content.info;
  movieTitle.textContent = content.title;
  watch.href = content.watch;
}

/* accordion function */
const items = document.querySelectorAll(".accordion-header");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("active");
  });
});

/* charachter slideshow function */
const characters = [
  {
    id: 0,
    name: "legolas",
    info: "Legolas is a Sindar Elf of the Woodland Realm, son of King Thranduil and one of the nine members of the Fellowship who set out to destroy the One Ring",
    img: "./mediaFiles/legolas1.jpg",
  },
  {
    id: 1,
    name: "aragorn",
    info: "Aragorn, son of Arathorn was a Ranger of the North, first introduced with the name Strider and later revealed to be the heir of Isildur, an ancient King of Arnor and Gondor.",
    img: "./mediaFiles/aragorn.jpg",
  },
  {
    id: 2,
    name: "gimli",
    info: "Gimli is a fictional character in J. R. R. Tolkien's Middle-earth, appearing as a member of the Fellowship of the Ring in The Lord of the Rings. A dwarf warrior, he is the son of Glóin, a member of Thorin's company in Tolkien's earlier book The Hobbit.",
    img: "./mediaFiles/gimli.jpg",
  },
  {
    id: 3,
    name: "gandalf the white",
    info: "He is a wizard, one of the Istari order, and the leader of the Fellowship of the Ring. Tolkien took the name 'Gandalf' from the Old Norse 'Catalogue of Dwarves' in the Völuspá.",
    img: "./mediaFiles/gandalf.jpg",
  },
  {
    id: 4,
    name: "Samwise Gamgee",
    info: "A hobbit, Samwise is the chief supporting character of The Lord of the Rings, serving as the sidekick of the protagonist Frodo Baggins.",
    img: "./mediaFiles/samwise.jpg",
  },
  {
    id: 5,
    name: "boromir",
    info: "He appears in the first two volumes of The Lord of the Rings, and is mentioned in the last volume, The Return of the King. He was the heir of Denethor II and the elder brother of Faramir.",
    img: "./mediaFiles/boromir.webp",
  },
  {
    id: 6,
    name: "frodo baggins",
    info: "Frodo is a hobbit of the Shire who inherits the One Ring from his cousin Bilbo Baggins, described familiarly as 'uncle', and undertakes the quest to destroy it in the fires of Mount Doom in Mordor.",
    img: "./mediaFiles/frodo.jpg",
  },
  {
    id: 7,
    name: "Meriadoc Brandybuck",
    info: "Featured throughout his most famous work, The Lord of the Rings. Merry is described as one of the closest friends of Frodo Baggins, the main protagonist.",
    img: "./mediaFiles/merry.jpg",
  },
  {
    id: 8,
    name: "Peregrin Took",
    info: "Peregrin Took, commonly known simply as Pippin, is a fictional character from J. R. R. Tolkien's fantasy novel The Lord of the Rings. He is closely tied with his friend and cousin, Merry Brandybuck, and the two are together during most of the story.",
    img: "./mediaFiles/pippin.webp",
  },
];

const characterPhoto = document.querySelector(".character-photo");
const characterName = document.querySelector(".character-name");
const characterInfo = document.querySelector(".character-info");
const slideBtnContainer = document.querySelector(".character-toggle-container");

const charSlideShow = characters.map(function (fellowship) {
  return `<button class="char-btn" onclick="slideShow(${fellowship.id})"></button>`;
});

slideBtnContainer.innerHTML = charSlideShow;

function slideShow(id) {
  const characterShow = characters[id];
  characterPhoto.src = characterShow.img;
  characterName.textContent = characterShow.name;
  characterInfo.textContent = characterShow.info;
}
