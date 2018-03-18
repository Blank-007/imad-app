console.log('Loaded!');

var img = document.getElementById('image');
var marginleft = 0;
function marginRight () {
    marginleft = marginleft +10;
    image.style.marginLeft(marginleft + 'px');
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
}

