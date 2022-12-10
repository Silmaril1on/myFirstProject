const videos = [
    {
        id: 1,
        video: './mediaFiles/return1.mp4',
    },
    {
        id: 2,
        video: './mediaFiles/return2.mp4',
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


//  gallery button // 

const gallery = [
  {img: './mediaFiles/lotrking_082.webp'},
  {img: './mediaFiles/lotrking_077.webp'},
  {img: './mediaFiles/lotrking_078.webp'},
  {img: './mediaFiles/lotrking_079.webp'},
  {img: './mediaFiles/lotrking_089.webp'},
  {img: './mediaFiles/lotrking_090.webp'},
  {img: './mediaFiles/lotrking_091.webp'},
  {img: './mediaFiles/lotrking_092.webp'},
  {img: './mediaFiles/lotrking_100.webp'},
  {img: './mediaFiles/lotrking_102.webp'},
  {img: './mediaFiles/lotrking_110.webp'},
  {img: './mediaFiles/lotrking_111.webp'},
  {img: './mediaFiles/lotrking_112.webp'},
  {img: './mediaFiles/lotrking_113.webp'},
  {img: './mediaFiles/lotrking_137.webp'},
  {img: './mediaFiles/lotrking_147.webp'},
  {img: './mediaFiles/lotrking_157.webp'},
  {img: './mediaFiles/lotrking_167.webp'},
  {img: './mediaFiles/lotrking_168.webp'},
  {img: './mediaFiles/lotrking_169.webp'},
  {img: './mediaFiles/lotrking_177.webp'},
  {img: './mediaFiles/lotrking_178.webp'},
  {img: './mediaFiles/lotrking_179.webp'},
  {img: './mediaFiles/lotrking_198.webp'},
  {img: './mediaFiles/lotrking_211.webp'},
  {img: './mediaFiles/lotrking_212.webp'},
  {img: './mediaFiles/lotrking_221.webp'},
  {img: './mediaFiles/lotrking_222.webp'},
  {img: './mediaFiles/lotrking_232.webp'},
  {img: './mediaFiles/lotrking_243.webp'},
  {img: './mediaFiles/lotrking_252.webp'},
  {img: './mediaFiles/lotrking_262.webp'},
  {img: './mediaFiles/lotrking_263.webp'},
  {img: './mediaFiles/lotrking_272.webp'},
  {img: './mediaFiles/lotrking_273.webp'},
  {img: './mediaFiles/lotrking_293.webp'},
  {img: './mediaFiles/lotrking_305.webp'},
  {img: './mediaFiles/lotrking_306.webp'},
  {img: './mediaFiles/lotrking_307.webp'},
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


