var slider = document.querySelector('.slider');
var images = ['carousel1.jpg', 'carousel2.jpg', 'carousel3.jpg']
var i = 0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slide_img.setAttribute('src', 'images/' + images[i]);
}