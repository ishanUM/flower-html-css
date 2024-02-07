$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 3bb9bd55061a80b51b2c2c0d3030703bbd7aef4e
