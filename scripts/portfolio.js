// PAGE REFRESH
// on page refresh, go to top of page
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


// RE-DIRECTING
// looks for a hash in the document name
// shows the div in document name

if(window.location.hash) {
  var hash = window.location.hash.substring(1);
  viewProject(hash);
}

//-------------------------------------------------------------------------------

// MOUSEMOVE-BACKGROUND
// listens for the movement of the page scroll
// changes the background color, the text color, the outline color of the venn diagram

document.addEventListener('scroll', function(event) {

    // find the max scroll position
    var maxScrollHeight = document.body.scrollHeight - document.body.clientHeight;

    // mapping
    var x = Math.floor((window.scrollY / maxScrollHeight) * (255));

    // background color
    document.body.style.backgroundColor = 'rgb(' + x + ',' + x + ',' + x + ')';

});

//-------------------------------------------------------------------------------

// CLICK-SCROLL
// listens for venn-diagram to be clicked
// scrolls to clicked project's description

document.getElementById('code').addEventListener('click', function(event) {
    viewProject('projectone');
});

document.getElementById('math').addEventListener('click', function(event) {
    viewProject('projecttwo');
});

document.getElementById('design').addEventListener('click', function(event) {
    viewProject('projectthree');
});

document.getElementById('code-design').addEventListener('click', function(event) {
    viewProject('projectfive');
});

document.getElementById('code-math').addEventListener('click', function(event) {
    viewProject('projectfour');
});

document.getElementById('design-math').addEventListener('click', function(event) {
    viewProject('projectsix');
});

document.getElementById('all').addEventListener('click', function(event) {
    viewProject('projectseven');
});


// RIGHT NAVIGATION
// listens for click in the right navigation bar
// goes to the project description

document.getElementById('p1').addEventListener('click', function(event) {
    viewProject('projectone');
});
document.getElementById('p2').addEventListener('click', function(event) {
    viewProject('projecttwo');
});
document.getElementById('p3').addEventListener('click', function(event) {
    viewProject('projectthree');
});
document.getElementById('p4').addEventListener('click', function(event) {
    viewProject('projectfour');
});
document.getElementById('p5').addEventListener('click', function(event) {
    viewProject('projectfive');
});
document.getElementById('p6').addEventListener('click', function(event) {
    viewProject('projectsix');
});
document.getElementById('p7').addEventListener('click', function(event) {
    viewProject('projectseven');
});


// FUNCTION-------------------------------------------------------------------

function viewProject(chosenElement) {

    //make all elements hidden
    var pd = document.getElementsByClassName('project-div');
    for (var i = 0; i < pd.length; i++) {
        pd[i].style.display = 'none';
    } // end for

    // make chosen element visible
    document.getElementById(chosenElement).style.display = 'block';

    // scroll to target element
    $('html, body').animate({
        scrollTop: $("#" + chosenElement).offset().top
    }, 1000);

} // end viewProject

//-----------------------------------------------------------------------------


// PAUSE VIDEO
// waits for the video to be out of the viewport
// pauses video
