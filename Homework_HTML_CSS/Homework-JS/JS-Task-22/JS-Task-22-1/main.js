$('.circle').click(function () {

    let widthMax = $(window).width();
    let heightMax = $(window).height();
    let width = $(window).width();
    let height = $(window).height();
    $('.circle').animate({
        left: Math.floor( Math.random() * widthMax / 2), 
        top: Math.floor( Math.random() * heightMax / 2),
        width: Math.floor(Math.random() * width / 2),
        height: Math.floor(Math.random() * height / 2),
    }).css({
            backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    });
})