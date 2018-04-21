var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                console.log('user logged in');
                alert('Logged in');
            } else if(request.status === 403) {
                alert('username/password is incorrect');
            } else if(request.status === 500) {
                alert('something went wrong');
            }          
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    request.open('POST','http://mvabhinav1998.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(JSON.stringify({username: username,password: password}));
    

};