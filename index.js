if (window.location.protocol == "http:") {
  var restOfUrl = window.location.href.substr(5);
  window.location = "https:" + restOfUrl;
}
