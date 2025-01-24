let staveLines = 5;
let staveSpacing = 15;
let notePositions = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
let notes = [];
let changeInterval = 4000;
let animationDuration = 2000; // Duration of movement animation

// Cubic easing function
function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 2;
  return x === 0 ? 0 : x === 1 ? 1 :
    Math.pow(2, -10 * x) * Math.sin((x * 8 - 0.75) * c4) + 1;
}

function setup() {
  createCanvas(400, 200);
  
  for (let i = 0; i < 3; i++) {
    let initialPos = random(notePositions);
    notes.push({
      x: 150 + (i * 60),
      currentPosition: initialPos,
      targetPosition: initialPos,
      animationStart: 0,
      nextChange: i * 1000
    });
  }
}

function draw() {
  background(245, 245, 245);
  
  // Draw stave lines
  stroke(0);
  strokeWeight(1);
  let staveY = height/2 - (staveSpacing * 2);
  for (let i = 0; i < staveLines; i++) {
    line(50, staveY + (i * staveSpacing), 
         width-50, staveY + (i * staveSpacing));
  }
  

  noFill();
  strokeWeight(3);
  
  let clefX = 80;
  let clefY = height/2;
  
  // Main vertical line
  line(clefX, clefY - 40, clefX, clefY + 40);
  
  // Curved bottom part
  beginShape();
  vertex(clefX, clefY + 40);
  bezierVertex(
    clefX + 20, clefY + 40,
    clefX + 30, clefY + 20,
    clefX + 15, clefY
  );
  endShape();
  
  // Two dots
  fill(0);
  noStroke();
  ellipse(clefX + 35, clefY + 10, 8, 8);
  ellipse(clefX + 35, clefY - 10, 8, 8);

endShape();
  
  // Draw notes with animation
  fill(0);
  strokeWeight(2);
  let currentTime = millis();
  
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    
    // Check if it's time to change position
    if (currentTime > note.nextChange) {
      note.targetPosition = random(notePositions);
      note.animationStart = currentTime;
      note.nextChange = currentTime + changeInterval;
    }
    
    // Calculate animation progress
    let progress = constrain((currentTime - note.animationStart) / animationDuration, 0, 1);
    let easedProgress = easeOutElastic(progress);
    
    // Interpolate position
    let currentY = map(
      easedProgress,
      0,
      1,
      height/2 + (note.currentPosition * staveSpacing/2),
      height/2 + (note.targetPosition * staveSpacing/2)
    );
    
    // Update current position when animation completes
    if (progress === 1) {
      note.currentPosition = note.targetPosition;
    }
    
    // Draw note
    ellipse(note.x, currentY, 15, 12);
    line(note.x + 7, currentY, note.x + 7, currentY - 30);
  }
}