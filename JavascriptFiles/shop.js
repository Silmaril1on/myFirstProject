const products = [
  {
    id: 1,
    title: "anduril sword",
    category: "swords",
    price: 215.99,
    img: "./mediaFiles/anduril.jpg",
    info: "Anduril Swords for sale are a detailed replica of the one wielded by Aragorn, King of Gondor in the Lord of the Rings movies. This is an exact replica to the real prop used in the movies.",
  },
  {
    id: 2,
    title: "glamdring sword",
    category: "swords",
    price: 219.99,
    img: "./mediaFiles/glamdring.jpg",
    info: "Glamdring Swords for sale are a detailed replica of the one carried by Gandalf in the Lord of the Rings movies. These pieces are exceptional replicas to the real prop that was manufactured by Weta Workshop of New Zealand for the LOTR films.",
  },
  {
    id: 3,
    title: "horn of gondor",
    category: "jewelry",
    price: 229.99,
    img: "./mediaFiles/horn.jpg",
    info: "The Horn Of Gondor is an accurately detailed replica from the popular Lord of the Rings movies. It is crafted in leather and cast Polyresin. The finely-molded details make this replica appear as though it is made of real polished brass and steer horn and would be fit for Boromir himself.",
  },
  {
    id: 4,
    title: "hadhafang sword",
    category: "swords",
    price: 225.99,
    img: "./mediaFiles/hadhafang.jpg",
    info: "Hadhafang Swords or also known as the Arwen Evenstar Swords for sale are exact replicas of the swords seen in the Lord of the Rings movies.",
  },
  {
    id: 5,
    title: "eowyn sword",
    category: "swords",
    price: 259.99,
    img: "./mediaFiles/eowyn.jpg",
    info: "Official Eowyn Swords from the Lord of the Rings. The handle features a solid metal guard and pommel with antiqued brass plated finish, the hilts are cast in the symbols of the famed horses of Rohan and the grip is genuine leather wrapped.",
  },
  {
    id: 6,
    title: "theoden's sword",
    category: "swords",
    price: 245.99,
    img: "./mediaFiles/herugrim.jpg",
    info: "King Theoden Swords for sale are exact replicas of the Herugrim seen in the Lord of the Rings movies. These officially licensed movie swords measure 36 ½ inches in all.",
  },
  {
    id: 7,
    title: "sword of eomer",
    category: "swords",
    price: 225.99,
    img: "./mediaFiles/guthwine.jpg",
    info: "Guthwine, the Sword of Eomer is a detailed replica from the Lord of The Rings films. This LOTR movie collectible is an accurately and finely detailed replica of the actual filming prop built by Weta Workshop.",
  },
  {
    id: 8,
    title: "thranduil's sword",
    category: "swords",
    price: 215.99,
    img: "./mediaFiles/thranduil.jpg",
    info: "Thranduil Swords for sale are the sword used by the Elven King in the Hobbit movie. These swords are meticulously crafted after the real props designed by Weta Workshop for the film.",
  },
  {
    id: 9,
    title: "orcrist sword",
    category: "swords",
    price: 229.99,
    img: "./mediaFiles/orcrist.jpg",
    info: "Orcrist Swords of Thorin for sale are from The Hobbit movie. These beautiful swords are a detailed replica of the real props made by Weta Workshop and used by Thorin Oakenshield in the Hobbit films.",
  },
  {
    id: 10,
    title: "legolas knives",
    category: "swords",
    price: 235.99,
    img: "./mediaFiles/legolas.jpg",
    info: "Legolas Swords for sale are just like the one wielded by the Elf Prince from Mirkwood in the Lord of the Rings movies. These pieces are exceptional replicas of the real props that were designed by Weta Workshop for the films.",
  },
  {
    id: 11,
    title: "gimli battle axe",
    category: "staffs",
    price: 229.99,
    img: "./mediaFiles/gimliaxe.jpg",
    info: "Bearded Axe of Gimli from The Lord of the Rings. The dwarves carried many axes, but none as powerful as the Bearded Axe of Gimli. This replica piece stretches a massive 34' and support an 8' axe blade.",
  },
  {
    id: 12,
    title: "mace of azog",
    category: "staffs",
    price: 325.99,
    img: "./mediaFiles/azog.jpg",
    info: "Mace of Azog the Defiler for sale measures 40 inches in all with a 12 13/16th inch mace head. From the movie The Hobbit, this is the primary weapon of Azog the Defiler. The massive Mace has been carefully modeled after the actual prop used in the film.",
  },
  {
    id: 13,
    title: "Illuminati staff",
    category: "staffs",
    price: 265.99,
    img: "./mediaFiles/illuminate.jpg",
    info: "Illuminated Staff of the Wizard Gandalf for sale is an enormous 73 inches in all. This special edition, meticulously detailed replica of the Gandalf Staff from the Hobbit Movies features an illuminated crown just like the staff seen in The Hobbit: The Desolation of Smaug.",
  },
  {
    id: 14,
    title: "staff of gandalf",
    category: "staffs",
    price: 219.99,
    img: "./mediaFiles/gandalfwhite.jpg",
    info: "The Staff of Gandalf the White for sale is an detailed replica to the one carried by Gandalf in the Lord of the Rings movies. These pieces are an exceptional replica of the real prop that was designed by Weta Workshop of New Zealand for the LOTR film series.",
  },
  {
    id: 15,
    title: "helmet of sauron",
    category: "helmets",
    price: 455.99,
    img: "./mediaFiles/sauronhelm.jpg",
    info: "War Helm of Sauron for sale is just like the one worn by the powerful villain in the Hobbit movies. These pieces are an exceptional replica of the real prop that was manufactured by Weta Workshop of New Zealand for the films.",
  },
  {
    id: 16,
    title: "helmet of isildur",
    category: "helmets",
    price: 199.99,
    img: "./mediaFiles/isil.jpg",
    info: "Helmet of King Isildur for sale weighs over 10 pounds. The Limited Edition Helmet of King Isildur is an officially licensed replica from the first in the popular Lord of The Rings movie trilogy.",
  },
  {
    id: 17,
    title: "rivendel elf helmet",
    category: "helmets",
    price: 345.99,
    img: "./mediaFiles/elvenhelm.jpg",
    info: "Rivendell Elf Helmet for sale weighs over 15 pounds. The Rivendell Elf Helmets are officially licensed replicas from the popular Hobbit movie and are meticulously crafted from the real film prop used in the Hobbit: Desolation of Smaug.",
  },
  {
    id: 18,
    title: "helm of eomer",
    category: "helmets",
    price: 355.99,
    img: "./mediaFiles/eomerhelm.jpg",
    info: "The officially licensed Helmet of Éomer is manufactured of reinforced polyresin with real genuine leather lining, padding and leather chin strap.",
  },
  {
    id: 19,
    title: "bilbo sting sword",
    category: "swords",
    price: 155.99,
    img: "./mediaFiles/sting.jpg",
    info: "Sting Sword of Bilbo Baggins from The Hobbit Movie. This officially licensed and authentically detailed replica made by United Cutlery is a reproduction of the actual filming prop used in the movie. ",
  },
  {
    id: 20,
    title: "mirkwood double bladed polearm",
    category: "staffs",
    price: 289.99,
    img: "./mediaFiles/polearm.jpg",
    info: "Mirkwood Double-Bladed Polearm for sale is the type used by the Woodland Guard. These polearms feature the same styling as the real props designed by Weta Workshop for the Hobbit movie.",
  },
  {
    id: 21,
    title: "nazgul dagger",
    category: "swords",
    price: 155.99,
    img: "./mediaFiles/dagger.jpg",
    info: "Morgul Daggers for sale are the officially licensed Blade of Nazgul from the Hobbit movie. Made by United Cutlery these are meticulously crafted replicas of the real daggers used in the award-winning movie adaptation of The Hobbit.",
  },
  {
    id: 22,
    title: "high elven sword",
    category: "swords",
    price: 325.99,
    img: "./mediaFiles/elven.jpg",
    info: "Officially Licensed High Elven Warrior Sword is almost 50 inches long. These are exact replicas of the High Elven Warrior Sword that was used in the Lord of the Rings movie.",
  },
  {
    id: 23,
    title: "witch king sword",
    category: "swords",
    price: 229.99,
    img: "./mediaFiles/nazgul.jpg",
    info: "This Sword of the Witch-King is an officially licensed replica from The Lord of the Rings triology. United Cutlery, industry leader in fine movie reproductions, has meticulously recreated the actual filming prop using only the finest grade materials and craftsmanship. Close attention to detail was a top priority.",
  },
  {
    id: 24,
    title: "theoden's helmet",
    category: "helmets",
    price: 369.99,
    img: "./mediaFiles/theodenhelm.jpg",
    info: "Théoden was the noble and courageous King of Rohan and Lord of the Riddermark. He led his people to victory against the Uruk-hai in the Battle of Helm's Deep, despite overwhelming odds. He then rallied his forces in the defense of Gondor, to protect the white city of Minas Tirith and the hope of all Middle-earth.",
  },
  {
    id: 25,
    title: "staff of moria",
    category: "staffs",
    price: 209.99,
    img: "./mediaFiles/moria.jpg",
    info: "he staff of the Wizard Gandalf the Grey was a very powerful talisman and tool with which to exercise his enormous powers. After Gandalf's Pipe Staff was taken from him by the wizard Saruman when he was imprisoned in Orthanc, he aquired a new staff in Rivendell after his escape.",
  },
  {
    id: 26,
    title: "ringwraith sword",
    category: "swords",
    price: 229.99,
    img: "./mediaFiles/ringwraith.jpg",
    info: "Ringwraiths, also called Dark Riders or the Nazgul, are the shadow servants of Sauron. There are nine of them to represent the nine mortal kings that Sauron corrupted with his Ring of Power. They can sense when the Ring of Power is near and can see the Ringbearer even more clearly when he puts it on.",
  },
  {
    id: 27,
    title: "helm of elendil",
    category: "helmets",
    price: 349.99,
    img: "./mediaFiles/elendil.jpg",
    info: "King Elendil was Isildur's father, who was the original bearer of the great sword Narsil, as seen in the prologue of the New Line Cinema motion picture The Lord of the Rings: The Fellowship of the Ring.",
  },
  {
    id: 29,
    title: "sauron's mace",
    category: "staffs",
    price: 389.99,
    img: "./mediaFiles/saumace.jpg",
    info: "A replica of the massive mace wielded by the Dark Lord Sauron in the prologue of The Lord of the Rings: The Fellowship of the Ring. When Sauron's forces battled the Last Alliance of Elves and Men on the slopes of Mount Doom.",
  },
  {
    id: 30,
    title: "spear of eomer",
    category: "staffs",
    price: 279.99,
    img: "./mediaFiles/speareomer.jpg",
    info: "Éomer was a captain of the king's cavalry, Marshal of the Mark, and one of Rohan's mightiest warriors. He bravely fought alongside King Theoden against the forces of Mordor at the battle of Helm's Deep and on the Pelennor Fields to protect the white city of Minas Tirith and the hope of all Middle-earth.",
  },
  {
    id: 31,
    title: "staff of thranduil",
    category: "staffs",
    price: 199.99,
    img: "./mediaFiles/thranduilstaff.jpg",
    info: "This Staff of Thranduil for sale is one used by the Elven King in the Hobbit movie. Staff is accurately modeled after the staff used by Thranduil, the father of Legolas.",
  },
  {
    id: 32,
    title: "helm of witch king",
    category: "helmets",
    price: 329.99,
    img: "./mediaFiles/witchking.jpg",
    info: "This authentically detailed helmet is the official reproduction of the War helm of the Witchking prominently featured in The Lord of the Rings, The Return of the King. This helmet was manufactured by United Cutlery Brands, the industry leader in fine movie reproductions.",
  },
  {
    id: 32,
    title: "gondorian helm",
    category: "helmets",
    price: 349.99,
    img: "./mediaFiles/gondorian.jpg",
    info: "he Gondorian Infantry were the proud defenders of the city of Minas Tirith, as seen in the New Line Cinema motion picture The Lord of the Rings: The Return of the King. This replica of the Gondorian Infantry Helm is handcrafted in iron with embossed decorations and a weathered and distressed finish.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  showProductItems(products);
  displayMenuButtons();
});

// filter items
function showProductItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}> <br>
        <h2 class="item-name">${item.title}</h2>
        <h2 class="item-price">$ ${item.price}</h2>
        <p class="item-text">${item.info}</p>
        <form action="">
        <label for="quantity"></label>
        <input class="qty" type="text" name="qty" size="2" value="1">
        <input type="submit" value="Buy Official Replica" class="buy">
    </form>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// button function
function displayMenuButtons() {
  const categories = products.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const productCategory = products.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });
      if (category === "all") {
        showProductItems(products);
      } else {
        showProductItems(productCategory);
      }
    });
  });
}
