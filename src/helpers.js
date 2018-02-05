const getNewIndex = function(prevIndex, offset, maxIndex) {
  let newIndex = prevIndex + offset;

  if (newIndex > maxIndex) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = maxIndex;
  }

  return newIndex;
};

const handleNavClick = function(imageElement, offset) {
  imageIndex = getNewIndex(imageIndex, offset, imagePaths.length - 1);
  imageElement.attr('src', imagePaths[imageIndex]);
}