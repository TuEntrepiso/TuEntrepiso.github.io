
$(function(){
    $("#includedContent").load("opiniones-preview.html");
});

var MAX_ELEMENTS = 8;
var FIRST_ELEMENTS = 8;
var MAX_ONSMALL_ELEMENTS = 4;


loadImgs(1, FIRST_ELEMENTS);

window.onpopstate = function(event) {
    let imgModal = $('#modal01');
    if (!imgModal.hidden) {
        imgModal.hide();
        $("#html").css('overflow-y', "scroll");
    }
};
