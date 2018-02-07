// offsets current image index by some number (offset) and re-renders index-based elements ($imageElement and dot indicators)
const handleNavClick = function($imageElement, offset) {
  imageIndex = getNewIndex(imageIndex, offset, NUM_OF_IMAGES - 1);
  
  updateImage($imageElement, imageIndex);
  updateActiveDot(imageIndex);
};

// given current index and offset, returns an index that is within range (0 <= index <= maxIndex); 
// loops back to opposite end of array if attempting to navigate out of range
const getNewIndex = function(index, offset, maxIndex) {
  let newIndex = index + offset;
  
  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = maxIndex;
  }
  
  return newIndex;
};

// given a new index, updates given image element's src with new path (from imagePaths array)
const updateImage = function($imageElement, imageIndex) {
  $imageElement.fadeOut('fast', () => {
    $imageElement.attr('src', imagePaths[imageIndex]);
    $imageElement.fadeIn('fast');
  });
};

// moves active dot style to new index (imageIndex)
const updateActiveDot = function(imageIndex) {
  $('.active-dot').removeClass('active-dot');
  $(`.dot:nth-child(${imageIndex + 1})`).addClass('active-dot');
};