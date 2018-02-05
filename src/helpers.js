// returns an index that is in bounds (loops back to opposite end of array) 
const getNewIndex = function(currentIndex, offset, maxIndex) {
  let newIndex = currentIndex + offset;

  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = maxIndex;
  }

  return newIndex;
};

// updates state with index of current image and re-renders image element
const handleNavClick = function(imageElement, offset) {
  imageIndex = getNewIndex(imageIndex, offset, imagePaths.length - 1);
  imageElement.attr('src', imagePaths[imageIndex]);
}