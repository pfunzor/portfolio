$(document).ready(function () {
  if ($(window).width() <= 780) {
    $('.nav-items').hide('hide');
  }
});
$('#nav-on').click(function (e) {
  console.log('click');
  $('.nav-items').toggle('slow');
});

$('#nav-off').click(function (e) {
  if ($(window).width() >= 780) return;
  $('.nav-items').hide('slow');
});

$('.nav-item').click(function (e) {
  if ($(window).width() >= 780) return;
  $('.nav-items').hide('slow');
});
