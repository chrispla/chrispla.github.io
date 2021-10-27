//check the repo's README to overview code structure

//---TEXT & IMAGES---//

//homepage text
var hi = "Hi!";
var description = "My name is Christos Plachouras, and I'm working on some cool stuff in music, computer science, mathematics, and engineering. You can find some of them on this website!";


//homepage and about images
var profile;
var profile1;

//-----PRELOAD-----// see p5js documentation for preload() function
function preload() {

  //preload images
  profile = loadImage('profile.png');
  profile1 = loadImage('profile1.png');
}

//-----SETUP-----// see p5js documentation for setup() function
function setup() {

  //creating canvas equal to the width and height available by the browser
  createCanvas(windowWidth, windowHeight);

  //create specified number of instances of the particle class
  for (var i = 0; i < particleNumber; i++) {
    particles[i] = new Particles();
    //initialize a different perlin noise seed for each particle
    perlinTimers[i] = (i*100);
  }

  //text font
  textFont('Verdana');

}

//-----Page information Dictionary-----//
var page_info = {};

//----------home----------//
var home = {}; //home dictionary
page_info["home"] = home; //asign page dict to page info dict
home["image_slidein"] = image_slidein;
home["image_static"] = image_static;
home["image_slideout"] = image_slideout;
home["content_slidein"] = content_slidein;
home["content_static"] = content_static;
home["content_slideout"] = content_fadeout;
home["particle_fadein"] = particle_fadein;
home["particle_static"] = particle_static;
home["particle_fadeout"] = particle_fadeout;
function image_slidein() {

  //image slide-in
  tint(255, 255);
  image(profile, (windowWidth/2 - 180)+((1-sin(animation_timer))*180), (windowHeight/2) - 86, 180, 180);

  //eyes
  noStroke();
  fill(60);
  if (mouseX<=(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5 + ((1-sin(animation_timer))*180), (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5 + ((1-sin(animation_timer))*180), (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  } else if (mouseX>(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5 + ((1-sin(animation_timer))*180), (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5 + ((1-sin(animation_timer))*180), (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  }

  //white ellipse to cover up image right of center line
  noStroke();
  fill(255);
  rect(windowWidth/2, (windowHeight/2)-100, 200, 200);

}
function image_static() {

  image(profile, (windowWidth/2) - 180, (windowHeight/2) - 86, 180, 180);

  //eyes
  noStroke();
  fill(60);
  if (mouseX<=(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  } else if (mouseX>(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  }

}
function image_slideout() {

  //image slide-out
  //tint(255, (1-sin(animation_timer))*255);
  image(profile, (windowWidth/2 - 180)+(sin(animation_timer)*180), (windowHeight/2) - 86, 180, 180);

  //eyes
  noStroke();
  fill(60);
  if (mouseX<=(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5 + (sin(animation_timer)*180), (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5 + (sin(animation_timer)*180), (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  } else if (mouseX>(windowWidth/2)) {
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5 + (sin(animation_timer)*180), (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
    ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5 + (sin(animation_timer)*180), (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
  }

  //white ellipse to cover up image right of center line
  noStroke();
  fill(255);
  rect(windowWidth/2, (windowHeight/2)-100, 200, 200);

}
function content_slidein() {

  //tab boxes
  for(var key in page_info) {
    if (key != "home") {
      page_info[key]["box_lines"] += tab_box(25-((1-sin(animation_timer))*300), page_info[key]["tab_info"].tab_y, page_info[key]["box_lines"], page_info[key]["tab_info"].width, page_info[key]["tab_info"].startR, page_info[key]["tab_info"].startG, page_info[key]["tab_info"].startB, page_info[key]["tab_info"].dropR, page_info[key]["tab_info"].dropG, page_info[key]["tab_info"].dropB, sin(animation_timer)*255);
    }
  }

  //text
  noStroke();
  textStyle(NORMAL);
  textSize(15);
  fill(0, sin(animation_timer)*255);
  text(hi, (windowWidth/2 + 25)-((1-sin(animation_timer))*300), windowHeight/2 - 95);
  textSize(12);
  text(description, (windowWidth/2 + 25)-((1-sin(animation_timer))*300), windowHeight/2 - 86, 300, 300);

  //tab text
  textStyle(BOLD);
  for(var key in page_info) {
    if (key != "home") {
      text(page_info[key]["tab_info"].title, (windowWidth/2 + 33)-((1-sin(animation_timer))*300), windowHeight/2 + page_info[key]["tab_info"].text_y);
    }
  }

  //white ellipse to cover up text left of center line
  noStroke();
  fill(255);
  rect((windowWidth/2)-300, (windowHeight/2)-120, 300, 240);

}
function content_static() {

  //tab boxes
  strokeWeight(1.2);
  for(var key in page_info) {
    if (key != "home") {
      page_info[key]["box_lines"] += tab_box(25, page_info[key]["tab_info"].tab_y, page_info[key]["box_lines"], page_info[key]["tab_info"].width, page_info[key]["tab_info"].startR, page_info[key]["tab_info"].startG, page_info[key]["tab_info"].startB, page_info[key]["tab_info"].dropR, page_info[key]["tab_info"].dropG, page_info[key]["tab_info"].dropB, 255);
    }
  }

  //text
  noStroke();
  textStyle(NORMAL);
  textSize(15);
  fill(0, 255);
  text(hi, windowWidth/2 + 25, windowHeight/2 - 95);
  textSize(12);
  text(description, windowWidth/2 + 25, windowHeight/2 - 86, 300, 300);

  //tab text
  textStyle(BOLD);
  for(var key in page_info) {
    if (key != "home") {
      text(page_info[key]["tab_info"].title, windowWidth/2 + 33, windowHeight/2 + page_info[key]["tab_info"].text_y);
    }
  }

}
function content_fadeout() {

  //tab boxes
  strokeWeight(1.2);
  for(var key in page_info) {
    if (key != "home") {
      page_info[key]["box_lines"] += tab_box(25, page_info[key]["tab_info"].tab_y, page_info[key]["box_lines"], page_info[key]["tab_info"].width, page_info[key]["tab_info"].startR, page_info[key]["tab_info"].startG, page_info[key]["tab_info"].startB, page_info[key]["tab_info"].dropR, page_info[key]["tab_info"].dropG, page_info[key]["tab_info"].dropB, (1-sin(animation_timer))*255);
    }
  }

  //text
  noStroke();
  textStyle(NORMAL);
  textSize(15);
  fill(0, (1-sin(animation_timer))*255);
  text(hi, windowWidth/2 + 25, windowHeight/2 - 95);
  textSize(12);
  text(description, windowWidth/2 + 25, windowHeight/2 - 86, 300, 300);

  //tab text
  textStyle(BOLD);
  for(var key in page_info) {
    if (key != "home") {
      text(page_info[key]["tab_info"].title, windowWidth/2 + 33, windowHeight/2 + page_info[key]["tab_info"].text_y);
    }
  }

  //white ellipse to cover up text left of center line
  noStroke();
  fill(255);
  rect((windowWidth/2)-300, (windowHeight/2)-120, 300, 240);

}
function particle_fadein() {

  for (var i = 0; i < particleNumber; i++) {
    //updates
    perlinTimers[i] += (0.0001*i)+(0.001);
    particleXpos[i] = particles[i].xposupdate() + 700*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = particles[i].yposupdate() + 700*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread

    //line to middle
    strokeWeight(1.4);
    stroke(140, 150*(sin(animation_timer)));
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-100, windowHeight/2);
    // // line connecting particles with other particles
    // if (i<particleNumber-2) {
    //   line(particleXpos[i], particleYpos[i], particleXpos[i+1], particleYpos[i+1]);
    // }

    //varying fill colors based on particle index
    if (i%3==0) {
      fill(179, 157, 219);
    } else if (i%2==0) {
      fill(255, 151, 66);
    } else {
      fill(128, 203, 196);
    }
    
    //particles
    strokeWeight(2);
    stroke(60, 255*(sin(animation_timer)));
    ellipse(particleXpos[i], particleYpos[i], 17*(sin(animation_timer)), 17*sin(animation_timer));
  }
}
function particle_static() {

  for (var i = 0; i < particleNumber; i++) {
    //updates
    perlinTimers[i] += (0.0001*i)+(0.001);
    particleXpos[i] = particles[i].xposupdate() + 700*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = particles[i].yposupdate() + 700*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread

    //line to middle
    strokeWeight(1.4);
    stroke(140, 150);
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-100, windowHeight/2);
    // // line connecting particles with other particles
    // if (i<particleNumber-2) {
    //   line(particleXpos[i], particleYpos[i], particleXpos[i+1], particleYpos[i+1]);
    // }

    //varying fill colors based on particle index
    if (i%3==0) {
      fill(179, 157, 219);
    } else if (i%2==0) {
      fill(255, 151, 66);
    } else {
      fill(128, 203, 196);
    }
    
    //particles
    strokeWeight(2);
    stroke(60);
    ellipse(particleXpos[i], particleYpos[i], 17, 17);
  }
}
function particle_fadeout() {

  for (var i = 0; i < particleNumber; i++) {
    //updates
    perlinTimers[i] += (0.0001*i)+(0.001);
    particleXpos[i] = particles[i].xposupdate() + 700*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = particles[i].yposupdate() + 700*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread

    //line to middle
    strokeWeight(1.4);
    stroke(140, 150*(1-sin(animation_timer)));
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-100, windowHeight/2);
    // // line connecting particles with other particles
    // if (i<particleNumber-2) {
    //   line(particleXpos[i], particleYpos[i], particleXpos[i+1], particleYpos[i+1]);
    // }

    //varying fill colors based on particle index
    if (i%3==0) {
      fill(179, 157, 219);
    } else if (i%2==0) {
      fill(255, 151, 66);
    } else {
      fill(128, 203, 196);
    }
    
    //particles
    strokeWeight(2);
    stroke(60, 255*(1-sin(animation_timer)));
    ellipse(particleXpos[i], particleYpos[i], 17*(1-sin(animation_timer)), 17*(1-sin(animation_timer)));
  }
}

//---general functions---//

function state_agnostic() {

  //---background---//
  background(255);

  // //---version---//
  fill(0);
  noStroke();
  textStyle(NORMAL);
  textSize(12);
  // text('alpha version', 5, 15)

  //---framerate---//
  if (frameCount%30==0) {
    fps = frameRate();
  }
  //text("FPS: " + fps.toFixed(2), 5, 15);
}
function Particles() { //particle class

  //initial spread of particles
  this.x = random((windowWidth/2)-525, ((windowWidth/2)+325));
  this.y = random((windowHeight/2)-525, (windowHeight/2)+525);
  this.easing = 0.01;

  this.xposupdate = function() {
    if (mouseX < (windowWidth/2)) {
      if (mouseX != 0) {
        this.x += ((mouseX - this.x)*this.easing);
      } else {
        this.x += ((((windowWidth/2)-100) - this.x)*this.easing);
      }
    } else {
      this.x += (((windowWidth - mouseX) - this.x)*this.easing);
    }
    return this.x;
  }

  this.yposupdate = function() {
    if (mouseY != 0) {
      this.y += ((mouseY - this.y)*this.easing);
    } else {
      this.y += (((windowHeight/2) - this.y)*this.easing);
    }
    return this.y;
  }
}
function Tab(title, tab_y, text_y, width, startR, startG, startB, dropR, dropG, dropB) { //tab class
  this.title = title;
  this.tab_y = tab_y;
  this.text_y = text_y;
  this.width = width;
  this.startR = startR;
  this.startG = startG;
  this.startB = startB;
  this.dropR = dropR;
  this.dropG = dropG;
  this.dropB = dropB;
}
function tab_box(xpos, ypos, lCounter, frameWidth, startR, startG, startB, dropR, dropG, dropB, alpha) { //interactive gradient boxes behind tab text
  //xpos value of moving tab box relative to middle width
  //upper ypos value relative to middle height
  //lCounter = number of lines to draw
  //frameWidth = width of the moving tab box
  //startRGB = starting values of the fade
  //dropRGB = the amount of reduction of each value at the end of the fade

  strokeWeight(1.2);
  stroke(startR-dropR, startG-dropG, startB-dropB, alpha);

  //draw some static lines on the left regardless of mouse position and animation
  for (var i = 0; i < 3; i++) {
    line(((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos), ((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos+20));
  }

  lines = round(sin(lCounter)*frameWidth); //calculate number of lines

  //draw lines based on lines variable
  for (var i = 0; i < lines; i++) {
    //The color transition bases the stroke on the amount of lines that will be generated
    stroke((startR-(1-(i/frameWidth))*dropR), startG-((1-(i/frameWidth))*dropG), startB-((1-(i/frameWidth))*dropB), alpha);
    line(((windowWidth/2)+xpos+3+i), ((windowHeight/2)+ypos), ((windowWidth/2)+xpos+3+i), ((windowHeight/2)+ypos+20));
  }

  //return value by which to increment/decrement lCoutner
  if ((mouseX>((windowWidth/2)+xpos)) && (mouseX<((windowWidth/2)+xpos+3+frameWidth)) && (mouseY<((windowHeight/2)+ypos+20)) && (mouseY>((windowHeight/2)+ypos))) {
    //if mouse inside box
    if (lCounter < HALF_PI) {
      //if box still not fully drawn
      return (HALF_PI/30);
    } else {
      //if box fully drawn
      return 0;
    }
  } else {
    //if mouse outside
      if (lCounter <= 0) {
        //if box 0
        return 0;
      } else {
        //if box not 0
        return (-HALF_PI/20);
      }
  }
}
function tab2title(textvar, currentY, desiredY) { //transition from tab text to page title
  textStyle(BOLD);
  fill(0);
  noStroke();
  textSize(12*(1+sin(animation_timer)));
  text(textvar, (windowWidth/2 + 33), (currentY - ((currentY-desiredY)*sin(animation_timer))));
}
function general_particles_fadein(r1, g1, b1, r2, g2, b2, r3, g3, b3) {

  //---PARTICLES---//

  //TOP LEFT QUADRANT
  for (var i = 0; i < 10; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 2*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*(sin(animation_timer)));
    strokeWeight(2);
    if (i<4) {
      fill(r1, g1, b1, 255*(sin(animation_timer)));
    } else if (i<7) {
        fill(r2, g2, b2, 255*(sin(animation_timer)));
    } else {
        fill(r3 ,g3 ,b3 , 255*(sin(animation_timer)));
    }
    ellipse(particleXpos[i], particleYpos[i], 13*sin(animation_timer), 13*sin(animation_timer));
  }
  
  //BOTTOM LEFT QUADRANT
  for (var i = 10; i < 20; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 3*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*(sin(animation_timer)));
    strokeWeight(2);
    if (i<14) {
      fill(r1, g1, b1, 255*(sin(animation_timer)));
    } else if (i<17) {
        fill(r2, g2, b2, 255*(sin(animation_timer)));
    } else {
        fill(r3 ,g3 ,b3 , 255*(sin(animation_timer)));
    }
    ellipse(particleXpos[i], particleYpos[i], 13*sin(animation_timer), 13*sin(animation_timer));
  }
}
function general_particles_static(r1, g1, b1, r2, g2, b2, r3, g3, b3) { //used on all pages apart from home page, non-interactive

  //---LINES---//
  stroke(180);
  strokeWeight(1);
  for (var i = 0; i < 20; i++) {
    for (var j=0; j<20; j++) {
      if (((Math.abs(particleXpos[i]-particleXpos[j]))<0.05*windowWidth) && ((Math.abs(particleYpos[i]-particleYpos[j]))<0.05*windowHeight)) {
        line(particleXpos[i], particleYpos[i], particleXpos[j], particleYpos[j]);
      }
    }
  }
  
  //---PARTICLES---//

  //TOP LEFT QUADRANT
  for (var i = 0; i < 10; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 2*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255);
    strokeWeight(2);
    if (i<4) {
      fill(r1, g1, b1, 255);
    } else if (i<7) {
        fill(r2, g2, b2, 255);
    } else {
        fill(r3 ,g3 ,b3 , 255);
    }
    ellipse(particleXpos[i], particleYpos[i], 13, 13);
  }
  
  //BOTTOM LEFT QUADRANT
  for (var i = 10; i < 20; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 3*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255);
    strokeWeight(2);
    if (i<14) {
      fill(r1, g1, b1, 255);
    } else if (i<17) {
        fill(r2, g2, b2, 255);
    } else {
        fill(r3 ,g3 ,b3 , 255);
    }
    ellipse(particleXpos[i], particleYpos[i], 13, 13);
  }
}
function general_particles_fadeout(r1, g1, b1, r2, g2, b2, r3, g3, b3) {

  //---PARTICLES---//

  //TOP LEFT QUADRANT
  for (var i = 0; i < 10; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 2*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*(1-sin(animation_timer)));
    strokeWeight(2);
    if (i<4) {
      fill(r1, g1, b1, 255*(1-sin(animation_timer)));
    } else if (i<7) {
        fill(r2, g2, b2, 255*(1-sin(animation_timer)));
    } else {
        fill(r3 ,g3 ,b3 , 255*(1-sin(animation_timer)));
    }
    ellipse(particleXpos[i], particleYpos[i], 13*(1-sin(animation_timer)), 13*(1-sin(animation_timer)));
  }
  
  //BOTTOM LEFT QUADRANT
  for (var i = 10; i < 20; i++) {
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = windowWidth/4 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 3*windowHeight/5 + (4*windowHeight/5)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*(1-sin(animation_timer)));
    strokeWeight(2);
    if (i<14) {
      fill(r1, g1, b1, 255*(1-sin(animation_timer)));
    } else if (i<17) {
        fill(r2, g2, b2, 255*(1-sin(animation_timer)));
    } else {
        fill(r3 ,g3 ,b3 , 255*(1-sin(animation_timer)));
    }
    ellipse(particleXpos[i], particleYpos[i], 13*(1-sin(animation_timer)), 13*(1-sin(animation_timer)));
  }
}
function line_fadein() {
  
  stroke(70, sin(animation_timer)*255);
  strokeWeight(sin(animation_timer)*2);
  line(windowWidth/2, windowHeight/2 - 106, windowWidth/2, windowHeight/2 + 111);

}
function line_static() {

  stroke(70);
  strokeWeight(2);
  line(windowWidth/2, windowHeight/2 - 106, windowWidth/2, windowHeight/2 + 111);

}
function line_fadeout() {
  
  stroke(70);
  strokeWeight(2);
  line(windowWidth/2, windowHeight/2 - 106 - (3*windowHeight/10 - 133)*sin(animation_timer), windowWidth/2, windowHeight/2 + 111 - (3*windowHeight/10 + 84)*(sin(animation_timer)));
  //line(windowWidth/2, windowHeight/2 - 108 + 106*sin(animation_timer), windowWidth/2, windowHeight/2 + 111 - 113*sin(animation_timer));

}
function homebutton_fadein() {
  //homebutton
  fill(0, 255*(sin(animation_timer)));
  noStroke();
  textStyle(BOLD);
  textSize(24);
  text("<", (windowWidth/2)-10, (windowHeight/5)+1);
}
function homebutton_static() {
  //homebutton
  fill(0, 255);
  noStroke();
  textStyle(BOLD);
  textSize(24);
  text("<", (windowWidth/2)-10, (windowHeight/5)+1);
}
function homebutton_fadeout() {
  //homebutton
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textStyle(BOLD);
  textSize(24);
  text("<", (windowWidth/2)-10, (windowHeight/5)+1);
}

//---------------------DRAW----------------------//
var STATE = 0; //highest level state, 4 states indicated in draw()
var animation_timer = 0; //timer reset per substate, incremented by HALF_PI ratios (used for sinusodial animations)
var animation_substate = 0; //indicate substate within animation state
var first_time = 1; //indicate whether first time loading website to ignore page fadeout
var fps = 0; //FPS used to measure sketch performance
var current_page = "home"; //indicator of current page

var particles = []; //array storing particle objects
var particleXpos = []; //array holding particle X positions
var particleYpos = []; //array holding particle Y positions
var perlinTimers = []; //array holding noise seeds
var particleNumber = 20; //if below 20, you'll need to redefine generalParticles()

function draw() {

  //-----STATE AGNOSTIC-----//
  state_agnostic();
  
  //-----STATE DEPENDANT-----//

  //STATE 0: HOMEPAGE FADE-IN
  if (STATE == 0) {

    //substate 0: PAGE FADE-OUT
    if (animation_substate == 0) {
      if (!first_time) {
        if (animation_timer <= HALF_PI) {
          page_info[current_page]["content_fadeout"]();
          general_particles_fadeout(...page_info[current_page]["particle_colors"]);
          homebutton_fadeout();
          animation_timer += (HALF_PI/60);
        } else {
          animation_substate = 1;
          animation_timer = 0;
        }   
      } else {
        first_time = 0;
        animation_substate = 1;
      } 
    }

    //substate 1: IMAGE SLIDE
    if (animation_substate == 1) {
      current_page = "home";
      if (animation_timer <= HALF_PI) {
        image_slidein();
        line_fadein();
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 2;
        animation_timer = 0;
      }
    }

    //substate 2: CONTENT SLIDE
    if (animation_substate == 2) {
      if (animation_timer <= HALF_PI) {
        content_slidein();
        image_static();
        line_static();
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 3;
        animation_timer = 0;
      }
    }

    //substate 3: PARTICLE FADE-IN
    if (animation_substate == 3) {
      if (animation_timer <= HALF_PI) {
        content_static();
        particle_fadein();
        image_static();
        line_static();
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 0;
        animation_timer = 0;
        STATE = 1;
      } 
    }

  }

  //STATE 1: HOMEPAGE STATIC
  if (STATE == 1) {

    content_static();
    particle_static();
    image_static();
    line_static();

  }

  //STATE 2: HOMEPAGE TO PAGE
  if (STATE == 2) {

    //substate 0: HOMEPAGE CONTENT FADE-OUT
    if (animation_substate == 0) {
      if (animation_timer <= HALF_PI) {
        content_fadeout();
        particle_fadeout();
        image_static();
        line_static();
        noStroke();
        text(page_info[current_page]["tab_info"].title, (windowWidth/2 + 33), page_info[current_page]["tab_info"].text_y+windowHeight/2); //keep selected tab text visible
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 1;
        animation_timer = 0;
      }
    }
    
    //substate 1: IMAGE SLIDE AND TAB2TITLE
    if (animation_substate == 1) {
      if (animation_timer <= HALF_PI) {
        image_slideout();
        line_static();
        tab2title(page_info[current_page]["tab_info"].title, page_info[current_page]["tab_info"].text_y+windowHeight/2, windowHeight/5);
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 2;
        animation_timer = 0;
      }
    }
    
    //substate 2: PAGE FADE-IN
    if (animation_substate == 2) {
      if (animation_timer <= HALF_PI) {
        line_fadeout();
        page_info[current_page]["content_fadein"]();
        general_particles_fadein(...page_info[current_page]["particle_colors"]);
        homebutton_fadein();
        animation_timer += (HALF_PI/60);
      } else {
        STATE = 3;
        animation_substate = 0;
        animation_timer = 0;
      }
    }
  }

  //STATE 3: PAGE STATIC
  if (STATE == 3) {

    page_info[current_page]["content_static"]();
    general_particles_static(...page_info[current_page]["particle_colors"]);
    homebutton_static();

  }
}

//-----MousePressed-----// see p5js documentation for MousePressed() function
function mousePressed() {
  //if in homepage static
  if (STATE==1) {
    //if click within about Tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+53)) && (mouseY<((windowHeight/2)-20+20)) && (mouseY>((windowHeight/2)-20))) { //watch out for reversly define mouseY box
      current_page = "about";
    }
    //if click within compositions Tab
    else if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+103)) && (mouseY<((windowHeight/2)+2+20)) && (mouseY>((windowHeight/2)+2))) {
      current_page = "compositions";
    }
    //if click within performances Tab
    else if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+106)) && (mouseY<((windowHeight/2)+24+20)) && (mouseY>((windowHeight/2)+24))) {
      current_page = "performances";
    }
    //if click within publications tab
    else if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+97)) && (mouseY<((windowHeight/2)+46+20)) && (mouseY>((windowHeight/2)+46))) {
      current_page = "publications";
    }
    //if click within projects tab
    else if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+70)) && (mouseY<((windowHeight/2)+68+20)) && (mouseY>((windowHeight/2)+68))) {
      current_page = "projects";
    }
    //if click within contact tab
    else if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+65)) && (mouseY<((windowHeight/2)+90+20)) && (mouseY>((windowHeight/2)+90))) {
      current_page = "contact";
    }
    //move to home to page state
    if (current_page != "home") {
      STATE = 2;
    }
  }
}
