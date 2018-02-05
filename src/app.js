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
  const $image = $(`<img src="${imagePaths[1]}" id="display-image"></img>`);
  $('#image-container').append($image);
  
  $('.nav-back').on('click', () =>  handleNavClick($image, -1));
  $('.nav-fwd').on('click', () =>  handleNavClick($image, 1));
});
