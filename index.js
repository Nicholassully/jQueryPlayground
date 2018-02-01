$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5')
    .clone()
    .appendTo('#left-well');
  $('#left-well')
    .parent()
    .css('background-color', 'red');
  $('#right-well')
    .parent()
    .css('background-color', 'blue');
});
