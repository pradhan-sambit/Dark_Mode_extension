
(function() {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

    let media = document.querySelectorAll('img, picture, video, div[style*="background-image"], svg');

    media.forEach(e => {
        e.style.filter = "invert(0) hue-rotate(0deg)";
    });
})();
