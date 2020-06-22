import Countdown from 'ds-countdown';

if (window.location.protocol == "http:" && window.location.href.indexOf('localhost') === -1) {
  var restOfUrl = window.location.href.substr(5);
  window.location = "https:" + restOfUrl;
}

function showStream() {
  // Get coundown element
  const countdownContainer = document.getElementById('countdown-container');

  // Hide countdown element
  countdownContainer.style.display = 'none';
};

function init() {
  new Countdown({
    id: "ds-countdown",
    targetTime: '2020-06-22 19:00:00',
    noDay: false,
    hideDayAtZero: false,
    separator: ' : ',
    afterEnd() {
      showStream()
    }
  });
};

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init);
