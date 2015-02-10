var conf = {
    time : 7000
    
};
var imgArray = $('#multslider ul li');
var length = imgArray.length;
var iteration = length -1;
window.onload = function()
{

    (function movePic(){
        imgArray[iteration].style.cssText = 'opacity:0';
        iteration = ++iteration % length;
        imgArray[iteration].style.cssText = 'opacity:1';
        window.setTimeout(movePic, conf.time)
    })();
};
function managerScroll(direction)
{
    imgArray[iteration].style.cssText = 'opacity:0';
    iteration = (length + (iteration + direction)) % length;
    imgArray[iteration].style.cssText = 'opacity:1';
}

$('#multslider').mousemove(function(){
    var position = event.pageX;
    $(this).find('.slide-pic').css('left',position/-100);
    $(this).find('.slide-caption').css('left',position/-40);
});


$('#prev').click(function(){managerScroll(-1)});
$('#next').click(function(){managerScroll(+1)});