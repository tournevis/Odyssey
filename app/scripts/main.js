'use strict';
console.log('Loaded');


var gareX = 1330;
var firstBridge = 2030;
var dataMountain = 3000;  
var secondBridge = 4580;
var dataMeteo = 7330;
var thridBridge = 8740;
var tunnelExit = 11900;
var trainX;

var cloud = '../images/nuages.png';
var star = '../images/etoile.png';
var dataMountain = $( ".dataMountain" );

var firstDial = $('<p class="appendText"> Les passagers Embarquent</p>');
var dataPass;
var data = $('<p class="appendText"> Data</p>');

dataMountain.height(0);


  /* Parallax.js Initi */
var scene = document.getElementById('middleGround');
var parallax = new Parallax(scene);
parallax.origin(0.0, 1.0);

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
  
  var fromLeft = $(window).scrollLeft();
  $( "#train" ).animate({
    left: window.innerWidth/4 + fromLeft
    }, 1000);  
  for (var i = 0; i <= 100; i++) {

      Particle(star);
  };
  for (var i = 0; i <= 30; i++) {
      Particle(cloud);
  };
});
$(document).ready(function(){
  $(window).scroll(function(){ 
      // Get container scroll position
     var fromLeft = $(this).scrollLeft();
     trainX = $( "#train" ).position().left;

     $( "#train" ).animate({
        left: window.innerWidth/4 +fromLeft
    	}, 0);
    // console.log(fromLeft);	
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
            { height: '300' }, 300, function(){
             $( ".data3" ).animate(
              { height: '500' }, 500, function(){
        
            });
          });
        });
      }
     
        
      

       
      
  });
});



//console.log(document.getElementsByTagName("body").width);