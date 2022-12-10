const book = document.getElementById("book-container");
const silmarilionBtn = document.getElementById("silmarilion-btn");


document.onclick = function (e) {
  if (e.target.id !== "silmarilion-btn") {
    book.classList.remove("active");
  }
};

silmarilionBtn.onclick = function () {
  book.classList.toggle("active");
};

/* lord of the rings book content */
const books = [
  {
    id: 0,
    bookImg: "./mediaFiles/fellowship.jpg",
    bookHead: "<b>Originally published:</b> July 29, 1954",
    bookInfo:
      "The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author Tolkien. It is followed by Two Towers and  Return of the King",
  },
  {
    id: 1,
    bookImg: "./mediaFiles/twotowers.jpg",
    bookHead: "<b>Originally published:</b> November 11, 1954",
    bookInfo:
      "The Two Towers is the second volume of J. R. R. Tolkien's high fantasy novel The Lord of the Rings. It is preceded by The Fellowship of the Ring and followed by The Return of the King",
  },
  {
    id: 2,
    bookImg: "./mediaFiles/returnoftheking.jpg",
    bookHead: "<b>Originally published:</b> October 20, 1955",
    bookInfo:
      "The Return of the King is the third and final volume of J. R. R. Tolkien's The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. It was published in 1955.",
  },
];

const cardWraper = document.querySelector(".card-wraper");

const bookCards = books.map(function (book) {
  return `<div class="lotr-book-card">
                <div class="imgCont">
                    <img src="${book.bookImg}" class="lotrImg" alt="book">
                </div>
                <div class="infoCont">
                    <h3 class="bookHead"> ${book.bookHead}</h3> <br>
                    <p class="bookInfo">${book.bookInfo}</p>
                </div>
            </div>`;
});

cardWraper.innerHTML = bookCards;


/* trio book section*/
const trioBooks = [
  {
    id: 0,
    bookImg: "./mediaFiles/hurin.jfif",
    bookHead: "the children of hurin",
    bookInfo:
      "The Children of Húrin is an epic fantasy novel which forms the completion of a tale by J. R. R. Tolkien. He wrote the original version of the story in the late 1910s, revised it several times later, but did not complete it before his death in 1973. <br><br> Long before the One Ring was forged in the fires of Mount Doom, one man—Húrin—dared to defy Morgoth, the first and greatest of the dark lords to plague Middle-earth. Thus did he and his children, Túrin and Niënor, earn the enmity of a merciless foe that would shape the destiny of all the ages to come. ",
  },
  {
    id: 1,
    bookImg: "./mediaFiles/fallofgondolin.jpg",
    bookHead: "fall of gondolin",
    bookInfo:
      "J. R. R. Tolkien's The Fall of Gondolin is one of the stories which formed the basis for a section in his posthumously-published work, The Silmarillion, with a version later appearing in The Book of Lost Tales. <br><br> In the Tale of The Fall of Gondolin are two of the greatest powers in the world. There is Morgoth of the uttermost evil, unseen in this story but ruling over a vast military power from his fortress of Angband. Deeply opposed to Morgoth is Ulmo, second in might",
  },
  {
    id: 2,
    bookImg: "./mediaFiles/berenluthien.jpg",
    bookHead: "beren and luthien",
    bookInfo:
      "Beren and Lúthien is a compilation of multiple versions of the epic fantasy Lúthien and Beren by J. R. R. Tolkien, one of Tolkien's earliest tales of Middle-earth. It is edited by Christopher Tolkien. It is the story of the love and adventures of the mortal Man Beren and the immortal Elf-maiden Lúthien. <br><br> The tale of Beren and Lúthien was, or became, an essential element in the evolution of The Silmarillion, the myths and legends of the First Age of the World conceived by J.R.R. Tolkien. Returning from France and the battle of the Somme at the end of 1916, he wrote the tale in the following year.",
  },
];

const trioWraper = document.querySelector(".trio-book-cont");

const trioBook = trioBooks.map(function (book) {
  return ` <div class="trio-card" data-aos="zoom-in" data-aos-duration="3000">
            <div class="img-cont">
                <img src="${book.bookImg}" class="trio-img" alt="">
            </div>
            <div class="intro">
                <h1>${book.bookHead}</h1>
                <p>${book.bookInfo}</p>
            </div>
        </div>`;
});

trioWraper.innerHTML = trioBook;

/* double book section */
const doubleBooks = [
  {
    id: 0,
    bookImg: "./mediaFiles/hobbit.jpg",
    bookHead: "THE HOBBIT",
    bookInfo:
      "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. <br><br> 'In a hole in the ground there lived a hobbit.' So begins one of the most beloved and delightful tales in the English language—Tolkien's prelude to The Lord of the Rings. Set in the imaginary world of Middle-earth, at once a classic myth and a modern fairy tale, The Hobbit is one of literature's most enduring and well-loved novels. <br><br> Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
  },
  {
    id: 1,
    bookImg: "./mediaFiles/unfinishedtales.jpg",
    bookHead: "<span>UNFINISHED TALES</span>",
    bookInfo:
      "Unfinished Tales of Númenor and Middle-earth is a collection of stories and essays by J. R. R. Tolkien that were never completed during his lifetime, but were edited by his son Christopher Tolkien and published in 1980. <br><br> <span><b>THE FIRST AGE</b></span> <br> Young lord Turin fled from Morgoth's forces, wandering in disguise as an outlaw until he could avenge his people against the evil that had razed his home. But Turin lived under the curse of a hateful dragon—and the lord's  secret identity hid more than he knew. <br><br> <span> <b>THE SECOND AGE</b></span> <br> Prince Aldarion's heart belonged to Erendis, but his passion lay with the ocean, and the great ships that sailed beyond the sight of the land. But no man could serve two mistresses—and no mortal's love could withstand the lure of the sea. <br><br> <span> <b>THE THIRD AGE</b></span> <br> The great warrior Isildur escaped with the One Ring, cut from the Dark Lord Sauron's hand, to hide it from Evil's grasp.But Isildur would learn the burden of a ringbearer—and of its temptation and despair. ",
  },
];

const doubleBookCont = document.querySelector(".double-book-cont");

const doubleBook = doubleBooks.map(function (book) {
  return `<div class="flip-card">
            <div class="front">
                <img src="${book.bookImg}" alt="">
            </div>
            <div class="back">
                <h1>${book.bookHead}</h1>
                <p>${book.bookInfo}</p>
            </div>
          </div>`;
});

doubleBookCont.innerHTML = doubleBook;