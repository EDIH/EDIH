var conf = {
    time : 7000,
};
//var direction = 0;
var imgArray = $('#multslider ul li');
var length = imgArray.length;
var iteration = length -1;
window.onload = function()
{
    //imgArray = document.getElementById('slider').getElementsByTagName('img');
    //var direction = 0;
    //var imgArray = $('#multslider ul li');
    //var length = imgArray.length;
    //iteration = length -1;
    (function movePic(){
        //imgArray[i].classList.remove('active');
        imgArray[iteration].style.cssText = 'opacity:0';
        iteration = ++iteration % length;
        //imgArray[i].classList.add('active');
        imgArray[iteration].style.cssText = 'opacity:1';
        window.setTimeout(movePic, conf.time)
    })();
};
function moveTo(direction)
{
    imgArray[iteration].style.cssText = 'opacity:0';
    iteration = (length + (iteration + direction)) % length;
    imgArray[iteration].style.cssText = 'opacity:1';
    console.log('some');
};
$('#prev').on('click',moveTo(-1));
$('#next').on('click',moveTo(+1));
//function init(){
//    $('#multslider ul li').each(function(){
//        $(this).css('display','none');
//        //console.log('some');
//    });
//}
//$(document).ready(function(){
//    //for(;;) {
//        init();
//    //}
//    console.log(conf.time);
//    //$('#multslider').each(function(){
//    //
//    //});
//});