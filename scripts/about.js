// MOUSEMOVE-BACKGROUND
// listens for the movement of the mouse
// changes the background color, the text color

document.addEventListener('mousemove', function(event) {

    var x = Math.floor((event.clientX / window.innerWidth) * (255));

    // background color
    document.body.style.backgroundColor = 'rgb(' + x + ',' + x + ',' + x + ')';


    // text color
    if (x < 125) {
        document.getElementById("about-info").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById("about-link").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById("email").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById("github").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById("linkedin").style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
    } else if (x >= 125) {
        document.getElementById("about-info").style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById("about-link").style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById("email").style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById("github").style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById("linkedin").style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    }

});

//-------------------------------------------------------------------------------

// RIGHT-NAVIGATION
// listens for a click in the right navigation bar
// jumps to that projects description

document.getElementById('p1').addEventListener('click', function(event) {
    goProject('projectone');
});
document.getElementById('p2').addEventListener('click', function(event) {
    goProject('projecttwo');
});
document.getElementById('p3').addEventListener('click', function(event) {
    goProject('projectthree');
});
document.getElementById('p4').addEventListener('click', function(event) {
    goProject('projectfour');
});
document.getElementById('p5').addEventListener('click', function(event) {
    goProject('projectfive');
});
document.getElementById('p6').addEventListener('click', function(event) {
    goProject('projectsix');
});
document.getElementById('p7').addEventListener('click', function(event) {
    goProject('projectseven');
});

//-------------------------------------------------------------------------------

// FUNCTION
function goProject(targetElement) {
    document.getElementById(targetElement).scrollIntoView(true);
}
