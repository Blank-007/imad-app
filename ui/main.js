console.log('Loaded!');

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 100;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function () {
   img.style.marginLeft = '100px';
   
};