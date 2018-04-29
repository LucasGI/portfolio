$(document).ready(function () {
    timer();
    var interval = setInterval(function () { timer(); }, 20000);
    function timer() {
        var quote = $('#quote').text();
        var quoteGenius = $('#name').text();
        var sourceLength = quoteSource.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);
        for (i = 0; i <= sourceLength; i += 1) {
            var newQuoteText = quoteSource[randomNumber].quote;
            var newQuoteGenius = quoteSource[randomNumber].name;
            var timeAnimationIn = 500;
            var timeAnimationOut = 5000;
            var quoteContainer = $('#quote');
            quoteContainer.fadeOut(timeAnimationIn, function () {
                quoteContainer.html('');
                quoteContainer.append('<p class="quote">' + newQuoteText + '</p>' + '<p id="name" class="name">' + '-' + newQuoteGenius + '</p>');
                quoteContainer.fadeIn(timeAnimationOut);
            });
            break;
        };
    }

    // var clock = new FlipClock($('.clock'), {
    //     clockFace: 'MinuteCounter',
    //     countDown: true,
    //     onStart: function() {
    //         console.log("Started!")
    //     },
    //     onStop: function() {
    //         console.log("done!")
    //     },

    // });
});