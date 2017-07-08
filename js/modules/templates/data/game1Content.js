import images from './imagesData';
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
  'question1': {
    params: {
      src: `=${images.photos[0]}`,
      alt: `="Option 1"`
    },
    dimensions: {
      width: `468`,
      height: `458`
    },
    photo: {
      value: `photo`,
      text: `Фото`
    },
    paint: {
      value: `paint`,
      text: `Рисунок`
    }
  },
  'question2': {
    params: {
      src: `=${images.paintings[0]}`
    }
  }
});

