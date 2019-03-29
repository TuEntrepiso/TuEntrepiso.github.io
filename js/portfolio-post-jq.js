
var MAX_ELEMENTS = 48;
var FIRST_ELEMENTS = 20;
var MAX_ONSMALL_ELEMENTS = MAX_ELEMENTS;


loadImgs(1, FIRST_ELEMENTS);

window.onpopstate = function(event) {
    let imgModal = $('#modal01');
    if (!imgModal.hidden) {
        $('#modal01').hide();
        $("#html").css('overflow-y', "scroll");
    }
};
