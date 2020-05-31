//DISCLAIMER - If you stumble uppon this code...
//I wrote this website/p5.js sketch in 3 days in a remote location with no WIFI.
//The code is messy, unstructured, and lacks documentation. I am devoting the few minutes
//of free time I can find to organizing and optimizing it.


//-----STATES-----//

//state 0: Opening slide and fade transition to home screen
//state 1: Home screen

//state 2: fade-out of text and tab boxes
//state 3: Movement of text "about"
//state 4: slide in of tab contents
//state 5: about tab
//state 6: about tab fade-out

//state 7: fade-out of text and tab boxes
//state 8: Movement of text "compositions"
//state 9: slide in of tab contents
//state 10: compositions tab
//state 11: composition tab fade-out

//state 12: fade-out of text and tab boxes
//state 13: Movement of text "performances"
//state 14: slide in of tab contents
//state 15: performances tab
//state 16: performances tab fade-out

//state 17: fade-out of text and tab boxes
//state 18: Movement of text "publications"
//state 19: slide in of tab contents
//state 20: publications tab
//state 21: publications tab fade-out

//state 22: fade-out of text and tab boxes
//state 23: Movement of text "other projects"
//state 24: slide in of tab contents
//state 25: other projects tab
//state 26: other projects tab fade-out

//state 27: fade-out of text and tab boxes
//state 28: Movement of text "contact"
//state 29: slide in of tab contents
//state 30: contact tab
//state 31: contact tab fade-out

//-----VARIABLES-----//

var fps = 0; //FPS used to measure sketch performance
var state = 0; //Website pages and animations loaded based on states
var state010 = 0; //substate used to indicate loading transition of homepage
var state011 = 0; //substate used to indicate the no-transition "static" state of the homepage
var state012 = 0; //substate used to indiate exiting transition of homepage

//---TEXT & IMAGES---//

//build text
var alpha = "alpha version" 

//TABS
var about = "about";
var compositions = "compositions";
var performances = "performances";
var publications = "publications";
var other_projects = "other projects";
var contact = "contact";

//homepage text
var hi = "Hi!";
var description = "My name is Christos Plachouras, and I'm working on some cool stuff in music, computer science, mathematics, and engineering. You can find some of them on this website!";

//about page
var aboutContent = "    I am currently an undergraduate student at New York University Abu Dhabi, majoring in Computer Science and Music. Things I am currently working surround areas such as audio signal processing, optical music recognition, computational musicology, machine learning, information theory, mathematical logic, contemporary composition inluding classical and electronic, and piano performance. Below, you can read a short overview of my journey.\n\n   I was born and raised in Athens, Greece. At the age of 3, I started my first music classes in the Philippos Nakas Conservatory. After receiving diplomas for Autorgan (keyboard) and Electone (electronic organ) at the age of 8, I started having classical piano and music theory classes. During this period I started composing my own music, and got involved in competitions such as YAMAHA's Young Composers European Competition. At the age of 11, I decided to continue my music education with Sami Amiris, one of the most well-known jazz pianists in Greece. Amiris played an important role in the development of my love for mathematics, programming, and music. Ever since then, I have been exploring music through both a scientific and an artistic lens.\n\n    Ever since my journey at New York University started, I have been fortunate to explore my passions further. I have been studying in Abu Dhabi, Paris, and, currently, in New York, in cool places such as IRCAM, École Cortot, and NYU's Music and Science Departments.";

//compositions page
var string_quartet_title = "Piece for String Quartet";
var string_quartet_performance = "Omer Quartet, Live at NYUAD Blue Hall, 14th of March, 2019";
var string_quartet_img;
var preludes_title = "12 Preludes of Tonal Resolution for Piano";
var preludes_performance = "Christos Plachouras, 26th of August, 2019";
var preludes_img;
var mapinmusic_title = "Map in Music - A Sonification Project";
var mapinmusic_performance = "Eunsu Choi (violin), Christos Plachouras (piano), Live at NYUAD Blue Hall, 14th of December, 2017";
var mapinmusic_img;
var flowersescape_title = "Flower's Escape";
var flowersescape_performance = "Christos Plachouras, Live at NYUAD Blue Hall, 10th of December, 2018";
var floswersescape_img;

//performances page
var rach_title = "Rachmaninoff - Piano Concerto No. 2, I. Moderato";
var rach_performance = "Christos Plachouras, Ioannis Potamousis, Live at NYUAD Blue Hall, 13th of December, 2018";
var rach_img;
var messiaen_title = "Messiaen - Vingt Regards - II. Regard de l'étoile";
var messiaen_performance = "Christos Plachouras, Studio Odeon, Athens, 19th of October, 2016";
var messiaen_img;
var bach_title = "Bach - Partita No. 2 in C minor, I. Simfonia";
var bach_performance = "Christos Plachouras, Live at NYUAD Blue Hall, 3rd of May, 2018";

//publications page
var dlfm2019_title = "Mapping the Sounds of the Swahili coast and the Arab Mashriq: Music research at the intersection of computational analysis and cultural heritage preservation";
var dlfm2019_description = "TROMPA Poster presentation at the 6th Digital Libraries for Musicology event of ISMIR 2019"
var dlfm2019_img;

//other_projects page
var koechlin_title = "Charles Koechlin - Computational Musicology (active)";
var koechlin_description = "A project exploring music generation using the music of Charles Koechlin. The main focus is to uncover how musical markings such as note groupings and dynamics can automatically provide hierarchical knowledge for the neural networks that are being trained, and to design a musically rich multi-dimensional matrix encoding of scores that can be fed to non-reccurent neural networks and open up new possibilites for music generation.";
var koechlin_img;
var tool_title = "Electronic Composition Tool (active)";
var tool_description = "A highly modular composition tool initially developed during my course at IRCAM, and consisting of Max patchers and python scripts. It rellies on a directory of soundfiles that are either pre-recorder, or sequentially recorder during a live performance, and provides an interface to retrieve those files according to their spectral, cepstral, and tempo features, as well as an interface with effects such as spatial movement of multiple instances of the same retrieved soundfile.";
var tool_img;
var masc_title = "Computational Analysis, Cultural Preservation - MaSC (active)";
var masc_description = "\"The Music and Sound Cultures (MaSC) research group is a collective of researchers focusing on the multidisciplinary study of music from the Gulf, the Levant, East Africa, and South India. Having as a primary goal the study and dissemination of music from this region, the group currently hosts several projects that range from the preservation of collections of field or rare commercial recordings, to developing innovative ways of conducting musical heritage analysis, preservation, and dissemination.\"";
var masc_img;
var omr_title = "Music Notation - Optical Music Recognition (active)";
var omr_description = "A modular music notation and engraving software that utilizes an efficient optical music recognition engine for convertion of digital pen-written music notation to digital. The focus is on the reading efficiency, the modularity for different types of users, and the total freedom, built from the ground up, for contemporary notation.";
var omr_img;

//contact
var contact_linkedin = "My LinkedIn: Christos Plachouras";
var contact_email = "My email: cplachouras -αt- nyu.edu";
var current_location = "I am currently in: Athens!";
var current_location_img;

//homepage and about images
var profile;
var profile1;

//home button
var homebutton = "<";

//-----COUNTERS-----//

//tabs
var aboutCounter = 0;
var compositionsCounter = 0;
var performancesCounter = 0;
var publicationsCounter = 0;
var other_projectsCounter = 0;
var contactCounter = 0;

//tab transition counter
var transitionCounter = 0;
var transitionCounterper = 0;

//----FRAME WIDTHS----//

//define width of background boxes for tabs
var aboutFrameWidth = 53;
var compositionsFrameWidth = 103;
var performancesFrameWidth = 106;
var publicationsFrameWidth = 97;
var other_projectsFrameWidth = 110;
var contactFrameWidth = 65;

//-----PARTICLES-----//

//initializations for particles
var particles = []; //array storing particle objects
var particleXpos = []; //array holding particle X positions
var particleYpos = []; //array holding particle Y positions
var perlinTimers = []; //array holding noise seeds
var particleNumber = 40; //if below 20, you'll need to redefine generalParticles()

//-----PRELOAD-----// see p5js documentation for preload() function
function preload() {

  //preload images
  profile = loadImage('profile.png');
  profile1 = loadImage('profile1.png');
  string_quartet_img = loadImage('string_quartet.png');
  preludes_img = loadImage('preludes.png');
  mapinmusic_img = loadImage('mapinmusic.png');
  flowersescape_img = loadImage('flowersescape.png');
  rach_img = loadImage('rach.png');
  messiaen_img = loadImage('messiaen.png');
  bach_img = loadImage('bach.png');
  koechlin_img = loadImage('koechlin.png');
  dlfm2019_img = loadImage('dlfm2019.png');
  tool_img = loadImage('tool.png');
  masc_img = loadImage('masc.png');
  omr_img = loadImage('omr.png');
  current_location_img = loadImage('newyork.png');
}

//-----SETUP-----// see p5js documentation for setup() function
function setup() {

  //creating canvas equal to the width and height available by the browser
  createCanvas(windowWidth, windowHeight);

  //create Tab info
  var Tabs = {};
  tabs['']

  //create specified number of instances of the particle class
  for (var i = 0; i < particleNumber; i++) {
    particles[i] = new Particles();
    //initialize a different perlin noise seed for each particle
    perlinTimers[i] = (i*100);
  }
}

//----TAB ANIMATIONS----// 
//create a background box for tabs using consecutive vertical lines with changing stroke to create gradient
function tabAnimations(xpos, ypos, lCounter, frameWidth, startR, startG, startB, dropR, dropG, dropB, alpha) {
  //xpos value of moving tab box relative to middle width
  //upper ypos value relative to middle height
  //lCounter = counter of current animation?
  //frameWidth = width of the moving tab box
  //startRGB = starting values of the fade
  //dropRGB = the amount of reduction of each value at the end of the fade

  lines = round(sin(lCounter)*frameWidth);
  strokeWeight(1.2);
  stroke(startR-dropR, startG-dropG, startB-dropB, alpha);

  //draw 3 lines at the start (left) of each box, regardless of mouse positions
  for (var i = 0; i < 3; i++) {
    line(((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos), ((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos+20));
  }

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

//draw static box on the left of specified tab
function static_box() {
  for (var i = 0; i < 3; i++) {
    line(((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos), ((windowWidth/2)+xpos+i), ((windowHeight/2)+ypos+20));
  }
}

function tab2title(textvar, currentY, desiredY) {
  textStyle(BOLD);
  fill(0);
  noStroke();
  textSize(12*(1+transitionCounterper));
  text(textvar, (windowWidth/2 + 33), (currentY - ((currentY-desiredY)*transitionCounterper)));
}

function generalParticles(r1, g1, b1, r2, g2, b2, r3, g3, b3, timer) { //set timer to 1 if no timer for opacity, set 1-transitionCounterper for fade-out

  //---LINES---// drawn before particles using a different loop so that lines don't overlay any particles
  if (timer==1) { //prevent drawing a huge amount of lines before particle position is summed
    for (var i = 0; i < 20; i++) {
      stroke(100, 150*timer);
      strokeWeight(1);
      for (var j=0; j<20; j++) {
        if (((Math.abs(particleXpos[i]-particleXpos[j]))<0.07*windowWidth) && ((Math.abs(particleYpos[i]-particleYpos[j]))<0.07*windowHeight)) {
          line(particleXpos[i], particleYpos[i], particleXpos[j], particleYpos[j]);
        }
      }
    }
  }

  //---PARTICLES---//

  // //TOP LEFT QUADRANT
  // for (var i = 30; i < 40; i++) {
  //   //without x/yposupdate, so ignoring mousepoisition
  //   perlinTimers[i] += (0.0001*i)+(0.0001);
  //   particleXpos[i] = windowWidth/8 + (windowWidth/3)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
  //   particleYpos[i] = windowHeight/4 + (2*windowHeight/3)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
  //   stroke(50, 255*timer);
  //   strokeWeight(3);
  //   if (i<34) {
  //     fill(r1, g1, b1, 255*timer);
  //   } else if (i<37) {
  //       fill(r2, g2, b2, 255*timer);
  //   } else {
  //       fill(r3 ,g3 ,b3 , 255*timer);
  //   }
  //   ellipse(particleXpos[i], particleYpos[i], 10, 10);
  // }
  //
  // //BOTTOM LEFT QUADRANT
  // for (var i = 20; i < 30; i++) {
  //   //without x/yposupdate, so ignoring mousepoisition
  //   perlinTimers[i] += (0.0001*i)+(0.0001);
  //   particleXpos[i] = windowWidth/8 + (windowWidth/3)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
  //   particleYpos[i] = 3*windowHeight/4 + (2*windowHeight/3)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
  //   stroke(50, 255*timer);
  //   strokeWeight(3);
  //   if (i<24) {
  //     fill(r1, g1, b1, 255*timer);
  //   } else if (i<27) {
  //       fill(r2, g2, b2, 255*timer);
  //   } else {
  //       fill(r3 ,g3 ,b3 , 255*timer);
  //   }
  //   ellipse(particleXpos[i], particleYpos[i], 10, 10);
  // }


  for (var i = 0; i < 10; i++) {
    //TOP RIGHT QUADRANT
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i+10] += (0.0001*(i+10))+(0.0001);
    particleXpos[i+10] = 3*windowWidth/8 + (windowWidth/2)*(noise(perlinTimers[i+10]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i+10] = windowHeight/4 + (windowHeight)*(noise(perlinTimers[i+10]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*timer);
    strokeWeight(3);
    if (i<4) {
      fill(r1, g1, b1, 255*timer);
    } else if (i<7) {
        fill(r2, g2, b2, 255*timer);
    } else {
        fill(r3, g3, b3, 255*timer);
    }
    ellipse(particleXpos[i+10], particleYpos[i+10], 10, 10);

    //BOTTOM RIGHT QUADRANT
    //without x/yposupdate, so ignoring mousepoisition
    perlinTimers[i] += (0.0001*i)+(0.0001);
    particleXpos[i] = 3*windowWidth/8 + (windowWidth/2)*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
    particleYpos[i] = 3*windowHeight/4 + (windowHeight)*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread
    stroke(50, 255*timer);
    strokeWeight(3);
    if (i<4) {
      fill(r1, g1, b1, 255*timer);
    } else if (i<7) {
        fill(r2, g2, b2, 255*timer);
    } else {
        fill(r3, g3, b3, 255*timer);
    }
    ellipse(particleXpos[i], particleYpos[i], 10, 10);
  }
}


function tabTransition (currentState, tabvar, currentY, desiredY) {
  //---particles---//
  if (state==currentState) {
    for (var i = 0; i < particleNumber; i++) {
      perlinTimers[i] += (0.0001*i)+(0.0001);
      particleXpos[i] = particles[i].xposupdate() + 700*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
      particleYpos[i] = particles[i].yposupdate() + 700*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread

      //Lines
      strokeWeight(1.5);
      //varying line colors based on particle index
      //state012per makes them reach the specified alpha value when fade-in is done
      if (i%3==0) {
        stroke(200, 255*(1-transitionCounterper));
      } else {
        if (i%5==0) {
          stroke(185, 255*(1-transitionCounterper));
        } else {
          if (i%7==0) {
            stroke(170, 255*(1-transitionCounterper));
          } else {
            stroke(155, 255*(1-transitionCounterper));
          }
        }
      }
      //line connecting particles with middle of picture
      line(particleXpos[i], particleYpos[i], (windowWidth/2)-100, windowHeight/2);

      // // line connecting particles with other particles
      // if (i<particleNumber-2) {
      //   line(particleXpos[i], particleYpos[i], particleXpos[i+1], particleYpos[i+1]);
      // }

      //Particles
      strokeWeight(2);
      stroke(0, (1-transitionCounterper)*255);
      if (i%3==0) {
        //stroke(213,126,42, (state012per)*255);
        fill(179, 157, 219, (1-transitionCounterper)*255);
      } else {
        if (i%5==0) {
          //stroke(0,151,167, (state012per)*255);
          fill(239, 108, 0, (1-transitionCounterper)*255);
        } else {
          if (i%7==0) {
            //stroke(183,11,104, (state012per)*255);
            fill(128, 203, 196, (1-transitionCounterper)*255);
          } else {
            //stroke(100, (state012per)*255);
            fill(100, (1-transitionCounterper)*255);
          }
        }
      }
      ellipse(particleXpos[i], particleYpos[i], 11, 11);
    }



    //---tabs---//
    strokeWeight(1.2);
    aboutCounter += tabAnimations(25-((1-state011per)*300), -20, aboutCounter, aboutFrameWidth, 179, 157, 219, 20, 20, 20, 255*(1-transitionCounterper));
    compositionsCounter += tabAnimations(25-((1-state011per)*300), 2, compositionsCounter, compositionsFrameWidth, 159, 168, 218, 20, 20, 20, 255*(1-transitionCounterper));
    performancesCounter += tabAnimations(25-((1-state011per)*300), 24, performancesCounter, performancesFrameWidth, 144, 202, 249, 20, 20, 0, 255*(1-transitionCounterper));
    publicationsCounter += tabAnimations(25-((1-state011per)*300), 46, publicationsCounter, publicationsFrameWidth, 129, 212, 250, 20, 20, 20, 255*(1-transitionCounterper));
    other_projectsCounter += tabAnimations(25-((1-state011per)*300), 68, other_projectsCounter, other_projectsFrameWidth, 128, 222, 234, 20, 20, 20, 255*(1-transitionCounterper));
    contactCounter += tabAnimations(25-((1-state011per)*300), 90, contactCounter, contactFrameWidth, 128, 203, 196, 20, 20, 20, 255*(1-transitionCounterper));
    noStroke();
    fill(0);
    textStyle(BOLD);
    text(tabvar, (windowWidth/2 + 33)-((1-state011per)*300), currentY);

    //---image---//
    image(profile, (windowWidth/2 - 180), windowHeight/2 - 86, 180, 180);

    //---eyes---//
    fill(50, 255*(1-transitionCounterper));
    noStroke();
    if (mouseX<=(windowWidth/2)) {
      ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
      ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
    } else if (mouseX>(windowWidth/2)) {
      ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2)  - 9 + (mouseY/windowHeight)*3, 8, 8);
      ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
    }

    //description
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(15);
    text(hi, (windowWidth/2 + 25), windowHeight/2 - 95);
    textSize(12);
    text(description, (windowWidth/2 + 25), windowHeight/2 - 86, 300, 300);

    //-tab text-//
    textStyle(BOLD);
    text(about, (windowWidth/2 + 33), windowHeight/2 -5);
    text(compositions, (windowWidth/2 + 33), windowHeight/2 + 17);
    text(performances, (windowWidth/2 + 33), windowHeight/2 + 39);
    text(publications, (windowWidth/2 + 33), windowHeight/2 + 61);
    text(other_projects, (windowWidth/2 + 33), windowHeight/2 + 83);
    text(contact, (windowWidth/2 + 33), windowHeight/2 + 105);
  }

  if (state==currentState+1) {
    //---picture---//
    image(profile, (windowWidth/2 - 180)+((transitionCounterper)*180), windowHeight/2 - 86, 180, 180);
    //rect to hide image
    noStroke();
    fill(255);
    rect((windowWidth/2), (windowHeight/2)-106, 200, 217);
    //tab text transition from tab to title position
    textStyle(BOLD);
    tab2title(tabvar, currentY, desiredY);

  }
  //last part of the function manages title and homebutton, the page's content is handled seperately
  if (state==currentState+2) {
    noStroke();
    fill(0);
    textSize(24);
    textStyle(BOLD);
    text(tabvar, (windowWidth/2) + 33, desiredY);

    if (state!=24) {
      fill(0, 255*(transitionCounterper))
      textSize(24);
      text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);
    } else {
      fill(0, 255*(transitionCounterper))
      textSize(24);
      text(homebutton, (windowWidth/2)-10, (windowHeight/5)+1);
    }
  }
}


//-----Particle Class-----//
function Particles() {

  //initial spread of particles
  // this.x = random((windowWidth/2)-225, ((windowWidth/2)+25));
  this.x = random((windowWidth/2)-525, ((windowWidth/2)+325));
  // this.y = random((windowHeight/2)-125, (windowHeight/2)+125);
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

//-----Tab Class-----//
function Tab(title, x, y, width, startR, startG, startB, dropR, dropG, dropB) {
  this.title = title;
  this.x = x;
  this.y = y;
  this.width = width;
  this.startR = startR;
  this.startG = startG;
  this.startB = startB;
  this.dropR = dropR;
  this.dropG = dropG;
  this.dropB = dropB;
}

function picture_slidein() {
  if (state010 <= HALF_PI) { //check until that value
    state010 += (HALF_PI/60); //linear counter //divisor determines the duration // for a 1sec animation, divide by 60=p5js default update rate
    state010per = sin(state010); //translates linear counter to sinusodial animation
    // state010 += (1/60);
    // state010per = (state010)**2;
  } else if (state011 <= HALF_PI) { //when picture animation done, text and tab animation
    state011 += (HALF_PI/60);
    state011per = sin(state011);
  } else if (state012 <= HALF_PI) { //when picture and tab animation done, particle fade in
    state012 += (HALF_PI/60);
    state012per = sin(state012);
  } else {
    state = 1;
  }
}

function picture_static() {

}

function picture_slideout() {

}



//---------------------NEW DRAW----------------------//
var STATE = 0;
var animation_timer = 0;
var animation_substate = 0;

function draw() {

  //-----STATE AGNOSTIC-----//

  //---background---//
  background(255);

  //---version---//
  fill(0);
  noStroke();
  textStyle(NORMAL);
  textSize(12);
  text('alpha version', 5, 15)

  //-----STATE DEPENDANT-----//

  //STATE 0: HOMEPAGE FADE-IN
  if (STATE == 0) {

    //SUBSTATE 0: PAGE FADE-OUT
    if (animation_substate == 0) {
      if (!first_time) {
        if (animation_timer <= HALF_PI) {
          //call general particle fade-out
          //call content fade-out
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

    //SUBSTATE 1: IMAGE SLIDE
    if (animation_substate == 1) {
      if (animation_timer <= HALF_PI) {
        //call image slide
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 2;
        animation_timer = 0;
      }
    }

    //SUBSTATE 2: CONTENT SLIDE
    if (animation_substate == 2) {
      if (animation_timer <= HALF_PI) {
        //call image static
        //call content slide
        animation_timer += (HALF_PI/60);
      } else {
        animation_substate = 3;
        animation_timer = 0;
      }
    }

    //SUBSTATE 3: PARTICLE FADE-IN
    if (animation_substate == 3) {
      if (animation_timer <= HALF_PI) {
        //call image static
        //call content static
        //call particle fade-in
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

    //call image static
    //call content static
    //call particle static

  }

  //STATE 2: HOMEPAGE TO PAGE
  if (STATE == 2) {

    //SUBSTATE 1: HOMEPAGE CONTENT FADE-OUT
    //call image static
    //call content fadeout
    //call particle fadeout

    //SUBSTATE 2: IMAGE SLIDE AND TAB2TITLE
    //call image slide
    //call tab2title

    //SUBSTATE 3: PAGE FADE-IN
    //call general particles fade-in
    //call content fade-in

  }

  //STATE 3: PAGE STATIC
  if (STATE == 3) {

    //call general particles static
    //call content static

  }
}







//-----DRAW-----// see p5js documentation for draw() function
function draw() {


  //---background---//
  background(255);

  //version
  fill(0);
  noStroke();
  textFont('Verdana');
  textStyle(NORMAL);
  textSize(12);
  text('alpha version', 5, 15)

  // //get framerate
  // if (frameCount%15==0) {
  //   fps = frameRate();
  // }

  //---TAB TRANSITION COUNTER---//
  if (state==2 || state==3 || state==4 || state==6 || state==7 || state==8 || state==9 || state==11 || state==12 || state==13 || state==14 || state==16 || state==17 || state==18 || state==19 || state==21 || state==22 || state==23 || state==24 || state==26 || state==27 || state==28 || state==29 || state==31) {
    if (transitionCounter <= HALF_PI) {
      transitionCounter += (HALF_PI/60);
      transitionCounterper = sin(transitionCounter);
    } else if (transitionCounter > HALF_PI) {
      transitionCounter = 0;
      transitionCounterper = 0; //to avoid first animation in line using its max value
      if (state!=6 && state!=11 && state!=16 && state!=21 && state!=26 && state!=31) {
        state += 1;
      } else {
        state = 0;
      }
    }
  }

  //---Debug Text---///

  // text("FPS: " + fps.toFixed(2), 10, height - 10);
  // text("State: " + state, 10, height - 25);
  // text("Transition: " + transitionCounter, 10, height - 40);


  //---homepage element animation calculations---//

  //picture animation
  if (state==0) {
    if (state010 <= HALF_PI) { //check until that value
      state010 += (HALF_PI/60); //linear counter //divisor determines the duration // for a 1sec animation, divide by 60=p5js default update rate
      state010per = sin(state010); //translates linear counter to sinusodial animation
      // state010 += (1/60);
      // state010per = (state010)**2;
    } else if (state011 <= HALF_PI) { //when picture animation done, text and tab animation
      state011 += (HALF_PI/60);
      state011per = sin(state011);
    } else if (state012 <= HALF_PI) { //when picture and tab animation done, particle fade in
      state012 += (HALF_PI/60);
      state012per = sin(state012);
    } else {
      state = 1;
    }
  }

  //---particles---//
  if (state==0 || state==1) {
    if (state012 > 0) {
      for (var i = 0; i < particleNumber; i++) {
        perlinTimers[i] += (0.0001*i)+(0.0001);
        particleXpos[i] = particles[i].xposupdate() + 700*(noise(perlinTimers[i]) - 0.5); //multiplicative parameter changes particle spread
        particleYpos[i] = particles[i].yposupdate() + 700*(noise(perlinTimers[i]+1) - 0.5); //multiplicative parameter changes particle spread


        //Lines

        strokeWeight(1.5);
        //varying line colors based on particle index
        //state012per makes them reach the specified alpha value when fade-in is done
        if (i%3==0) {
          stroke(200, (state012per)*255);
        } else {
          if (i%5==0) {
            stroke(185, (state012per)*255);
          } else {
            if (i%7==0) {
              stroke(170, (state012per)*255);
            } else {
              stroke(155, (state012per)*255);
            }
          }
        }
        //line connecting particles with middle of picture
        line(particleXpos[i], particleYpos[i], (windowWidth/2)-100, windowHeight/2);

        // // line connecting particles with other particles
        // if (i<particleNumber-2) {
        //   line(particleXpos[i], particleYpos[i], particleXpos[i+1], particleYpos[i+1]);
        // }

        //Particles
        strokeWeight(2);
        stroke(0, (state012per)*255);
        if (i%3==0) {
          //stroke(213,126,42, (state012per)*255);
          fill(179, 157, 219, (state012per)*255);
        } else {
          if (i%5==0) {
            //stroke(0,151,167, (state012per)*255);
            fill(239, 108, 0, (state012per)*255);
          } else {
            if (i%7==0) {
              //stroke(183,11,104, (state012per)*255);
              fill(128, 203, 196, (state012per)*255);
            } else {
              //stroke(100, (state012per)*255);
              fill(100, (state012per)*255);
            }
          }
        }
        ellipse(particleXpos[i], particleYpos[i], 10, 10);

        strokeWeight(1);
      }
    }
  }

  //---tab boxes---//
  if ((state011 > 0) && (state==0 || state==1)) {
    strokeWeight(1.2);
    //to change spacing between tabs, make changes in tab transitions, text, and the mousePressed function
    aboutCounter += tabAnimations(25-((1-state011per)*300), -20, aboutCounter, aboutFrameWidth, 179, 157, 219, 20, 20, 20, state011per*255);
    compositionsCounter += tabAnimations(25-((1-state011per)*300), 2, compositionsCounter, compositionsFrameWidth, 159, 168, 218, 20, 20, 20, state011per*255);
    performancesCounter += tabAnimations(25-((1-state011per)*300), 24, performancesCounter, performancesFrameWidth, 144, 202, 249, 20, 20, 20, state011per*255);
    publicationsCounter += tabAnimations(25-((1-state011per)*300), 46, publicationsCounter, publicationsFrameWidth, 129, 212, 250, 20, 20, 20, state011per*255);
    other_projectsCounter += tabAnimations(25-((1-state011per)*300), 68, other_projectsCounter, other_projectsFrameWidth, 128, 222, 234, 20, 20, 20, state011per*255);
    contactCounter += tabAnimations(25-((1-state011per)*300), 90, contactCounter, contactFrameWidth, 128, 203, 196, 20, 20, 20, state011per*255);
  }

  //---homepage text---//
  if (state==0 || state==1) {
    if (state011 > 0 && state!=2) {
      fill((1-state011per)*255);
      noStroke();
      textFont('Verdana');
      textStyle(NORMAL);
      textSize(15);
      text(hi, (windowWidth/2 + 25)-((1-state011per)*300), windowHeight/2 - 95);
      textSize(12);
      text(description, (windowWidth/2 + 25)-((1-state011per)*300), windowHeight/2 - 86, 300, 300);

      //-tab text-//
      textStyle(BOLD);
      text(about, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 -5);
      text(compositions, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 + 17);
      text(performances, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 + 39);
      text(publications, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 + 61);
      text(other_projects, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 + 83);
      text(contact, (windowWidth/2 + 33)-((1-state011per)*300), windowHeight/2 + 105);
    }
  }

  //-----TAB SWITCHING-----//


  //----------##########ABOUT##########----------//
  if (state==2 || state==3 || state==4) {
    tabTransition(2, about, windowHeight/2 -5, windowHeight/4);
  }

  if (state==4) { //last animation for about page
    //Particles
    generalParticles(173, 20, 87, 0, 172, 193, 251, 140, 0, 169, transitionCounterper);

    //-----CONTENT-----//
    fill(0, transitionCounterper*255);
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(12);
    text(aboutContent, windowWidth/2 + 33, windowHeight/4 + 25, windowWidth/4, 2*windowHeight/3);

    tint(255, 255*transitionCounterper);
    image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);
  }

  if (state==5) { //static about page

    //lines
    for (var i = 2; i < 12; i++) {
      stroke(100, 150);
      strokeWeight(1);
      for (var j=2; j<12; j++) {
        if (((Math.abs(particleXpos[i]-particleXpos[j]))<0.04*windowWidth) && ((Math.abs(particleYpos[i]-particleYpos[j]))<0.04*windowHeight)) {
          line(particleXpos[i], particleYpos[i], particleXpos[j], particleYpos[j]);
        }
      }
    }
    generalParticles(173, 20, 87, 0, 172, 193, 251, 140, 0, 1);

    //Title
    noStroke();
    fill(0);
    textStyle(BOLD);
    textSize(24);
    text(about, (windowWidth/2) + 33, windowHeight/4);
    //Image
    image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);

    //-----Content-----//
    fill(0, 255);
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(12);
    text(aboutContent, windowWidth/2 + 33, windowHeight/4 + 25, windowWidth/4, 2*windowHeight/3);
  }

  if (state==6) { //fade-out of about page
    //lines
    for (var i = 2; i < 12; i++) {
      stroke(100, 150*(1-transitionCounterper));
      strokeWeight(1);
      for (var j=2; j<12; j++) {
        if (((Math.abs(particleXpos[i]-particleXpos[j]))<0.04*windowWidth) && ((Math.abs(particleYpos[i]-particleYpos[j]))<0.04*windowHeight)) {
          line(particleXpos[i], particleYpos[i], particleXpos[j], particleYpos[j]);
        }
      }
    }

    generalParticles(173, 20, 87, 0, 172, 193, 251, 140, 0, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);

    //-----Content-----//
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(12);
    text(aboutContent, windowWidth/2 + 33, windowHeight/4 + 25, windowWidth/4, 2*windowHeight/3);

    //Title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(about, (windowWidth/2) + 33, windowHeight/4);
    //Image
    tint(255, 255*(1-transitionCounterper));
    image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);
  }

  //----------##########COMPOSITIONS#########----------//

  if (state==7 || state==8 || state==9) {
    tabTransition(7, compositions, windowHeight/2 +17, windowHeight/4);
  }

  if (state==9) { //last animation for compositions page
    generalParticles(173, 20, 87, 0, 172, 193, 139, 195, 74, transitionCounterper);

    //---frames---//
    stroke(0, 255*(transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 349, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255*(transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(transitionCounterper));

    //12 Preludes of Tonal Resolution for Piano
    textStyle(BOLD);
    textSize(12);
    text(preludes_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(preludes_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(preludes_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);

    //String Quartet
    textStyle(BOLD);
    textSize(12);
    text(string_quartet_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(string_quartet_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(string_quartet_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Map in music
    textStyle(BOLD);
    textSize(12);
    text(mapinmusic_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(mapinmusic_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);

    //Flower's Escape
    textStyle(BOLD);
    textSize(12);
    text(flowersescape_title, windowWidth/2 + 133, windowHeight/4 + 370, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(flowersescape_performance, windowWidth/2 + 133, windowHeight/4 + 385, windowWidth/3, 2*windowHeight/3);
    image(flowersescape_img, windowWidth/2 + 33, windowHeight/4 + 350, 75, 75);
  }

  if (state==10) { //static compositions page
    generalParticles(173, 20, 87, 0, 172, 193, 139, 195, 74, 1);

    //title
    noStroke();
    textStyle(BOLD);
    fill(0);
    textSize(24);
    text(compositions, (windowWidth/2) + 33, windowHeight/4);

    //---frames---//
    stroke(0);
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 349, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255);
    noStroke();
    textFont('Verdana');


    //12 Preludes of Tonal Resolution for Piano
    textStyle(BOLD);
    textSize(12);
    text(preludes_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(preludes_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(preludes_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);


    //String Quartet
    textStyle(BOLD);
    textSize(12);
    text(string_quartet_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(string_quartet_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(string_quartet_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Map in music
    textStyle(BOLD);
    textSize(12);
    text(mapinmusic_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(mapinmusic_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);

    //Flower's Escape
    textStyle(BOLD);
    textSize(12);
    text(flowersescape_title, windowWidth/2 + 133, windowHeight/4 + 370, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(flowersescape_performance, windowWidth/2 + 133, windowHeight/4 + 385, windowWidth/3, 2*windowHeight/3);
    image(flowersescape_img, windowWidth/2 + 33, windowHeight/4 + 350, 75, 75);

  }

  if (state==11) { //fade-out of compositions page
    generalParticles(173, 20, 87, 0, 172, 193, 139, 195, 74, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);

    //title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(compositions, (windowWidth/2) + 33, windowHeight/4);

    //---frames---//
    stroke(0, 255*(1-transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 349, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(1-transitionCounterper));

    //12 Preludes of Tonal Resolution for Piano
    textStyle(BOLD);
    textSize(12);
    text(preludes_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(preludes_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(preludes_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);

    //String Quartet
    textStyle(BOLD);
    textSize(12);
    text(string_quartet_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(string_quartet_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(string_quartet_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Map in music
    textStyle(BOLD);
    textSize(12);
    text(mapinmusic_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(mapinmusic_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);

    //Flower's Escape
    textStyle(BOLD);
    textSize(12);
    text(flowersescape_title, windowWidth/2 + 133, windowHeight/4 + 370, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(flowersescape_performance, windowWidth/2 + 133, windowHeight/4 + 385, windowWidth/3, 2*windowHeight/3);
    image(flowersescape_img, windowWidth/2 + 33, windowHeight/4 + 350, 75, 75);
  }

  //----------##########PERFORMANCES##########----------//

  if (state==12 || state==13 || state==14) {
    tabTransition(12, performances, windowHeight/2 +39, windowHeight/4);
  }

  if (state==14) { //last animations of performances page
    generalParticles(48, 63, 159, 0, 172, 193, 139, 195, 74, transitionCounterper);

    //---frames---//
    stroke(0, 255*(transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255*(transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(transitionCounterper));

    //Rachmaninoff Piano Concerto 2
    textStyle(BOLD);
    textSize(12);
    text(rach_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(rach_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(rach_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);

    //Messiaen Regard de l'etoile
    textStyle(BOLD);
    textSize(12);
    text(messiaen_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(messiaen_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(messiaen_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Bach Partita 2
    textStyle(BOLD);
    textSize(12);
    text(bach_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(bach_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(bach_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);

  }

  if (state==15) { //static performances page

    generalParticles(48, 63, 159, 0, 172, 193, 139, 195, 74, 1);
    noStroke();
    textStyle(BOLD);
    fill(0);
    textSize(24);
    text(performances, (windowWidth/2) + 33, windowHeight/4);

    //---frames---//
    stroke(0, 255);
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255);
    noStroke();
    textFont('Verdana');
    tint(255, 255);


    //Rachmaninoff Piano Concerto 2
    textStyle(BOLD);
    textSize(12);
    text(rach_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(rach_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(rach_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);

    //Messiaen Regard de l'etoile
    textStyle(BOLD);
    textSize(12);
    text(messiaen_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(messiaen_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(messiaen_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Bach Partita 2
    textStyle(BOLD);
    textSize(12);
    text(bach_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(bach_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(bach_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);
  }

  if (state==16) { //fade-out of performances page
    generalParticles(48, 63, 159, 0, 172, 193, 139, 195, 74, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);

    //title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(performances, (windowWidth/2) + 33, windowHeight/4);

    //---frames---//
    stroke(0, 255*(1-transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 149, windowWidth/3 + 120, 77);
    rect(windowWidth/2 +32, windowHeight/4 + 249, windowWidth/3 + 120, 77);

    //-----Content-----//
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(1-transitionCounterper));


    //Rachmaninoff Piano Concerto 2
    textStyle(BOLD);
    textSize(12);
    text(rach_title, windowWidth/2 + 133, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(rach_performance, windowWidth/2 + 133, windowHeight/4 + 85, windowWidth/3, 2*windowHeight/3);
    image(rach_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);

    //Messiaen Regard de l'etoile
    textStyle(BOLD);
    textSize(12);
    text(messiaen_title, windowWidth/2 + 133, windowHeight/4 + 170, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(messiaen_performance, windowWidth/2 + 133, windowHeight/4 + 185, windowWidth/3, 2*windowHeight/3);
    image(messiaen_img, windowWidth/2 + 33, windowHeight/4 + 150, 75, 75);

    //Bach Partita 2
    textStyle(BOLD);
    textSize(12);
    text(bach_title, windowWidth/2 + 133, windowHeight/4 + 270, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(bach_performance, windowWidth/2 + 133, windowHeight/4 + 285, windowWidth/3, 2*windowHeight/3);
    image(bach_img, windowWidth/2 + 33, windowHeight/4 + 250, 75, 75);
  }


//----------##########PUBLICATIONS##########----------//

  if (state==17 || state==18 || state==19) {
    tabTransition(17, publications, windowHeight/2 +61, windowHeight/4);
  }

  if (state==19) { //last animations of publications page
    generalParticles(48, 63, 159, 253, 216, 53, 139, 195, 74, transitionCounterper);

    //-----Content-----//
    fill(0, 255*(transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(transitionCounterper));

    //---frames---//
    stroke(0, 255*(transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);

    //dlfm2019
    textStyle(BOLD);
    textSize(12);
    noStroke();
    fill(0, 255*transitionCounterper);
    text(dlfm2019_title, windowWidth/2 + 133, windowHeight/4 + 55, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(dlfm2019_description, windowWidth/2 + 133, windowHeight/4 + 100, windowWidth/3, 2*windowHeight/3);
    image(dlfm2019_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);
  }

  if (state==20) { //static publications page
    generalParticles(48, 63, 159, 253, 216, 53, 139, 195, 74, 1);
    noStroke();
    textStyle(BOLD);
    fill(0);
    textSize(24);
    text(publications, (windowWidth/2) + 33, windowHeight/4);

    //-----Content-----//
    fill(0, 255);
    noStroke();
    textFont('Verdana');
    tint(255, 255);

    //---frames---//
    stroke(0, 255);
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);

    //dlfm2019
    textStyle(BOLD);
    textSize(12);
    noStroke();
    fill(0);
    text(dlfm2019_title, windowWidth/2 + 133, windowHeight/4 + 55, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(dlfm2019_description, windowWidth/2 + 133, windowHeight/4 + 100, windowWidth/3, 2*windowHeight/3);
    image(dlfm2019_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);
  }

  if (state==21) { //fade-out of publications tab
    generalParticles(48, 63, 159, 253, 216, 53, 139, 195, 74, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);

    //title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(publications, (windowWidth/2) + 33, windowHeight/4);

    //-----Content-----//
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(1-transitionCounterper));

    //---frames---//
    stroke(0, 255*(1-transitionCounterper));
    fill(0, 0);
    strokeWeight(2);
    rect(windowWidth/2 +32, windowHeight/4 + 49, windowWidth/3 + 120, 77);

    //dlfm2019
    textStyle(BOLD);
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textSize(12);
    text(dlfm2019_title, windowWidth/2 + 133, windowHeight/4 + 55, windowWidth/3, 2*windowHeight/3);
    textStyle(NORMAL);
    text(dlfm2019_description, windowWidth/2 + 133, windowHeight/4 + 100, windowWidth/3, 2*windowHeight/3);
    image(dlfm2019_img, windowWidth/2 + 33, windowHeight/4 + 50, 75, 75);
  }


  //---------##########OTHER PROJECTS##########----------//

  if (state==22 || state==23 || state==24) {
    tabTransition(22, other_projects, windowHeight/2 +83, windowHeight/5);
  }

  if (state==24) { //last animations of other_projects page
    generalParticles(48, 63, 159, 253, 216, 53, 156, 39, 176, transitionCounterper);

    //-----Content-----//
    fill(0, 255*transitionCounterper);
    noStroke();
    textFont('Verdana');
    tint(255, 255*transitionCounterper);

    //Koechlin
    textStyle(BOLD);
    textSize(12);
    text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
    image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

    //Composition Tool
    textStyle(BOLD);
    textSize(12);
    text(tool_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(tool_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
    image(tool_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

    //MaSC
    textStyle(BOLD);
    textSize(12);
    text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
    textStyle(ITALIC);
    text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
    image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

    //OMR
    textStyle(BOLD);
    textSize(12);
    text(omr_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(omr_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
    image(omr_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);
  }

  if (state==25) { //static other_projects page
    generalParticles(48, 63, 159, 253, 216, 53, 156, 39, 176, 1);
    noStroke();
    textStyle(BOLD);
    fill(0);
    textSize(24);
    text(other_projects, (windowWidth/2) + 33, windowHeight/5);

    //-----Content-----//
    fill(0, 255);
    noStroke();
    textFont('Verdana');
    tint(255, 255);

    //Koechlin
    textStyle(BOLD);
    textSize(12);
    text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
    image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

    //Composition Tool
    textStyle(BOLD);
    textSize(12);
    text(tool_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(tool_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
    image(tool_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

    //MaSC
    textStyle(BOLD);
    textSize(12);
    text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
    textStyle(ITALIC);
    text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
    image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

    //OMR
    textStyle(BOLD);
    textSize(12);
    text(omr_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(omr_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
    image(omr_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);
  }

  if (state==26) { //fade-out of other_projects page
    generalParticles(48, 63, 159, 253, 216, 53, 156, 39, 176, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/5)+1);

    //title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(other_projects, (windowWidth/2) + 33, windowHeight/5);

    //-----Content-----//
    fill(0, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    tint(255, 255*(1-transitionCounterper));

    //Koehclin
    textStyle(BOLD);
    textSize(12);
    text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
    image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

    //Composition Tool
    textStyle(BOLD);
    textSize(12);
    text(tool_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(tool_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
    image(tool_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

    //MaSC
    textStyle(BOLD);
    textSize(12);
    text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
    textStyle(ITALIC);
    text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
    image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

    //OMR
    textStyle(BOLD);
    textSize(12);
    text(omr_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
    textStyle(NORMAL);
    text(omr_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
    image(omr_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);
  }


  //---------##########CONTACT##########----------//


  if (state==27 || state==28 || state==29) {
    tabTransition(27, contact, windowHeight/2 +105, windowHeight/4);
  }

  if (state==29) { //last animations of contact page
    generalParticles(255, 87, 34, 253, 216, 53, 156, 39, 176, transitionCounterper);

    //-----Content-----//
    fill(0, 255*(transitionCounterper));
    tint(255, 255*(transitionCounterper));
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(14);
    text(contact_linkedin, windowWidth/2 + 33, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    text(contact_email, windowWidth/2 + 33, windowHeight/4 + 90, windowWidth/3, 2*windowHeight/3);
    text(current_location, windowWidth/2 +33, windowHeight/4 +150, windowWidth/3, 2*windowHeight/3);
    image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
  }

  if (state==30) { //static contact page
    generalParticles(255, 87, 34, 253, 216, 53, 156, 39, 176, 1);
    noStroke();
    textStyle(BOLD);
    fill(0);
    textSize(24);
    text(contact, (windowWidth/2) + 33, windowHeight/4);

    fill(0, 255);
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(14);
    text(contact_linkedin, windowWidth/2 + 33, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    text(contact_email, windowWidth/2 + 33, windowHeight/4 + 90, windowWidth/3, 2*windowHeight/3);
    text(current_location, windowWidth/2 +33, windowHeight/4 +150, windowWidth/3, 2*windowHeight/3);
    image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
  }

  if (state==31) { //fade-out of contact page
    generalParticles(255, 87, 34, 253, 216, 53, 156, 39, 176, 1-transitionCounterper);

    //homebutton
    fill(0, 255*(1-transitionCounterper))
    noStroke();
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);

    //title
    noStroke();
    fill(0, 255*(1-transitionCounterper));
    textStyle(BOLD);
    textSize(24);
    text(contact, (windowWidth/2) + 33, windowHeight/4);

    fill(0, 255*(1-transitionCounterper));
    tint(255, 255*(1-transitionCounterper));
    noStroke();
    textFont('Verdana');
    textStyle(NORMAL);
    textSize(14);
    text(contact_linkedin, windowWidth/2 + 33, windowHeight/4 + 70, windowWidth/3, 2*windowHeight/3);
    text(contact_email, windowWidth/2 + 33, windowHeight/4 + 90, windowWidth/3, 2*windowHeight/3);
    text(current_location, windowWidth/2 +33, windowHeight/4 +150, windowWidth/3, 2*windowHeight/3);
    image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
  }

  //---Home button---//
  if (state==5 || state==10 || state==15 || state==20 || state==30) {
    fill(0);
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/4)+1);
  }
  if (state==25) { //projects page has a lot of content, so home button is higher
    fill(0);
    textStyle(BOLD);
    textSize(24);
    text(homebutton, (windowWidth/2)-10, (windowHeight/5)+1);
  }

  //white ellpise for homepage text transition cover-up
  if (state011 < HALF_PI && state==0) {
    noStroke();
    fill(255);
    rect((windowWidth/2)-300, (windowHeight/2)-120, 300, 240);
  }


  //---image---//
  if (state==0 || state==1) {
    tint(255, state010per*255);
    image(profile, (windowWidth/2 - 180)+((1-state010per)*180), windowHeight/2 - 86, 180, 180);
  }

  //---eyes---//
  if ((state==0 && (state012 > 0)) || state==1) {
    noStroke();
    fill(50, 255*state012per);
    if (mouseX<=(windowWidth/2)) {
      ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
      ellipse((windowWidth/2)-120 + (mouseX/windowWidth)*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
    } else if (mouseX>(windowWidth/2)) {
      ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2) - 9 + (mouseY/windowHeight)*3, 8, 8);
      ellipse((windowWidth/2)-120 + (1-(mouseX/windowWidth))*5, (windowHeight/2) + 14 + (mouseY/windowHeight)*3, 8, 8);
    }
  }


  //white ellpise for image transition cover-up
  if (state010 < HALF_PI && state==0) {
    noStroke();
    fill(255);
    rect(windowWidth/2, (windowHeight/2)-100, 200, 200);
  }

  //---line---//

  //last fade-in states before static page
  if (state==4 || state==9 || state==14 || state==19 || state==24 || state==29) {
    stroke(0, 255*(1-transitionCounterper));
    strokeWeight(1);
    line(windowWidth/2, windowHeight/2 - 106, windowWidth/2, windowHeight/2 + 111);
  }
  //fade-out state after static page
  if (state==6 || state==11 || state==16 || state==21 || state==26 || state==31) {
    stroke(0, 255*(transitionCounterper));
    strokeWeight(1);
    line(windowWidth/2, windowHeight/2 - 106, windowWidth/2, windowHeight/2 + 111);
  }
  //homepage line (both fade-ins and static), & non-final fade-ins before static pages
  if (state==0 || state==1 || state==2 || state==3 || state==7 || state==8 || state==12 || state==13 || state==17 || state==18 || state==22 || state==23 || state==27 || state==28) {
    stroke(0);
    strokeWeight(1);
    line(windowWidth/2, windowHeight/2 - 106, windowWidth/2, windowHeight/2 + 111);
  }

}

//-----MousePressed-----// see p5js documentation for MousePressed() function
function mousePressed() {
  if (state==1) {
    //if click within about Tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+53)) && (mouseY<((windowHeight/2)-20+20)) && (mouseY>((windowHeight/2)-20))) { //watch out for reversly define mouseY box
      state = 2;
    }
    //if click within compositions Tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+103)) && (mouseY<((windowHeight/2)+2+20)) && (mouseY>((windowHeight/2)+2))) {
      state = 7;
    }
    //if click within performances Tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+106)) && (mouseY<((windowHeight/2)+24+20)) && (mouseY>((windowHeight/2)+24))) {
      state = 12;
    }
    //if click within publications tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+97)) && (mouseY<((windowHeight/2)+46+20)) && (mouseY>((windowHeight/2)+46))) {
      state = 17;
    }
    //if click within other_projects tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+110)) && (mouseY<((windowHeight/2)+68+20)) && (mouseY>((windowHeight/2)+68))) {
      state = 22;
    }
    //if click within contact tab
    if ((mouseX>((windowWidth/2)+25)) && (mouseX<((windowWidth/2)+25+3+65)) && (mouseY<((windowHeight/2)+90+20)) && (mouseY>((windowHeight/2)+90))) {
      state = 27;
    }
  }
  //return to home
  if (state==5 || state==10 || state==15 || state==20 || state==30) {
    if ((mouseX>((windowWidth/2)-10)) && (mouseX<((windowWidth/2)+11)) && (mouseY>((windowHeight/4)-17)) && (mouseY<((windowHeight/4)+4))) {
      state += 1;
      state010 = 0;
      state011 = 0;
      state012 = 0;
    }
  }
  if (state==25) {
    if ((mouseX>((windowWidth/2)-10)) && (mouseX<((windowWidth/2)+11)) && (mouseY>((windowHeight/5)-17)) && (mouseY<((windowHeight/5)+4))) {
      state += 1;
      state010 = 0;
      state011 = 0;
      state012 = 0;
    }
  }
  if (state==10) {
    //Preludes
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 49)) && (mouseY<(windowHeight/4 +126))) {
      window.open("https://www.youtube.com/playlist?list=PL6rrHapQThnecOVk68MT500jKBxnWD7ak");
    }
    //Quartet
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 149)) && (mouseY<(windowHeight/4 +226))) {
      window.open("https://www.youtube.com/watch?v=JR-bvfh0kKI");
    }
    //Map in Music
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 249)) && (mouseY<(windowHeight/4 +326))) {
      window.open("https://www.youtube.com/watch?v=XewU_bfyQ78");
    }
    //Flower's Escape
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 349)) && (mouseY<(windowHeight/4 +426))) {
      window.open("https://www.youtube.com/watch?v=NN7XjtjN-Iw");
    }
  }
  if (state==15) {
    //Rachmaninioff
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 49)) && (mouseY<(windowHeight/4 +126))) {
      window.open("https://www.youtube.com/watch?v=3F1WLZzyLIw");
    }
    //Messiaen
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 149)) && (mouseY<(windowHeight/4 +226))) {
      window.open("https://www.youtube.com/watch?v=uGTZf6e6SzY");
    }
    //Rachmaninioff
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 249)) && (mouseY<(windowHeight/4 +326))) {
      window.open("https://www.youtube.com/watch?v=kMOaC0guYuw");
    }
  }
  if (state==20) {
    //dlfm2019
    if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/4 + 49)) && (mouseY<(windowHeight/4 +126))) {
      window.open("https://dlsi.ua.es/gent/drizo/dlfm2019/trochidis.pdf");
    }
  }

}
