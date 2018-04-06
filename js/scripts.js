$(document).ready(function() {
  $(".form-input form").submit(function(event) {
    $(".form-input").toggle();
    $("#thanks").toggle();

    event.preventDefault();
  });
});