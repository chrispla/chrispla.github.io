//check the repo's README to overview code structure

//---TEXT & IMAGES---//

//homepage text
var hi = "Hi!";
var description = "My name is Christos Plachouras, and I'm working on some cool stuff in music, computer science, mathematics, and engineering. You can find some of them on this website!";

//about page
var aboutContent = "    I am currently an undergraduate student at New York University Abu Dhabi, majoring in Computer Science and Music. Things I am currently working on surround areas such as audio signal processing, optical music recognition, computational musicology, machine learning, information theory, mathematical logic, contemporary composition inluding classical and electronic, and piano performance. Below, you can read a short overview of my journey.\n\n   I was born and raised in Athens, Greece. At the age of 3, I started my first music classes in the Philippos Nakas Conservatory. After receiving diplomas for Autorgan (keyboard) and Electone (electronic organ) at the age of 8, I started having classical piano and music theory classes. During this period I started composing my own music. At the age of 11, I decided to continue my music education with Sami Amiris, one of the most well-known jazz pianists in Greece. Amiris played an important role in the development of my love for mathematics, programming, and music. Ever since then, I have been exploring music through both a scientific and an artistic lens.\n\n    Ever since my journey at New York University started, I have been fortunate to explore my passions further. I have been studying in Abu Dhabi, Paris and New York, in cool places such as IRCAM, École Cortot, and NYU's Music, Science and Engineering Departments.";

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
var newtime_title = "New Time, a short tribute to a vibrant memory";
var newtime_performance = "Christos Plachouras, June 2020";
var newtime_img;

//performances page
var rach_title = "Rachmaninoff - Piano Concerto No. 2, I. Moderato";
var rach_performance = "Christos Plachouras, Ioannis Potamousis, Live at NYUAD Blue Hall, 13th of December, 2018";
var rach_img;
var messiaen_title = "Messiaen - Vingt Regards - II. Regard de l'étoile";
var messiaen_performance = "Christos Plachouras, Studio Odeon, Athens, 19th of October, 2016";
var messiaen_img;
var bach_title = "Bach - Partita No. 2 in C minor, I. Simfonia";
var bach_performance = "Christos Plachouras, Live at NYUAD Blue Hall, 3rd of May, 2018";
var coldplay_title = "Coldplay - O (Fly on) - Cover";
var coldplay_performance = "Christos Plachouras - Voice Arrangement, 27th of March, 2020"
var coldplay_img;

//publications page
var timbre2020_title = "Mapping Timbre Space in Regional Music Collections using HPSS Decomposition";
var timbre2020_description = "To be presented in the 2nd International Conference on Timbre, Timbre 2020";
var timbre2020_img;
var cur_title = "Computational Audio Analysis for Cultural Heritage Preservation";
var cur_description = "Feature on the webpage of the Council on Undergraduate Research";
var cur_img;
var dlfm2019_title = "Mapping the Sounds of the Swahili coast and the Arab Mashriq: Music research at the intersection of computational analysis and cultural heritage preservation";
var dlfm2019_description = "TROMPA Poster presentation at the 6th Digital Libraries for Musicology event of ISMIR 2019";
var dlfm2019_img;

//other_projects page
var koechlin_title = "Charles Koechlin - Computational Musicology (active)";
var koechlin_description = "A project exploring music generation using the music of Charles Koechlin. The main focus is to uncover how musical markings such as note groupings and dynamics can automatically provide hierarchical knowledge for the neural networks that are being trained, and to design a musically rich multi-dimensional matrix encoding of scores that can be fed to non-reccurent neural networks and open up new possibilites for music generation.";
var koechlin_img;
var tool_title = "Electronic Composition Tool (active)";
var tool_description = "A highly modular composition tool initially developed during my course at IRCAM, and consisting of Max patchers and python scripts. It relies on a directory of soundfiles that are either pre-recorded, or sequentially recorded during a live performance, and provides an interface to retrieve those files according to their spectral, cepstral, and tempo features, as well as an interface with effects such as spatial movement of multiple instances of the same retrieved soundfile across multiple channels.";
var tool_img;
var masc_title = "Computational Analysis, Cultural Preservation - MaSC (active)";
var masc_description = "\"The Music and Sound Cultures (MaSC) research group is a collective of researchers focusing on the multidisciplinary study of music from the Gulf, the Levant, East Africa, and South India. Having as a primary goal the study and dissemination of music from this region, the group currently hosts several projects that range from the preservation of collections of field or rare commercial recordings, to developing innovative ways of conducting musical heritage analysis, preservation, and dissemination.\"";
var masc_img;
var structure_title = "Music structure analysis and comparison (active)";
var structure_description = "My proposed undergraduate thesis on developing a hierarchical decomposition of music structure to allow for structure comparisons at different levels of granularity. The method utilizes low-rank approximations of the graph Laplacian constructed from feature-fused self-similarity matrices, and has applications to cover detection and the more general task of music similarity.";
var structure_img;

//contact
var contact_email = "email: cplachouras -αt- nyu.edu";
var contact_linkedin = "linkedIn: Christos Plachouras";
var contact_youtube = "YouTube: Christos Plachouras";
var contact_github = "GitHub: chrispla";
var current_location = "I am currently in: Abu Dhabi!\nFeedback on website performance and bugs is greatly appreciated.";
var current_location_img;

//homepage and about images
var profile;
var profile1;

//-----PRELOAD-----// see p5js documentation for preload() function
function preload() {

  //preload images
  profile = loadImage('profile.png');
  profile1 = loadImage('profile1.png');
  string_quartet_img = loadImage('string_quartet.png');
  preludes_img = loadImage('preludes.png');
  mapinmusic_img = loadImage('mapinmusic.png');
  flowersescape_img = loadImage('flowersescape.png');
  newtime_img = loadImage('newtime.png');
  rach_img = loadImage('rach.png');
  messiaen_img = loadImage('messiaen.png');
  coldplay_img = loadImage('coldplay.png');
  bach_img = loadImage('bach.png');
  koechlin_img = loadImage('koechlin.png');
  timbre2020_img = loadImage('timbre2020.png');
  cur_img = loadImage('cur.png');
  dlfm2019_img = loadImage('dlfm2019.png');
  tool_img = loadImage('tool.png');
  masc_img = loadImage('masc.png');
  structure_img = loadImage('structure.png');
  current_location_img = loadImage('newyork.png');
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

//----------about----------//
var about = {}; //about dictionary
page_info["about"] = about; //asign page dict to page info dict
about["content_fadein"] = about_content_fadein;
about["content_static"] = about_content_static;
about["content_fadeout"] = about_content_fadeout;
about["particle_colors"] = [179, 157, 219, 127, 73, 145, 215, 204, 219];
about["tab_info"] = new Tab("about", -20, -5, 53, 179, 157, 219, 20, 20, 20);
about["box_lines"] = 0;
function about_content_fadein() {

  //---particle line to middle---//
  for (var i = 0; i < particleNumber; i++) {
    strokeWeight(1);
    stroke(200, 255*sin(animation_timer));
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-130, windowHeight/2);
  }

  //Title
  noStroke();
  fill(0, 255);
  textStyle(BOLD);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);
  //Image
  fill(255);
  ellipse((windowWidth/2 - 120), windowHeight/2 +6, 200, 200); //cover up lines during transition
  tint(255, 255*(sin(animation_timer)));
  image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);

  //-----Content-----//
  fill(0, 255*sin(animation_timer));
  noStroke();
  textStyle(NORMAL);
  textSize(12);
  text(aboutContent, windowWidth/2 + 33, windowHeight/5 + 25, windowWidth/4, 2*windowHeight/3);
}
function about_content_static() {

  //---particle line to middle---//
  for (var i = 0; i < particleNumber; i++) {
    strokeWeight(1);
    stroke(200);
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-130, windowHeight/2);
  }

  //Title
  noStroke();
  fill(0, 255);
  textStyle(BOLD);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);
  //Image
  image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);

  //-----Content-----//
  fill(0, 255);
  noStroke();
  textStyle(NORMAL);
  textSize(12);
  text(aboutContent, windowWidth/2 + 33, windowHeight/5 + 25, windowWidth/4, 2*windowHeight/3);

}
function about_content_fadeout() {

  //---particle line to middle---//
  for (var i = 0; i < particleNumber; i++) {
    strokeWeight(1);
    stroke(200, 255*(1-sin(animation_timer)));
    line(particleXpos[i], particleYpos[i], (windowWidth/2)-130, windowHeight/2);
  }

  //Title
  noStroke();
  fill(0, 255*(1-sin(animation_timer)));
  textStyle(BOLD);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);
  //Image
  fill(255);
  ellipse((windowWidth/2 - 120), windowHeight/2 +6, 200, 200); //cover up lines during transition
  tint(255, 255*(1-sin(animation_timer)));
  image(profile1, (windowWidth/2 - 220), windowHeight/2 - 96, 200, 200);

  //-----Content-----//
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textStyle(NORMAL);
  textSize(12);
  text(aboutContent, windowWidth/2 + 33, windowHeight/5 + 25, windowWidth/4, 2*windowHeight/3);
}

//------compositions------//
var compositions = {}; //compositions dictionary
page_info["compositions"] = compositions; //asign page dict to page info dict
compositions["content_fadein"] = compositions_content_fadein;
compositions["content_static"] = compositions_content_static;
compositions["content_fadeout"] = compositions_content_fadeout;
compositions["particle_colors"] = [159, 168, 218, 120, 126, 158, 118, 87, 171];
compositions["tab_info"] = new Tab("compositions", 2, 17, 103, 159, 168, 218, 20, 20, 20);
compositions["box_lines"] = 0;
function compositions_content_fadein() {
  //---title---//
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255*sin(animation_timer));
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 449, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255*sin(animation_timer));
  noStroke();
  textSize(12);
  tint(255, 255*(sin(animation_timer)));

  //12 Preludes of Tonal Resolution for Piano
  textStyle(BOLD);
  text(preludes_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(preludes_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(preludes_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //String Quartet
  textStyle(BOLD);
  text(string_quartet_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(string_quartet_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(string_quartet_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Map in music
  textStyle(BOLD);
  text(mapinmusic_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(mapinmusic_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Flower's Escape
  textStyle(BOLD);
  text(flowersescape_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(flowersescape_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(flowersescape_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

  //New time
  textStyle(BOLD);
  text(newtime_title, windowWidth/2 + 133, windowHeight/5 + 470, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(newtime_performance, windowWidth/2 + 133, windowHeight/5 + 485, windowWidth/3, 2*windowHeight/3);
  image(newtime_img, windowWidth/2 + 33, windowHeight/5 + 450, 75, 75);

}
function compositions_content_static() {
  //---title---//
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0);
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 449, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textSize(12);
  tint(255, 255);

  //12 Preludes of Tonal Resolution for Piano
  textStyle(BOLD);
  text(preludes_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(preludes_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(preludes_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);


  //String Quartet
  textStyle(BOLD);
  text(string_quartet_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(string_quartet_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(string_quartet_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Map in music
  textStyle(BOLD);
  text(mapinmusic_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(mapinmusic_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Flower's Escape
  textStyle(BOLD);
  text(flowersescape_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(flowersescape_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(flowersescape_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

  //New time
  textStyle(BOLD);
  text(newtime_title, windowWidth/2 + 133, windowHeight/5 + 470, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(newtime_performance, windowWidth/2 + 133, windowHeight/5 + 485, windowWidth/3, 2*windowHeight/3);
  image(newtime_img, windowWidth/2 + 33, windowHeight/5 + 450, 75, 75);


}
function compositions_content_fadeout() {
  //---title---//
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255*(1-sin(animation_timer)));
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 449, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textSize(12);
  tint(255, 255*(1-sin(animation_timer)));

  //12 Preludes of Tonal Resolution for Piano
  textStyle(BOLD);
  text(preludes_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(preludes_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(preludes_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //String Quartet
  textStyle(BOLD);
  text(string_quartet_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(string_quartet_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(string_quartet_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Map in music
  textStyle(BOLD);
  text(mapinmusic_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(mapinmusic_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(mapinmusic_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Flower's Escape
  textStyle(BOLD);
  text(flowersescape_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(flowersescape_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(flowersescape_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

  //New time
  textStyle(BOLD);
  text(newtime_title, windowWidth/2 + 133, windowHeight/5 + 470, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(newtime_performance, windowWidth/2 + 133, windowHeight/5 + 485, windowWidth/3, 2*windowHeight/3);
  image(newtime_img, windowWidth/2 + 33, windowHeight/5 + 450, 75, 75);

}

//------performances------//
var performances = {}; //performances dictionary
page_info["performances"] = performances; //asign page dict to page info dict
performances["content_fadein"] = performances_content_fadein;
performances["content_static"] = performances_content_static;
performances["content_fadeout"] = performances_content_fadeout;
performances["particle_colors"] = [144, 202, 249, 184, 199, 214, 76, 144, 212];
performances["tab_info"] = new Tab("performances", 24, 39, 106, 144, 202, 249, 20, 20, 0);
performances["box_lines"] = 0;
function performances_content_fadein() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255*sin(animation_timer));
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255*(sin(animation_timer)));
  noStroke();
  tint(255, 255*(sin(animation_timer)));
  textSize(12);

  //Rachmaninoff Piano Concerto 2
  textStyle(BOLD);
  text(rach_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(rach_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(rach_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //Messiaen Regard de l'etoile
  textStyle(BOLD);
  text(messiaen_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(messiaen_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(messiaen_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Bach Partita 2
  textStyle(BOLD);
  text(bach_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(bach_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(bach_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Coldplay cover
  textStyle(BOLD);
  text(coldplay_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(coldplay_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(coldplay_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

}
function performances_content_static() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255);
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255);
  noStroke();
  tint(255, 255);
  textSize(12);

  //Rachmaninoff Piano Concerto 2
  textStyle(BOLD);
  text(rach_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(rach_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(rach_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //Messiaen Regard de l'etoile
  textStyle(BOLD);
  text(messiaen_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(messiaen_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(messiaen_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Bach Partita 2
  textStyle(BOLD);
  text(bach_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(bach_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(bach_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Coldplay cover
  textStyle(BOLD);
  text(coldplay_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(coldplay_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(coldplay_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

}
function performances_content_fadeout() {
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255*(1-sin(animation_timer)));
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 349, windowWidth/3 + 120, 77);

  //-----Content-----//
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  tint(255, 255*(1-sin(animation_timer)));
  textSize(12);

  //Rachmaninoff Piano Concerto 2
  textStyle(BOLD);
  text(rach_title, windowWidth/2 + 133, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(rach_performance, windowWidth/2 + 133, windowHeight/5 + 85, windowWidth/3, 2*windowHeight/3);
  image(rach_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //Messiaen Regard de l'etoile
  textStyle(BOLD);
  text(messiaen_title, windowWidth/2 + 133, windowHeight/5 + 170, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(messiaen_performance, windowWidth/2 + 133, windowHeight/5 + 185, windowWidth/3, 2*windowHeight/3);
  image(messiaen_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //Bach Partita 2
  textStyle(BOLD);
  text(bach_title, windowWidth/2 + 133, windowHeight/5 + 270, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(bach_performance, windowWidth/2 + 133, windowHeight/5 + 285, windowWidth/3, 2*windowHeight/3);
  image(bach_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);

  //Coldplay cover
  textStyle(BOLD);
  text(coldplay_title, windowWidth/2 + 133, windowHeight/5 + 370, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(coldplay_performance, windowWidth/2 + 133, windowHeight/5 + 385, windowWidth/3, 2*windowHeight/3);
  image(coldplay_img, windowWidth/2 + 33, windowHeight/5 + 350, 75, 75);

}

//------publications------//
var publications = {}; //publications dictionary
page_info["publications"] = publications; //asign page dict to page info dict
publications["content_fadein"] = publications_content_fadein;
publications["content_static"] = publications_content_static;
publications["content_fadeout"] = publications_content_fadeout;
publications["particle_colors"] = [129, 212, 250,189, 224, 240,40, 114, 148];
publications["tab_info"] = new Tab("publications", 46, 61, 97, 129, 212, 250, 20, 20, 20);
publications["box_lines"] = 0;
function publications_content_fadein() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255);
  fill(0, 0*(sin(animation_timer)));
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);

  //---content---//
  textSize(12);
  noStroke();
  fill(0, 255*(sin(animation_timer)));
  tint(255, 255*(sin(animation_timer)));

  //timbre2020
  textStyle(BOLD);
  text(timbre2020_title, windowWidth/2 + 133, windowHeight/5 + 55, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(timbre2020_description, windowWidth/2 + 133, windowHeight/5 + 100, windowWidth/3, 2*windowHeight/3);
  image(timbre2020_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //cur
  textStyle(BOLD);
  text(cur_title, windowWidth/2 + 133, windowHeight/5 + 155, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(cur_description, windowWidth/2 + 133, windowHeight/5 + 200, windowWidth/3, 2*windowHeight/3);
  image(cur_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //dlfm2019
  textStyle(BOLD);
  text(dlfm2019_title, windowWidth/2 + 133, windowHeight/5 + 255, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(dlfm2019_description, windowWidth/2 + 133, windowHeight/5 + 300, windowWidth/3, 2*windowHeight/3);
  image(dlfm2019_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);
}
function publications_content_static() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255);
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);

  //---content---//
  textSize(12);
  noStroke();
  fill(0, 255);
  tint(255, 255);

  //timbre2020
  textStyle(BOLD);
  text(timbre2020_title, windowWidth/2 + 133, windowHeight/5 + 55, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(timbre2020_description, windowWidth/2 + 133, windowHeight/5 + 100, windowWidth/3, 2*windowHeight/3);
  image(timbre2020_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //cur
  textStyle(BOLD);
  text(cur_title, windowWidth/2 + 133, windowHeight/5 + 155, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(cur_description, windowWidth/2 + 133, windowHeight/5 + 200, windowWidth/3, 2*windowHeight/3);
  image(cur_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //dlfm2019
  textStyle(BOLD);
  text(dlfm2019_title, windowWidth/2 + 133, windowHeight/5 + 255, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(dlfm2019_description, windowWidth/2 + 133, windowHeight/5 + 300, windowWidth/3, 2*windowHeight/3);
  image(dlfm2019_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);
}
function publications_content_fadeout() {
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //---frames---//
  stroke(0, 255*(1-sin(animation_timer)));
  fill(0, 0);
  strokeWeight(2);
  rect(windowWidth/2 +32, windowHeight/5 + 49, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 149, windowWidth/3 + 120, 77);
  rect(windowWidth/2 +32, windowHeight/5 + 249, windowWidth/3 + 120, 77);

  //---content---//
  textSize(12);
  noStroke();
  fill(0, 255*(1-sin(animation_timer)));
  tint(255, 255*(1-sin(animation_timer)));

  //timbre2020
  textStyle(BOLD);
  text(timbre2020_title, windowWidth/2 + 133, windowHeight/5 + 55, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(timbre2020_description, windowWidth/2 + 133, windowHeight/5 + 100, windowWidth/3, 2*windowHeight/3);
  image(timbre2020_img, windowWidth/2 + 33, windowHeight/5 + 50, 75, 75);

  //cur
  textStyle(BOLD);
  text(cur_title, windowWidth/2 + 133, windowHeight/5 + 155, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(cur_description, windowWidth/2 + 133, windowHeight/5 + 200, windowWidth/3, 2*windowHeight/3);
  image(cur_img, windowWidth/2 + 33, windowHeight/5 + 150, 75, 75);

  //dlfm2019
  textStyle(BOLD);
  text(dlfm2019_title, windowWidth/2 + 133, windowHeight/5 + 255, windowWidth/3, 2*windowHeight/3);
  textStyle(NORMAL);
  text(dlfm2019_description, windowWidth/2 + 133, windowHeight/5 + 300, windowWidth/3, 2*windowHeight/3);
  image(dlfm2019_img, windowWidth/2 + 33, windowHeight/5 + 250, 75, 75);
}

//--------projects--------//
var projects = {}; //projects dictionary
page_info["projects"] = projects; //asign page dict to page info dict
projects["content_fadein"] = projects_content_fadein;
projects["content_static"] = projects_content_static;
projects["content_fadeout"] = projects_content_fadeout;
projects["particle_colors"] = [128, 222, 234,173, 214, 219,55, 122, 130];
projects["tab_info"] = new Tab("projects", 68, 83, 70, 128, 222, 234, 20, 20, 20);
projects["box_lines"] = 0;
function projects_content_fadein() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //-----Content-----//
  fill(0, 255*(sin(animation_timer)));
  noStroke();
  textSize(12);
  tint(255, 255*(sin(animation_timer)));

  //Koechlin
  textStyle(BOLD);
  text(structure_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(structure_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
  image(structure_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

  //Composition Tool
  textStyle(BOLD);
  text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
  image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

  //MaSC
  textStyle(BOLD);
  text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
  textStyle(ITALIC);
  text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
  image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

  //Music Structure Analysis
  textStyle(BOLD);
  text(tool_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(tool_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
  image(tool_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);

}
function projects_content_static() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //-----Content-----//
  fill(0, 255);
  noStroke();
  textSize(12);
  tint(255, 255);

  //Koechlin
  textStyle(BOLD);
  text(structure_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(structure_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
  image(structure_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

  //Composition Tool
  textStyle(BOLD);
  text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
  image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

  //MaSC
  textStyle(BOLD);
  text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
  textStyle(ITALIC);
  text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
  image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

  //Music Structure Analysis
  textStyle(BOLD);
  text(tool_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(tool_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
  image(tool_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);

}
function projects_content_fadeout() {
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  //-----Content-----//
  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textSize(12);
  tint(255, 255*(1-sin(animation_timer)));

  //Koechlin
  textStyle(BOLD);
  text(structure_title, windowWidth/2 + 125, windowHeight/5 + 30, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(structure_description, windowWidth/2 + 125, windowHeight/5 + 45, windowWidth/3, 2*windowHeight/3);
  image(structure_img, windowWidth/2 + 25, windowHeight/5 + 30, 75, 75);

  //Composition Tool
  textStyle(BOLD);
  text(koechlin_title, windowWidth/2 + 125, windowHeight/5 + 180, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(koechlin_description, windowWidth/2 + 125, windowHeight/5 + 195, windowWidth/3, 2*windowHeight/3);
  image(koechlin_img, windowWidth/2 + 25, windowHeight/5 + 180, 75, 75);

  //MaSC
  textStyle(BOLD);
  text(masc_title, windowWidth/2 + 125, windowHeight/5 + 330, windowWidth/2, 2*windowHeight/3);
  textStyle(ITALIC);
  text(masc_description, windowWidth/2 + 125, windowHeight/5 + 345, windowWidth/3, 2*windowHeight/3);
  image(masc_img, windowWidth/2 + 25, windowHeight/5 + 330, 75, 75);

  //Music Structure Analysis
  textStyle(BOLD);
  text(tool_title, windowWidth/2 + 125, windowHeight/5 + 480, windowWidth/2, 2*windowHeight/3);
  textStyle(NORMAL);
  text(tool_description, windowWidth/2 + 125, windowHeight/5 + 495, windowWidth/3, 2*windowHeight/3);
  image(tool_img, windowWidth/2 + 25, windowHeight/5 + 480, 75, 75);

}

//---------contact---------//
var contact = {}; //contact dictionary
page_info["contact"] = contact; //asign page dict to page info dict
contact["content_fadein"] = contact_content_fadein;
contact["content_static"] = contact_content_static;
contact["content_fadeout"] = contact_content_fadeout;
contact["particle_colors"] = [132, 209, 201,196, 242, 237,36, 173, 159];
contact["tab_info"] = new Tab("contact", 90, 105, 65, 132, 209, 201, 20, 20, 20);
contact["box_lines"] = 0;
function contact_content_fadein() {
  noStroke();
  textStyle(BOLD);
  fill(0);
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  fill(0, 255*(sin(animation_timer)));
  noStroke();
  textStyle(NORMAL);
  textSize(14);
  text(contact_email, windowWidth/2 + 33, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  text(contact_linkedin, windowWidth/2 + 33, windowHeight/5 + 90, windowWidth/3, 2*windowHeight/3);
  text(contact_youtube, windowWidth/2 + 33, windowHeight/5 + 110, windowWidth/3, 2*windowHeight/3);
  text(contact_github, windowWidth/2 + 33, windowHeight/5 + 130, windowWidth/3, 2*windowHeight/3);
  text(current_location, windowWidth/2 +33, windowHeight/5 +170, windowWidth/3, 2*windowHeight/3);
  //image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
}
function contact_content_static() {
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  fill(0, 255);
  noStroke();
  textStyle(NORMAL);
  textSize(14);
  text(contact_email, windowWidth/2 + 33, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  text(contact_linkedin, windowWidth/2 + 33, windowHeight/5 + 90, windowWidth/3, 2*windowHeight/3);
  text(contact_youtube, windowWidth/2 + 33, windowHeight/5 + 110, windowWidth/3, 2*windowHeight/3);
  text(contact_github, windowWidth/2 + 33, windowHeight/5 + 130, windowWidth/3, 2*windowHeight/3);
  text(current_location, windowWidth/2 +33, windowHeight/5 +170, windowWidth/3, 2*windowHeight/3);
  //image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
}
function contact_content_fadeout() {
  noStroke();
  textStyle(BOLD);
  fill(0, 255*(1-sin(animation_timer)));
  textSize(24);
  text(page_info[current_page]["tab_info"].title, (windowWidth/2) + 33, windowHeight/5);

  fill(0, 255*(1-sin(animation_timer)));
  noStroke();
  textStyle(NORMAL);
  textSize(14);
  text(contact_email, windowWidth/2 + 33, windowHeight/5 + 70, windowWidth/3, 2*windowHeight/3);
  text(contact_linkedin, windowWidth/2 + 33, windowHeight/5 + 90, windowWidth/3, 2*windowHeight/3);
  text(contact_youtube, windowWidth/2 + 33, windowHeight/5 + 110, windowWidth/3, 2*windowHeight/3);
  text(contact_github, windowWidth/2 + 33, windowHeight/5 + 130, windowWidth/3, 2*windowHeight/3);
  text(current_location, windowWidth/2 +33, windowHeight/5 +170, windowWidth/3, 2*windowHeight/3);
  
  //image(current_location_img, windowWidth/2 +33, windowHeight/4 +170, 200, 200);
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

  //if homebutton pressed
  if ((mouseX>((windowWidth/2)-10)) && (mouseX<((windowWidth/2)+11)) && (mouseY>((windowHeight/5)-17)) && (mouseY<((windowHeight/5)+4))) {
    STATE = 0;
  }

  //if in page static
  if (STATE == 3) {
    if (current_page=="compositions") {
      //Preludes
      if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 49)) && (mouseY<(windowHeight/5 +126))) {
        window.open("https://www.youtube.com/playlist?list=PL6rrHapQThneqt1rfM0bDmX8uw7_0F22D");
      }
      //Quartet
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 149)) && (mouseY<(windowHeight/5 +226))) {
        window.open("https://www.youtube.com/watch?v=JR-bvfh0kKI");
      }
      //Map in Music
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 249)) && (mouseY<(windowHeight/5 +326))) {
        window.open("https://www.youtube.com/watch?v=XewU_bfyQ78");
      }
      //Flower's Escape
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 349)) && (mouseY<(windowHeight/5 +426))) {
        window.open("https://www.youtube.com/watch?v=NN7XjtjN-Iw");
      }
      //New time
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 449)) && (mouseY<(windowHeight/5 +526))) {
        window.open("https://www.youtube.com/watch?v=kdwFy86QjOU");
      }

    }
    else if (current_page == "performances") {
      //Rachmaninioff
      if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 49)) && (mouseY<(windowHeight/5 +126))) {
        window.open("https://www.youtube.com/watch?v=3F1WLZzyLIw");
      }
      //Messiaen
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 149)) && (mouseY<(windowHeight/5 +226))) {
        window.open("https://www.youtube.com/watch?v=uGTZf6e6SzY");
      }
      //Rachmaninoff
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 249)) && (mouseY<(windowHeight/5 +326))) {
        window.open("https://www.youtube.com/watch?v=kMOaC0guYuw");
      }
      //Coldplay
      else if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 349)) && (mouseY<(windowHeight/5 +426))) {
        window.open("https://www.youtube.com/watch?v=Tv5fmkKkYNA");
      }
    }
    else if (current_page == "publications") {
      //timbre2020
      // if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 49)) && (mouseY<(windowHeight/5 +126))) {
      //   window.open("https://dlsi.ua.es/gent/drizo/dlfm2019/trochidis.pdf");
      // }
      //cur
      if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 149)) && (mouseY<(windowHeight/5 +226))) {
        window.open("https://www.cur.org/computational_audio_analysis_for_cultural_heritage_preservation/");
      }
      //dlfm2019
      if ((mouseX>windowWidth/2 +32) && (mouseX<((windowWidth/2 +32) + (windowWidth/3 +120))) && (mouseY>(windowHeight/5 + 249)) && (mouseY<(windowHeight/5 +326))) {
        window.open("https://dlsi.ua.es/gent/drizo/dlfm2019/trochidis.pdf");
      }
    }
  }
}
