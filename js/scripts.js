
var ypos, ele;
function parallex() {
    ypos = window.pageYOffset;

    ele = document.getElementById("parallex");
    if(ypos>0)
        ele.style.zIndex = -10;
    else
        ele.style.zIndex = 0;
    ele.style.top = ypos * .3 + "px";

}

var origOffsetY = $("#navbar").offset().top;
function navBarStatic() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('#navbar').addClass('sticky');
    } else {
        $('#navbar').removeClass('sticky');
    }
}

$('#parallex a, #navbar a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this,'href') ).offset().top
    }, 800);
    return false;
});

window.addEventListener("scroll",parallex,false);
window.addEventListener("scroll",navBarStatic,false);
