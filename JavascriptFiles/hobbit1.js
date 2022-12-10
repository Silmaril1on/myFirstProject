const videos = [
    {
        id: 1,
        video: './mediaFiles/hobbit1.mp4',
    },
    {
        id: 2,
        video: './mediaFiles/hobbit11.mp4',
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
    {img: './mediaFiles/HobbitJourney_132.webp'},
    {img: './mediaFiles/HobbitJourney_038.webp'},
    {img: './mediaFiles/HobbitJourney_040.webp'},
    {img: './mediaFiles/HobbitJourney_043.webp'},
    {img: './mediaFiles/HobbitJourney_045.webp'},
    {img: './mediaFiles/HobbitJourney_047.webp'},
    {img: './mediaFiles/HobbitJourney_048.webp'},
    {img: './mediaFiles/HobbitJourney_050.webp'},
    {img: './mediaFiles/HobbitJourney_051.webp'},
    {img: './mediaFiles/HobbitJourney_053.webp'},
    {img: './mediaFiles/HobbitJourney_055.webp'},
    {img: './mediaFiles/HobbitJourney_056.webp'},
    {img: './mediaFiles/HobbitJourney_057.webp'},
    {img: './mediaFiles/HobbitJourney_058.webp'},
    {img: './mediaFiles/HobbitJourney_059.webp'},
    {img: './mediaFiles/HobbitJourney_061.webp'},
    {img: './mediaFiles/HobbitJourney_063.webp'},
    {img: './mediaFiles/HobbitJourney_064.webp'},
    {img: './mediaFiles/HobbitJourney_065.webp'},
    {img: './mediaFiles/HobbitJourney_067.webp'},
    {img: './mediaFiles/HobbitJourney_068.webp'},
    {img: './mediaFiles/HobbitJourney_071.webp'},
    {img: './mediaFiles/HobbitJourney_072.webp'},
    {img: './mediaFiles/HobbitJourney_075.webp'},
    {img: './mediaFiles/HobbitJourney_078.webp'},
    {img: './mediaFiles/HobbitJourney_117.webp'},
    {img: './mediaFiles/HobbitJourney_118.webp'},
    {img: './mediaFiles/HobbitJourney_119.webp'},
    {img: './mediaFiles/HobbitJourney_121.webp'},
    {img: './mediaFiles/HobbitJourney_122.webp'},
    {img: './mediaFiles/HobbitJourney_123.webp'},
    {img: './mediaFiles/HobbitJourney_124.webp'},
    {img: './mediaFiles/HobbitJourney_128.webp'},
    {img: './mediaFiles/HobbitJourney_130.webp'},
    {img: './mediaFiles/HobbitJourney_131.webp'},
    {img: './mediaFiles/HobbitJourney_037.webp'},
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

