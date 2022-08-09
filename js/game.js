$(function () {

    $('.link--go').on('click', function () {
        $(this).parent().removeClass('step--active');
        $('.step--s1').addClass('step--active');
        $('.QA').fadeIn(500);
    });

    $('.link--back').on('click', function () {
        $('.fail').fadeOut(500);
    })

});