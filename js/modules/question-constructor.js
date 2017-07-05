
export const createImgTemplate = (imgSourceData, key) => {
  const imgContainer = document.createElement(`img`);
  imgContainer.src = key;
  return imgContainer;
}

export const makeQuestion = (imgObj, questionNumber, imageStorageContainer) => {
  let questionWidth = imageStorageContainer.width;
  let questionHeight = imageStorageContainer.height;
  let maxWidth = imgObj[questionNumber].params.width;
  let maxHeight = imgObj[questionNumber].params.height;
  let ratio = Math.min(maxWidth / questionWidth, maxHeight / questionHeight);
  let newWidth = questionWidth * ratio;
  let newHeight = questionHeight * ratio;
  imageStorageContainer.alt = imgObj[questionNumber].params.alt;
  imageStorageContainer.width = newWidth;
  imageStorageContainer.height = newHeight;
  return imageStorageContainer;
}


