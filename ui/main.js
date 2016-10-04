console.log('Loaded!');

//Change text of an Div element
var ele=document.getElementById('lblmsg1');
ele.innerHTML='This is new value from *.js file.';

//Shift an image, when user click on that image
var ig=document.getElementById('img11');
var mrleft=0;
function moveR(){
    mrleft=mrleft+10;
    ig.style.marginLeft=mrleft+'px';
}

ig.onclick=function(){
    var interval=setInterval(moveR,50);
};