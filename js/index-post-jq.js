
$(function(){
    $("#includedContent").load("opiniones-preview.html");
});

var MAX_ELEMENTS = 8;
var FIRST_ELEMENTS = 8;
var MAX_ONSMALL_ELEMENTS = 4;


loadImgs(1, FIRST_ELEMENTS);

window.onpopstate = function(event) {
    if (!$('#modal01').hidden) {
        $('#modal01').hide();
        $("#html").css('overflow-y', "scroll");
    }
};
