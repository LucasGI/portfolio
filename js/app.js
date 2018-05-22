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
function init() {
    var e = {
        zoom: 15,
        center: new google.maps.LatLng(40.67, -73.94),
        disableDefaultUI: !0,
        scrollwheel: !1,
        draggable: !1,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 17 }]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 20 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 17 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 18 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 16 }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 21 }]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#000000" },
              { lightness: 16 }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }]
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#000000" }, { lightness: 19 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }, { lightness: 20 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }]
          }
        ]
      },
      t = document.getElementById("map");
    map = new google.maps.Map(t, e);
    var l = new google.maps.LatLng(40.67, -73.94);
    new google.maps.Marker({ position: l, map: map, icon: "img/map-marker.svg" });
  }
  !(function(e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var t = e(this.hash);
        if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
          return (
            e("html, body").animate(
              { scrollTop: t.offset().top - 48 },
              1e3,
              "easeInOutExpo"
            ),
            !1
          );
      }
    }),
      e(".js-scroll-trigger").click(function() {
        e(".navbar-collapse").collapse("hide");
      }),
      e("body").scrollspy({ target: "#mainNav", offset: 54 });
    var t = function() {
      e("#mainNav").offset().top > 100
        ? e("#mainNav").addClass("navbar-shrink")
        : e("#mainNav").removeClass("navbar-shrink");
    };
    t(), e(window).scroll(t);
  })(jQuery);
  var map = null;
  google.maps.event.addDomListener(window, "load", init),
    google.maps.event.addDomListener(window, "resize", function() {
      map.setCenter(new google.maps.LatLng(40.67, -73.94));
    });
  