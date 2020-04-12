$(function () {

    let widthMax = $(window).width();
    let heightMax = $(window).height();
    let widthCircle = $(window).width();
    let heightCircle = $(window).height();
    setInterval(() => {
        $('.circle').animate({
        left: Math.floor( Math.random() * widthMax / 2), 
        top: Math.floor( Math.random() * heightMax / 2),
        width: Math.floor(Math.random() * widthCircle / 2),
        height: Math.floor(Math.random() * heightCircle / 2),
    }).css({
            backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
            borderColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
            boxShadow: Math.floor(Math.random() * 20) + 'px' + ' ' + Math.floor(Math.random() * 20) + 'px' + ' ' + Math.floor(Math.random() * 20) + 'px' + ' ' + "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
    })  
    }, 500);
    
})