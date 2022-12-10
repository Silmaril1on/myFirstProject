const videos = [
    {
        id: 1,
        video: './mediaFiles/hobbit3.mp4',
    },
    {
        id: 2,
        video: './mediaFiles/hobbit33.mp4',
    },
    
];

const nextBtn = document.querySelector(".nextBtnn");
const video = document.getElementById("trailer");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPlaylist(currentItem);
});

function showPlaylist (playlist) {
   const item = videos[playlist];
   video.src = item.video;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > videos.length - 1) {
        currentItem = 0;
    }
    showPlaylist(currentItem);
});


// image gallery // 

const gallery = [
    {img: './mediaFiles/Hobbitfivearmies_052.webp'},
    {img: './mediaFiles/Hobbitfivearmies_021.webp'},
    {img: './mediaFiles/Hobbitfivearmies_022.webp'},
    {img: './mediaFiles/Hobbitfivearmies_023.webp'},
    {img: './mediaFiles/Hobbitfivearmies_024.webp'},
    {img: './mediaFiles/Hobbitfivearmies_026.webp'},
    {img: './mediaFiles/Hobbitfivearmies_030.webp'},
    {img: './mediaFiles/Hobbitfivearmies_031.webp'},
    {img: './mediaFiles/Hobbitfivearmies_032.webp'},
    {img: './mediaFiles/Hobbitfivearmies_033.webp'},
    {img: './mediaFiles/Hobbitfivearmies_035.webp'},
    {img: './mediaFiles/Hobbitfivearmies_036.webp'},
    {img: './mediaFiles/Hobbitfivearmies_037.webp'},
    {img: './mediaFiles/Hobbitfivearmies_039.webp'},
    {img: './mediaFiles/Hobbitfivearmies_041.webp'},
    {img: './mediaFiles/Hobbitfivearmies_042.webp'},
    {img: './mediaFiles/Hobbitfivearmies_044.webp'},
    {img: './mediaFiles/Hobbitfivearmies_046.webp'},
    {img: './mediaFiles/Hobbitfivearmies_047.webp'},
    {img: './mediaFiles/Hobbitfivearmies_050.webp'},
    {img: './mediaFiles/Hobbitfivearmies_051.webp'},
    {img: './mediaFiles/Hobbitfivearmies_052.webp'},
    {img: './mediaFiles/Hobbitfivearmies_055.webp'},
    {img: './mediaFiles/Hobbitfivearmies_056.webp'},
    {img: './mediaFiles/Hobbitfivearmies_057.webp'},
];

let pictures = 0;


const galleryBtn = document.querySelector(".galleryBtn");
const prevBtn = document.querySelector(".prevBtn");
const img = document.querySelector(".pictures");

window.addEventListener("DOMContentLoaded", function() {
    showPictures(pictures);
});

function showPictures (posters) {
    const pics = gallery[posters];
    img.src = pics.img;
}

galleryBtn.addEventListener("click", function() {
    pictures++;
    if(pictures > gallery.length - 1) {
        pictures = 0;
    }
    showPictures(pictures);
});

prevBtn.addEventListener("click", function() {
    pictures++;
    if(pictures > gallery.length - 1) {
        pictures = 0;
    }
    showPictures(pictures);
});
