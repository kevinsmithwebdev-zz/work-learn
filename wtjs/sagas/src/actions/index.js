import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => ({
  type: IMAGES.SUCCESS,
  images,
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

export {
  loadImages,
  setImages,
  setError,
}