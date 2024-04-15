var objectToSend =new Map();
(function() {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    let media = document.querySelectorAll('img, picture, video, div[style*="background-image"], svg');

    media.forEach(e => {
        e.style.filter = "invert(1) hue-rotate(180deg)";
    });
    objectToSend.set(location.hostname,"dark");
    
    
})();

