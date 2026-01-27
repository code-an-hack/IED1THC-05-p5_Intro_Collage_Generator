let images = [];
let imageCount = 6;
let imageSize = 150;

function preload() {
  for (let i = 1; i <= imageCount; i++) {
    images.push(loadImage(`images/${i}.png`));
  }
}

function setup() {
  createCanvas(400, 400);
  background(255, 238, 0);

  for (let img of images) {
    let x = random(width - img.width);
    let y = random(height - img.height);
    image(img, x, y, imageSize, imageSize);
  }
}
