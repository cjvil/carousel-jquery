const imagePaths = [`./img/01.jpg`, `./img/02.jpg`];

$(document).ready(function(){
  let $image = $(`<img src="${imagePaths[0]}"></img>`);
  $('#image-container').append($image);

  $image.attr('src', imagePaths[1]); // TODO: move to click handler

});
