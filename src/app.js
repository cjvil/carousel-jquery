const NUM_OF_IMAGES = 10;
const IMG_DIR = './img/';
const IMG_EXTENSION = '.jpg';
const imagePaths = [];
let imageIndex = 0;

// store image file paths (maximum 99)
for (let i = 0; i < NUM_OF_IMAGES; i++) {
  imagePaths.push(i < 10 ? IMG_DIR + `0${i}` + IMG_EXTENSION : IMG_DIR + i + IMG_EXTENSION);
};

$(document).ready(function(){
  // render first image
  const $image = $(`<img src="${imagePaths[imageIndex]}" id="display-image"></img>`);
  $('#image-container').append($image);
  
  let dotDivs = '<div id="dots">';
  for (let i = 0; i < NUM_OF_IMAGES; i++) {
    dotDivs += '<div class="dot"></div>';
  };
  $('body').append(dotDivs + '</div>');

  $(`.dot:nth-child(${imageIndex + 1})`).addClass('active-dot');


  $('.nav-back').on('click', () => {
    $image.fadeOut('fast', () => handleNavClick($image, -1));
  });

  $('.nav-fwd').on('click', () => {
    $image.fadeOut('fast', () =>  handleNavClick($image, 1));
  });
});
