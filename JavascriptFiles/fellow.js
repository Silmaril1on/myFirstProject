const videos = [
    {
        id: 1,
        video: './mediaFiles/fellow.mp4',
    },
    {
        id: 2,
        video: './mediaFiles/fellow2.mp4',
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
    {img: './mediaFiles/fellowshipp.jpg'},
    {img: './mediaFiles/gand.jpg'},
    {img: './mediaFiles/lorien.jpg'},
    {img: './mediaFiles/arw.jpg'},
    {img: './mediaFiles/bilbo.jpg'},
    {img: './mediaFiles/council.jpg'},
    {img: './mediaFiles/vigo.jpg'},
    {img: './mediaFiles/saruman.jpg'},
    {img: './mediaFiles/gimlii.jpg'},
    {img: './mediaFiles/ringwra.jpg'},
    {img: './mediaFiles/lorien.jpg'},
    {img: './mediaFiles/leg.jpg'},
    {img: './mediaFiles/gandalff.jpg'},
    {img: './mediaFiles/hobbits.jpg'},
    {img: './mediaFiles/frodoo.jpg'},
    {img: './mediaFiles/sauron.jpg'},
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














