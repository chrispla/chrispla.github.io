website.js structure:

text and image variables
preload()
  preload images
setup()
  particle instantiation and initialization
page dictionary values and functions
  home
    particle_colors and tab_info
    image {slidein, static, slideout}
    content {slidein, static, fadeout}
    particle {fadein, static, fadeout}
  about
    particle_colors and tab_info
    content {fadein, static, fadeout}
   compositions
    particle_colors and tab_info
    content {fadein, static, fadeout}
   performances
    particle_colors and tab_info
    content {fadein, static, fadeout}
   publications
    particle_colors and tab_info
    content {fadein, static, fadeout}
   projects
    particle_colors and tab_info
    content {fadein, static, fadeout}
   contact
    particle_colors and tab_info
    content {fadein, static, fadeout}
general functions
  state_agnostic()
    {background, version, framerate}
   Particle class
   Tab class
   tab_box()
   ta2title()
   general_particles {fadein, static, fadeout)
   line {fadein, static, fadeout}
   homebutton {fadein, static, fadeout}
general variables
  state agnostic
  STATE 0:
    substate 0: page fade-out
    substate 1: image slide-in
    substate 2: content slide-in
    substate 3: particle fade-in
  STATE 1: 
    homepage static
  STATE 2:
    substate 0: home content fade-out
    substate 1: image slide-out and tab2title
    substate 2: page content fade-in
  STATE 3: 
    page static
mousePressed()
   if tab
   if homebutton
   if content in page
