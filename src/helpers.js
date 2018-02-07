// returns an index that is within bounds (loops back to opposite end of array if out of range) 
const getNewIndex = function(currentIndex, offset, maxIndex) {
  let newIndex = currentIndex + offset;

  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = maxIndex;
  }

  return newIndex;
};

// updates state with index of current image, re-renders image element and appropriate dot indicator
const handleNavClick = function(imageElement, offset) {
  $(`.dot:nth-child(${imageIndex + 1})`).removeClass('active-dot');

  imageIndex = getNewIndex(imageIndex, offset, imagePaths.length - 1);
  imageElement.attr('src', imagePaths[imageIndex]);
  imageElement.fadeIn('fast');

  $(`.dot:nth-child(${imageIndex + 1})`).addClass('active-dot');
}