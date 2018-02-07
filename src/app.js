const IMG_DIR = './img/';
const IMG_EXTENSION = '.jpg';
const NUM_OF_IMAGES = 10;
const imagePaths = [];
let imageIndex = 0; // index of currently displayed image

// store image file paths
for (let i = 0; i < NUM_OF_IMAGES; i++) {
  const numStr = i < 10 ? `0${i}` : `${i}`;
  imagePaths.push(IMG_DIR + numStr + IMG_EXTENSION);
};

$(document).ready(function() {
  // render initial image
  const $image = $(`<img src="${imagePaths[imageIndex]}" id="display-image" />`);
  $('#image-container').append($image);
  
  // render dot indicator for each image
  let dotElements = '';

  for (let i = 0; i < NUM_OF_IMAGES; i++) {
    dotElements += `<div class="${i === imageIndex ? 'dot active-dot' : 'dot'}"></div>`;
  };

  $('#dot-container').append(dotElements);

  // handle navigating between images
  $('.nav-back').click(() => handleNavClick($image, -1));
  $('.nav-fwd').click(() => handleNavClick($image, 1));
});