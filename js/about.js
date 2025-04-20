let index = 0;
function carousel(){
    let slide = document.getElementsByClassName("myCarousel");
    for(let i=0; i<slide.length; i++){
        slide[i].style.display="none";
    }
    index++;//incress index
    if(index>slide.length){index=1}
    slide[index - 1].style.display="block";
    setTimeout(carousel,2000);//slides time 
}
carousel();