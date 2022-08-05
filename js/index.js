$(function () {
    let questionIndex = 0;
    $('.js-go').on('click', function () {
        $('.question').eq(questionIndex).show();
    });

    $('.question').on('click', function() {
        $('.question').eq(questionIndex).hide();
        questionIndex++;
        if(questionIndex < $('.question').length) {
            $('.question').eq(questionIndex).show();
        }else{
            $('.success').show();
        }
    })
});