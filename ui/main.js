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


var submit = document.getElementById('click');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                
                var names = req.response.Text;
                names = JSON.parse(names);
                var list='';
                for (var i=0;i<names.length;i++){
                    list += '<li>' + names[i] +'</li>';
                }
                var ul=document.getElementById('ulist');
                ul.innerHTML=list;
                
            }            
        }
    };
    var nameInput = document.getElementById('name');
var name = nameInput.value;
    request.open('GET','http://mvabhinav1998.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    

};