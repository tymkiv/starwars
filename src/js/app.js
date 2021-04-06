// begin setup
const speed = 10;
const number = 1000;

// end setup

const stars = [];

const root = document.getElementById('root');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const width = root.clientWidth;
const height = root.clientHeight;

canvas.width = root.clientWidth;
canvas.height = root.clientHeight;

root.appendChild(canvas);

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

class Star {
  constructor() {
    this.x = Math.random() * (width + width) - width;
    this.y = Math.random() * (height + height) - height;
    this.z = Math.random() * width;
    this.pz = this.z;
  }

  update() {
    this.z = this.z - speed;

    if (this.z < 1) {
      this.z = width;
      this.x = Math.random() * (width + width) - width;
      this.y = Math.random() * (height + height) - height;
      this.pz = this.z;
    }
  }

  show() {
    
    const sx = map(this.x / this.z, 0, 1, 0, width);
    const sy = map(this.y / this.z, 0, 1, 0, height);

    const r = map(this.z, 0, width, 4, 0);

    const px = map(this.x / this.pz, 0, 1, 0, width);
    const py = map(this.y / this.pz, 0, 1, 0, height);

    const gradient = ctx.createLinearGradient(width/2 - px, height/2 - py, width/2 - sx, height/2 - sy);

    gradient.addColorStop(0, '#000');
    gradient.addColorStop(1, '#fff');

    // ctx.fillStyle = '#fff';
    // ctx.strokeStyle = '#fff';
    ctx.strokeStyle = gradient;
    ctx.beginPath();
    // ctx.arc(width/2 - sx, height/2 - sy, r, 0, 2 * Math.PI);
    // ctx.fill();

    ctx.lineWidth = r;
    ctx.lineCap = 'round';
    ctx.moveTo(width/2 - px, height/2 - py); 
    ctx.lineTo(width/2 - sx, height/2 - sy);
    ctx.stroke();
    ctx.closePath();
  }
}

function begin() {
  for (let i = 0; i < number; i++) {
    stars.push(new Star());
  }
}

function raf() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach(star => {
    star.show();
    star.update();
  });

  window.requestAnimationFrame(raf);

}

begin();
raf();


