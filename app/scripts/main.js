'use strict';
console.log('Loaded');


var gareX = 1030;
var firstBridge = 2030;
var dataMountain = 3100;
var secondBridge = 4580;
var dataMeteo = 7200;
var thridBridge = 8740;
var tunnelExit = 11900;
var trainX;

var cloud = '../images/nuages.png';
var star = '../images/etoile.png';
var dataMountain = $( ".dataMountain" );
var adaptator = $(".adaptator");

var firstDial = $('<p class="appendText"> Les passagers Embarquent</p>');
var dataPass;
var data = $('<p class="appendText"> 9 : 30 </p>');

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
Particle.prototype.render = function(){

}


dataPass = $.getJSON('http://anarchy.rayanmestiri.com/ecs-rushhour/morning/SANN');
 console.log(dataPass);

/* JQuery Animate part  */

$( window ).load(function() {
  adaptator.height((window.innerHeight - 700)/2) ;
  var fromLeft = $(window).scrollLeft();
  $( "#train" ).animate({
    left: window.innerWidth/4 + fromLeft
    }, 1000); 
  $( ".nav" ).animate({
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
    $( ".nav" ).css({
      position: absolute
    });
  }
});


$(document).ready(function(){

});

$(".nav1").click(function(){
  $("body").animate({
    scrollLeft : gareX
  },500);
});
$(".nav2").click(function(){
  $("body").animate({
    scrollLeft : 3000
  },500);
});
$(".nav3").click(function(){
  $("body").animate({
    scrollLeft : dataMeteo
  },500);
});
$(".nav4").click(function(){
  $("body").animate({
    scrollLeft : 14000
  },500);
});


$(window).scroll(function(){
    // Get container scroll position
  var fromLeft = $(this).scrollLeft();
  trainX = $( "#train" ).position().left;

  $( "#train" ).animate({
      left: window.innerWidth/4 +fromLeft
  	}, 0);
    $( ".nav" ).animate({
        left: window.innerWidth/2 +fromLeft -100
      }, 0);    // console.log(fromLeft);	
     //console.log($( ".end" ).position().left);
  if( trainX > gareX && trainX < gareX+1000){
    firstDial.fadeIn().appendTo($('#train'));
  }else{
    firstDial.fadeOut("slow").remove() ;
  } 
  if(trainX > 3000){
    $( ".data1" ).animate(
      { height: '550' }, 500, function(){
        data.fadeIn().appendTo($(this));
        $( ".data2" ).animate(
          { height: '450' }, 500, function(){
            $( ".data3" ).animate(
            { height: '400' }, 500, function(){
              $( ".data4" ).animate(
            { height: '500' }, 500, function(){
          });
        });
      });
    });
  }  
});




//console.log(document.getElementsByTagName("body").width);