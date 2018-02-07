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
  
  // render dot indicators
  let dotElements = '';

  for (let i = 0; i < NUM_OF_IMAGES; i++) {
    dotElements += '<div class="dot"></div>';
  };

  $('#dot-container').append(dotElements);

  $(`.dot:nth-child(${imageIndex + 1})`).addClass('active-dot');

  // handle navigation clicks
  $('.nav-back').on('click', () => {
    $image.fadeOut('fast', () => handleNavClick($image, -1));
  });

  $('.nav-fwd').on('click', () => {
    $image.fadeOut('fast', () =>  handleNavClick($image, 1));
  });
});
