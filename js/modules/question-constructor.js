export const makeQuestion = (imgContainer, questionsObj, questionNumber) => {
  let questionWidth = imgContainer.width;
  let questionHeight = imgContainer.height;
  let maxWidth = questionsObj[questionNumber].dimensions.width;
  let maxHeight = questionsObj[questionNumber].dimensions.height;
  let ratio = Math.min(maxWidth / questionWidth, maxHeight / questionHeight);
  let newWidth = questionWidth * ratio;
  let newHeight = questionHeight * ratio;
  imgContainer.width = newWidth;
  imgContainer.height = newHeight;
  return imgContainer;
};


