console.log('Loaded!');

var img = document.getElementById('image');
var marginleft = 0;
function moveRight () {
    marginleft = marginleft +5;
    img.style.marginLeft = marginleft+"px";
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
}

var button = document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
         
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }            
        }
    };
    request.open('GET','http://mvabhinav1998.imad.hasura-app.io/counter',true);
    request.send(null);

} ;

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('click');
submit.onclick = function () {
    
    
    
    var names = ['name1','name2','name3','name4'];
    var list='';
    for (var i=0;i<names.length;i++){
        list += '<li>' + name[i] +'<li>';
    }
    var ul=document.getElementById('ulist');
    ul.innerHTML=list;
}