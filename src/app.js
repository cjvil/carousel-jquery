const NUM_OF_IMAGES = 10;
const imagePaths = [];
let imageIndex = 0;

for (let i = 0; i < NUM_OF_IMAGES; i++) {
  imagePaths.push(i < 10 ? `./img/0${i}.jpg` : `./img/${i}.jpg`);
};

$(document).ready(function(){
  const $image = $(`<img src="${imagePaths[1]}" id="display-image"></img>`);
  $('#image-container').append($image);
  
  $('.nav-back').on('click', () =>  handleNavClick($image, -1));
  $('.nav-fwd').on('click', () =>  handleNavClick($image, 1));
});
