
var counter = 0;

function reClassBody(c){
    if(document.body.classList.contains(c)){
        document.body.classList.remove(c);
    }else{
        document.body.classList.add(c);
    }
}

function changeBlendBody(Effect){
    document.body.style.backgroundBlendMode = Effect;
}
function changeColorBody(Color){
    document.body.style.backgroundColor = Color;
}



function BackgroundColorEffect(i){
    counter = counter + i;
    if (counter >= 100){
        counter = 1;
        reClassBody('colorless');
    }else if(counter <= 0){
        reClassBody('colorless');
        counter = 100
    }
    document.getElementById('line').style.height=counter+'%';
}

// Listener Scroll 
document.addEventListener("DOMMouseScroll", function(event) {
    BackgroundColorEffect(event.detail);
});

document.addEventListener("scroll", function(event) {
    BackgroundColorEffect(event.detail);
});