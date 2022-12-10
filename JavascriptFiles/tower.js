const videos = [
    {
        id: 1,
        video: './mediaFiles/tower1.mp4',
    },
    {
        id: 2,
        video: './mediaFiles/tower2.mp4',
    },
    {
        id: 3,
        video: './mediaFiles/tower3.mp4',
    }
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

//gallery // 

const gallery = [
    {img: './mediaFiles/lotrtt_085.webp'},
    {img: './mediaFiles/lotrtt_029.webp'},
    {img: './mediaFiles/lotrtt_030.webp'},
    {img: './mediaFiles/lotrtt_032.webp'},
    {img: './mediaFiles/lotrtt_034.webp'},
    {img: './mediaFiles/lotrtt_035.webp'},
    {img: './mediaFiles/lotrtt_038.webp'},
    {img: './mediaFiles/lotrtt_039.webp'},
    {img: './mediaFiles/lotrtt_040.webp'},
    {img: './mediaFiles/lotrtt_041.webp'},
    {img: './mediaFiles/lotrtt_042.webp'},
    {img: './mediaFiles/lotrtt_044.webp'},
    {img: './mediaFiles/lotrtt_045.webp'},
    {img: './mediaFiles/lotrtt_046.webp'},
    {img: './mediaFiles/lotrtt_047.webp'},
    {img: './mediaFiles/lotrtt_050.webp'},
    {img: './mediaFiles/lotrtt_053.webp'},
    {img: './mediaFiles/lotrtt_054.webp'},
    {img: './mediaFiles/lotrtt_055.webp'},
    {img: './mediaFiles/lotrtt_057.webp'},
    {img: './mediaFiles/lotrtt_059.webp'},
    {img: './mediaFiles/lotrtt_063.webp'},
    {img: './mediaFiles/lotrtt_064.webp'},
    {img: './mediaFiles/lotrtt_065.webp'},
    {img: './mediaFiles/lotrtt_078.webp'},
    {img: './mediaFiles/lotrtt_080.webp'},
    {img: './mediaFiles/lotrtt_081.webp'},
    {img: './mediaFiles/lotrtt_028.webp'},
    {img: './mediaFiles/lotrtt_086.webp'},
    {img: './mediaFiles/lotrtt_087.webp'},
    {img: './mediaFiles/lotrtt_088.webp'},
    {img: './mediaFiles/lotrtt_089.webp'},
    {img: './mediaFiles/lotrtt_090.webp'},
    {img: './mediaFiles/lotrtt_094.webp'},
    {img: './mediaFiles/lotrtt_095.webp'},
    {img: './mediaFiles/lotrtt_096.webp'},
    {img: './mediaFiles/lotrtt_097.webp'},
    {img: './mediaFiles/lotrtt_098.webp'},
    {img: './mediaFiles/lotrtt_099.webp'},
];

let pictures = 0;

const prevBtn = document.querySelector(".prevBtn");
const galleryBtn = document.querySelector(".galleryBtn");
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

