/* parallax */ 
const container = document.querySelector(".main-container");
window.addEventListener("scroll", function () {
  container.style.opacity = 1 - +this.window.pageYOffset / 600 + "";
});

/* circle text */
const text = document.querySelector(".text h3");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 3.31}deg)">${char}</span>`
  )
  .join("");

/* elves */
const elves = [
  {
    id: 0,
    perName: "legolas",
    perInfo:
      "Legolas was a Sindar Elf who was part of the Fellowship of the Ring in the Third Age. Son of the Elvenking Thranduil of Mirkwood, Legolas was Mirkwood's prince, a messenger, and a master archer. With his keen eyesight, sensitive hearing and excellent bowmanship.",
    perImg: "./mediaFiles/legolassss.jpg",
  },
  {
    id: 1,
    perName: "galadriel",
    perInfo:
      "Galadriel was the 'Lady' of the woods of Lothlórien, which she ruled with Celeborn, her husband. One of the greatest of the Elves in Middle-earth, she surpassed nearly all others in beauty, knowledge, and power.  She bore Nenya, one of the three Elven rings of power. J.R.R. Tolkien thought of her as one of the mightiest and fairest of all Elves remaining in Middle-earth in the Third Age.  She was the only daughter and youngest child of Finarfin, prince of the Ñoldor, and Eärwen, whose cousin was Lúthien. Her elder brothers were Finrod Felagund, Orodreth, Angrod, and Aegnor.",
    perImg: "./mediaFiles/galadriel.jpg",
  },
  {
    id: 2,
    perName: "thranduil",
    perInfo:
      "Thranduil, son of Oropher, was an Elven king who ruled over the Woodland Realm in the Third Age. Though inherently cautious, his army was key to victory in the Battle of Five Armies and he defended his realm against the forces of Sauron in the War of the Ring. He was the father of the Elven prince of Mirkwood, Legolas, who was a member of the Fellowship of the Ring.",
    perImg: "./mediaFiles/thranduilll.jpg",
  },
  {
    id: 3,
    perName: "arwen",
    perInfo:
      "Arwen was the Half-elven daughter of Elrond and Celebrían. She was often called Arwen Undómiel or 'Evenstar'.",
    perImg: "./mediaFiles/arwen.webp",
  },
  {
    id: 4,
    perName: "tauriel",
    perInfo:
      "Tauriel was a Silvan Elf of Mirkwood. She has been described as a warrior and head of the Wood-elf guard.",
    perImg: "./mediaFiles/tauriel.jpg",
  },
  {
    id: 5,
    perName: "elrond",
    perInfo:
      "Elrond 'Star-Dome' Half-elf, Lord of Rivendell, was a mighty Elf-ruler of old who dwelt in Middle-earth from the First Age to the beginning of the Fourth Age. He was the father of Elladan and Elrohir and Arwen Undómiel, the eventual wife of Aragorn II Elessar.",
    perImg: "./mediaFiles/elrond.jpg",
  },
];

const personInfo = document.querySelector(".person-info");
const personName = document.querySelector(".person-name");
const personImg = document.querySelector(".person-img");
const buttonContainer = document.querySelector(".btn-container");

function changePerson(id) {
  const information = elves[id];
  personInfo.textContent = information.perInfo;
  personName.textContent = information.perName;
  personImg.src = information.perImg;
}

const toggles = elves.map(function (person) {
  return ` <div class="dot" onclick="changePerson(${person.id})"></div>`;
})

buttonContainer.innerHTML = toggles;



/* dwarves */
const dwarves = [
  {
    id: 0,
    dwName: "gimli",
    dwInfo: "gimli son of gloin",
    dwImg: "./css.charachters/gimli.webp",
  },
  {
    id: 1,
    dwName: "thorin",
    dwInfo: "gimli son of gloin",
    dwImg: "./css.charachters/gimli.webp",
  },
];

const races = [
  {
    id: 0,
    race: "elves",
    character: [
      {
        perName: "legolas",
        perInfo:
          "Legolas was a Sindar Elf who was part of the Fellowship of the Ring in the Third Age. Son of the Elvenking Thranduil of Mirkwood, Legolas was Mirkwood's prince, a messenger, and a master archer. With his keen eyesight, sensitive hearing and excellent bowmanship.",
        perImg: "./css/charachters/legolas.jpg",
      },
      {
        perName: "galadriel",
        perInfo:
          "Galadriel was the 'Lady' of the woods of Lothlórien, which she ruled with Celeborn, her husband. One of the greatest of the Elves in Middle-earth, she surpassed nearly all others in beauty, knowledge, and power.  She bore Nenya, one of the three Elven rings of power. J.R.R. Tolkien thought of her as one of the mightiest and fairest of all Elves remaining in Middle-earth in the Third Age.  She was the only daughter and youngest child of Finarfin, prince of the Ñoldor, and Eärwen, whose cousin was Lúthien. Her elder brothers were Finrod Felagund, Orodreth, Angrod, and Aegnor.",
        perImg: "./css/charachters/galadriel.jpg",
      },
      {
        perName: "thranduil",
        perInfo:
          "Thranduil, son of Oropher, was an Elven king who ruled over the Woodland Realm in the Third Age. Though inherently cautious, his army was key to victory in the Battle of Five Armies and he defended his realm against the forces of Sauron in the War of the Ring. He was the father of the Elven prince of Mirkwood, Legolas, who was a member of the Fellowship of the Ring.",
        perImg: "./css/charachters/thranduil.jpg",
      },
      {
        perName: "arwen",
        perInfo:
          "Arwen was the Half-elven daughter of Elrond and Celebrían. She was often called Arwen Undómiel or 'Evenstar'.",
        perImg: "./css/charachters/arwen.webp",
      },
      {
        perName: "tauriel",
        perInfo:
          "Tauriel was a Silvan Elf of Mirkwood. She has been described as a warrior and head of the Wood-elf guard.",
        perImg: "./css/charachters/tauriel.jpg",
      },
      {
        perName: "elrond",
        perInfo:
          "Elrond 'Star-Dome' Half-elf, Lord of Rivendell, was a mighty Elf-ruler of old who dwelt in Middle-earth from the First Age to the beginning of the Fourth Age. He was the father of Elladan and Elrohir and Arwen Undómiel, the eventual wife of Aragorn II Elessar.",
        perImg: "./css/charachters/elrond.jpg",
      },
    ],
  },
  {
    id: 1,
    race: "dwarves",
    character: [
      {
        name: "gimli",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "thorin",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "durin",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
    ],
  },
  {
    id: 2,
    race: "human",
    character: [
      {
        name: "araghorn",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "teoden",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "foromir",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
    ],
  },
  {
    id: 3,
    race: "orc",
    character: [
      {
        name: "urukhai",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "goblin",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
      {
        name: "troll",
        info: "loremipsumloremipsumloremipsumloremipsum",
      },
    ],
  },
  {
    id: 4,
    race: "hobbit",
    character: [
      {
        name: "frodo",
        info: "loremipsumloremipsumloremipsumloremipsum",
        img: "./image",
      },
      {
        name: "bilbo",
        info: "loremipsumloremipsumloremipsumloremipsum",
        img: "./image",
      },
      {
        name: "sam",
        info: "loremipsumloremipsumloremipsumloremipsum",
        img: "./image",
      },
    ],
  },
];
