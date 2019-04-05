
$(function(){
    $("#includedContent").load("layout/opiniones-preview.html");
    let ourHistoryBtn = $(".ourHistoryBtn");
    ourHistoryBtn.click(function () {
        $("#ourHistory").get(0).classList.toggle("w3-hide");
       // ourHistoryBtn.get(0).classList.toggle("w3-card");
       // ourHistoryBtn.get(0).classList.toggle("w3-btn");
        
        $(".ourHistoryBtn i").get(0).classList.toggle("w3-hide");
    });
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
