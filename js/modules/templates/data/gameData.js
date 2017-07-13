import {imgsObj} from './../loader/imageLoader';

export const initialState = Object.freeze({
  score: 0,
  time: 0,
  lives: 3
});
export const content = {
  greeting: `Угадайте для каждого изображения фото или рисунок?`,
  text: [`Фото`, `Рисунок`]
};

export const questions = Object.freeze({
  'screen-1': {
    painting: imgsObj[`peoplePaintings`][`Man Bearded`],
    photo: imgsObj[``]
}
})