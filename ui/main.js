console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
madi.onClick = function () {
   var interval = setInterval(moveRight,100);
}