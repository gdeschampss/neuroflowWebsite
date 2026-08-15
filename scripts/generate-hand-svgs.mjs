import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'assets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function generateHandDots(isLeft) {
  const circles = [];
  const spacing = 7; // resolution of halftone grid
  const width = 600;
  const height = 600;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let inShape = false;
      let density = 0; // 0 to 1

      if (isLeft) {
        // Left hand pointing from bottom-left towards top-right (520, 200)
        // Forearm
        const armDist = Math.abs((y - 540) + 0.8 * (x - 60));
        if (x < 300 && y > 280 && armDist < 85) {
          inShape = true;
          density = 0.85 - (x / 360) * 0.3;
        }
        // Palm center
        const palmDx = x - 320;
        const palmDy = y - 280;
        if (Math.hypot(palmDx, palmDy) < 70) {
          inShape = true;
          density = 0.95;
        }
        // Thumb (extended upward)
        const tDx = x - 330;
        const tDy = y - 180;
        if (tDy > -50 && tDy < 50 && Math.abs(tDx - tDy * 0.4) < 22 && x > 280 && x < 380) {
          inShape = true;
          density = 0.85;
        }
        // Index Finger (pointing towards 530, 200)
        const iProgress = (x - 360) / 170;
        if (iProgress >= 0 && iProgress <= 1) {
          const targetY = 250 - iProgress * 50;
          if (Math.abs(y - targetY) < (20 - iProgress * 12)) {
            inShape = true;
            density = 1.0 - iProgress * 0.4;
          }
        }
        // Middle Finger (pointing towards 490, 240)
        const mProgress = (x - 360) / 140;
        if (mProgress >= 0 && mProgress <= 1) {
          const targetY = 270 - mProgress * 30;
          if (Math.abs(y - targetY) < (19 - mProgress * 10)) {
            inShape = true;
            density = 0.9 - mProgress * 0.4;
          }
        }
        // Ring Finger
        const rProgress = (x - 350) / 110;
        if (rProgress >= 0 && rProgress <= 1) {
          const targetY = 295 - rProgress * 15;
          if (Math.abs(y - targetY) < (18 - rProgress * 9)) {
            inShape = true;
            density = 0.8 - rProgress * 0.4;
          }
        }
        // Pinky
        const pProgress = (x - 340) / 85;
        if (pProgress >= 0 && pProgress <= 1) {
          const targetY = 320 - pProgress * 5;
          if (Math.abs(y - targetY) < (16 - rProgress * 8)) {
            inShape = true;
            density = 0.7 - pProgress * 0.4;
          }
        }
      } else {
        // Right hand pointing from top-right towards bottom-left (80, 400)
        // Forearm coming from top right (540, 60)
        const armDist = Math.abs((y - 80) + 0.8 * (x - 540));
        if (x > 300 && y < 320 && armDist < 85) {
          inShape = true;
          density = 0.85 - ((600 - x) / 360) * 0.3;
        }
        // Palm center
        const palmDx = x - 280;
        const palmDy = y - 320;
        if (Math.hypot(palmDx, palmDy) < 70) {
          inShape = true;
          density = 0.95;
        }
        // Thumb (pointing downward)
        const tDx = x - 270;
        const tDy = y - 420;
        if (Math.hypot(tDx, tDy) < 35) {
          inShape = true;
          density = 0.85;
        }
        // Index Finger (reaching left towards 70, 400)
        const iProgress = (250 - x) / 180;
        if (iProgress >= 0 && iProgress <= 1) {
          const targetY = 330 + iProgress * 70;
          if (Math.abs(y - targetY) < (20 - iProgress * 12)) {
            inShape = true;
            density = 1.0 - iProgress * 0.4;
          }
        }
        // Middle Finger
        const mProgress = (250 - x) / 145;
        if (mProgress >= 0 && mProgress <= 1) {
          const targetY = 310 + mProgress * 50;
          if (Math.abs(y - targetY) < (19 - mProgress * 10)) {
            inShape = true;
            density = 0.9 - mProgress * 0.4;
          }
        }
        // Ring Finger
        const rProgress = (250 - x) / 115;
        if (rProgress >= 0 && rProgress <= 1) {
          const targetY = 290 + rProgress * 30;
          if (Math.abs(y - targetY) < (18 - rProgress * 9)) {
            inShape = true;
            density = 0.8 - rProgress * 0.4;
          }
        }
        // Pinky
        const pProgress = (250 - x) / 85;
        if (pProgress >= 0 && pProgress <= 1) {
          const targetY = 270 + pProgress * 15;
          if (Math.abs(y - targetY) < (16 - pProgress * 8)) {
            inShape = true;
            density = 0.7 - pProgress * 0.4;
          }
        }
      }

      if (inShape) {
        const radius = (0.8 + density * 2.6).toFixed(2);
        // Subtle opacity variations for halftone depth
        const opacity = (0.4 + density * 0.6).toFixed(2);
        circles.push(`<circle cx="${x}" cy="${y}" r="${radius}" opacity="${opacity}" />`);
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="#03AD97">
  ${circles.join('\n  ')}
</svg>`;
}

fs.writeFileSync(path.join(dir, 'dot-hand-left.svg'), generateHandDots(true));
fs.writeFileSync(path.join(dir, 'dot-hand-right.svg'), generateHandDots(false));
console.log('Successfully generated dot-hand-left.svg and dot-hand-right.svg in /public/assets');
