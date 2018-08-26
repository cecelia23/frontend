var myButton = document.querySelector('button');
var myHeading=document.querySelector('h1');

localStorage.clear();

function setUserName(){
    var myName=prompt('input your name');
    localStorage.setItem('name',myName);
    myHeading.textContent=myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    var myStoreName=localStorage.getItem('name');
    myHeading.textContent=myStoreName;
}

myButton.onclick=function(){
    setUserName();
}