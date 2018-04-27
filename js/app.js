$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        beforeSend: setHeader
    });
     function setHeader(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "[myMashapeAPIkey]");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Accept", "application/json");
 }
})