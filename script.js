


function scrollUpdate(){
    const Hidden = document.querySelector('.header');
    const Buffer = document.querySelector('.headerBuffer');
    
    var Rect = Buffer.getBoundingClientRect();
    var Mid = Rect.bottom;//(Rect.top + Rect.bottom) * 0.5;
    if(Mid <= 50){
        Hidden.className = 'header hidden';
    } else {
        Hidden.className = 'header';
    }
}

onscroll = scrollUpdate;