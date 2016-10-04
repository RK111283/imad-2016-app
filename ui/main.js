console.log('Loaded!');

//Change text of an Div element
var ele=document.getElementById('lblmsg1');
ele.innerHTML='This is new value from *.js file.';

//Shift an image, when user click on that image
var ig=document.getElementById('img11');
var ig1=document.getElementById('img12');
var mrleft=0;
function moveR(){
    mrleft=mrleft+1;
    ig.style.marginLeft=mrleft+'px';
    ig1.style.marginLeft=mrleft+30+'px';
    if(mrleft==100)
    {
        mrleft=0;
    }
}

ig.onclick=function(){
    var interval=setInterval(moveR,50);
};