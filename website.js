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
home["particle_fadein"] = particle_fadein;
home["particle_static"] = particle_static;

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

//---------------------DRAW----------------------//
var STATE = 0; //highest level state, 4 states indicated in draw()
var animation_timer = 0; //timer reset per substate, incremented by HALF_PI ratios (used for sinusodial animations)
var animation_substate = 1; //indicate substate within animation state
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

    //substate 3: PARTICLE FADE-IN
    if (animation_substate == 2) {
      if (animation_timer <= HALF_PI) {
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

    particle_static();
    image_static();
    line_static();

  }
}
