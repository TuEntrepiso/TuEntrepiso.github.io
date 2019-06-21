
let rotated = false;
$(function(){
    $("#includedContent").load("layout/opiniones-preview.html");
    let ourHistoryBtn = $(".ourHistoryBtn");
    ourHistoryBtn.click(function () {
        $("#ourHistory").get(0).classList.toggle("w3-hide");
       // ourHistoryBtn.get(0).classList.toggle("w3-card");
       // ourHistoryBtn.get(0).classList.toggle("w3-btn");

        $(".ourHistoryBtn i").css({
            "transform": "rotate("+45*!rotated+"deg)",
            "transition": "all 0.5s ease",
            "padding-left": 3*!rotated+"px"
        });
        rotated=!rotated;
    });
});

var MAX_ELEMENTS = 48;
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

function sendOpinion() {
    let opinionInput = $("#compose-opinion");
    if (opinionInput.val()) {
        showSnackbar('Enviado');
        opinionInput.attr('disabled', true);
        $("#opinion-container .ask-btn").get(0).classList.toggle("w3-hide");
    }
}









//zoom


  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<img id="img01" class="myp-image " alt="Imagen seleccionada"  src="'+ $(this).attr('data-image') +'">')
        .append('<div class="photo myp-image "></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
