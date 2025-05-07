let index = 0;// carosel index
function carousel(){
    let slide = document.getElementsByClassName("myCarousel"); // Get image id 
    for(let i=0; i<slide.length; i++){
        slide[i].style.display="none";// Hide one image
    }
    index++;// incress index
    if(index>slide.length){index=1}
    slide[index - 1].style.display="block";// Show other image
    setTimeout(carousel,2000);// slides time 
}
carousel();