// MOUSEMOVE-BACKGROUND
// listens for the movement of the mouse
// changes the background color


document.addEventListener('mousemove',function(event){

   // mapping
   var x = Math.floor((event.clientX/window.innerWidth)*(255));

  // background color
  document.body.style.backgroundColor = 'rgb(' + x + ',' + x + ',' + x + ')';

});

//-------------------------------------------------------------------------------


// RIGHT-NAVIGATION
// listens for a click in the right navigation bar
// jumps to that projects description
