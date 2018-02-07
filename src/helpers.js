const handleNavClick = function(imageElement, offset) {
  // update state with new image index
  const prevImageIndex = imageIndex;
  imageIndex = getNewIndex(imageIndex, offset, NUM_OF_IMAGES - 1);
  
  // re-render index-dependent elements
  updateImage(imageElement, imageIndex);
  updateActiveDot(prevImageIndex, imageIndex);
};

// returns an index that is within bounds; loops back to opposite end of array if out of range
const getNewIndex = function(index, offset, maxIndex) {
  let newIndex = index + offset;
  
  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = maxIndex;
  }
  
  return newIndex;
};

const updateImage = function(imageElement, imageIndex) {
  imageElement.fadeOut('fast', () => {
    imageElement.attr('src', imagePaths[imageIndex]);
    imageElement.fadeIn('fast');
  });
};

const updateActiveDot = function(prevImageIndex, imageIndex) {
  $(`.dot:nth-child(${prevImageIndex + 1})`).removeClass('active-dot');
  $(`.dot:nth-child(${imageIndex + 1})`).addClass('active-dot');
};