'use strict';
var gareX = 1030;
var firstBridge = 2030;
var dataMountain = 3100;
var secondBridge = 4580;
var dataMeteo = 7250;
var thridBridge = 8740;
var tunnelExit = 11900;
var insideTrain = 14000;
var trainX;

var cloud = '../images/nuages.png';
var star = '../images/etoile.png';
var dataMountain = $( '.dataMountain' );
var adaptator = $('.adaptator');
var firstDial = $('<p class="appendTextTrain">Let\'s go !</p>');
var dataPass;
var colorInd = 0;

var score = 0;
var scoreCount = false;


dataMountain.height(0);


/* Parallax.js Init */

var scene = document.getElementById('middleGround');
var parallax = new Parallax(scene);
//parallax.origin(0.0, 0.0);

/* Canvas Part and Particule part */

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 13080;
canvas.height = 300;

ctx.globalCompositeOperation = 'multiply';

document.getElementById('canvasId').appendChild(canvas);


var etoileImg = '../images/etoiles.png';
function Particle(imagesrc){
  var x =  Math.random()*canvas.width;
  var y =  Math.random()*canvas.height-30;
  var image = new Image(); 
  image.src = imagesrc;
  image.onload = function() {
  // Cette fonction est appelée lorsque l'image a été chargée
    ctx.drawImage(this,x,y); // this fait référence à l'objet courant (=image)
  };
  //context.beginPath();
  //ctx.drawImage(etoileImg, x,y);
}

//dataPass = $.getJSON('http://anarchy.rayanmestiri.com/ecs-rushhour/morning/SANN');
// console.log(dataPass);

/* JQuery Animate part  */

$( window ).load(function() {
  adaptator.height((window.innerHeight - 700)/2) ;
  var fromLeft = $(window).scrollLeft();
  $( '#train' ).animate({
    left: window.innerWidth/4 + fromLeft
    }, 1000); 
  $( '.nav' ).animate({
        left: window.innerWidth/2 +fromLeft -100
      }, 0);   
  for (var i = 0; i <= 100; i++) {
      Particle(star);
  };
  for (var i = 0; i <= 30; i++) {
      Particle(cloud);
  };
});

/***** RESPONSIVE PART  ****/

$( window ).resize(function() {
  adaptator.height((window.innerHeight - 700)/2) ;
  if(adaptator.height() < 30){
    $( '.nav' ).css({
      'position': 'absolute'
    });
  }
});
/** INVERT SCROLLING  **/
$(function() {
   $('body').mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 0.8);
      event.preventDefault();
   });
});



$('.nav1').click(function(){
  colorInd = 1;
  $('body').animate({
    scrollLeft : gareX
  },500);
});
$('.nav2').click(function(){
   colorInd = 2;
  $('body').animate({
    scrollLeft : 3000
  },500);
});
$('.nav3').click(function(){
   colorInd = 3;
  $('body').animate({
    scrollLeft : dataMeteo
  },500);
});
$('.nav4').click(function(){
   colorInd = 4;
  $('body').animate({
    scrollLeft : 14000
  },500);
});
$(document).ready(function(){

});

$('.btn').click(function(){
  $('.btn').removeClass('selected');
  $(this).addClass('selected');
});

$(window).scroll(function(){
    // Get container scroll position
  var fromLeft = $(this).scrollLeft();
  trainX = $( '#train' ).position().left;
  console.log(trainX);
  $( '#train' ).animate({
      left: window.innerWidth/4 +fromLeft
  	}, 0);
    $( '.nav' ).animate({
        left: window.innerWidth/2 +fromLeft -100
      }, 0);    // console.log(fromLeft);	
     //console.log($( '.end' ).position().left);
  if( trainX > gareX && trainX < gareX+1000){
    firstDial.fadeIn().appendTo($('#train'));
  }else{
    firstDial.fadeOut('slow').remove() ;
  } 
  if(trainX > 3000){
    animateMountain();
  }  
  if(trainX > dataMeteo){
    animateMeteo();
  }
  if(trainX > insideTrain){
      seatCount();
  }
});

function animateMountain(){
  var tl = new TimelineLite();
  tl.to($( '.data1' ),0.5,{height:'550px'},'-=0.1');
  tl.to($( '.data2' ),0.5,{height:'450px'},'-=0.1');
  tl.to($( '.data3' ),0.5,{height:'400px'},'-=0.1');
  tl.to($( '.data4' ),0.5,{height:'500px'},'-=0.1');
}
function animateMeteo(){
  var tl = new TimelineLite();
  tl.to($( '#m1' ),0.5,{opacity:1},'+=0.1');
  tl.to($( '#m2' ),0.5,{opacity:1},'+=0.1');
  tl.to($( '#m3' ),0.5,{opacity:1},'+=0.1');
  tl.to($( '#m4' ),0.5,{opacity:1},'+=0.1');
}
function seatCount(){

  $( "#seat" ).text(score);
  if(score < 30){
    score += 2 ;
  }else{
   score = 30;
 }
  
}