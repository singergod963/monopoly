$(function () {
    const questionSteps = [1, 3, 6, 7, 9, 11, 12, 14, 16, 18];
    const answers = [2, 1, 1, 4, 5, 1, 1, 1, 4, 3];
    let questionIndex = 0;

    $('.link--go').on('click', function () {
        goToNextStep(questionIndex);
    });

    function goToNextStep() {
        questionIndex++;
        if (questionIndex > questionSteps.length) {
            $('.success').fadeIn(500);
            return;
        }

        $('.step').removeClass('step--active');
        $('.step--s' + questionSteps[questionIndex - 1]).addClass('step--active');
        $('.question').hide();
        $('.question--q' + questionIndex).css('display', 'flex');
        $('.QA').fadeIn(500);
    }

    $('.optionsText-item').css('user-select', 'none');

    $('.optionBtn-item, .optionText-item').on('click', function () {
        const correct = answers[questionIndex - 1];
        const answer = $(this).index();
        if (correct === (answer + 1)) {
            alert($('.question--q' + questionIndex).find('.optionText-item').eq(answer).text());
            goToNextStep();
        } else {
            $('.fail').fadeIn(500);
            $('.failAns').hide();
            $('.failAns--q' + questionIndex).show();
        }

    });

    $('.link--back').on('click', function () {
        $('.fail').fadeOut(500);
    })
});