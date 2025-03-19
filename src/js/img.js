// How to add images thru JS using webpack
import previewImg from '../../README/project-preview.jpg';

const image = document.createElement('img');
image.src = previewImg;

document.body.appendChild(image);
