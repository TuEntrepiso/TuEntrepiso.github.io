// Modal Image Gallery
function onClick(element) {
// document.getElementById("img01").src = element.src;
  document.getElementById("img01").src = "fotosBKP/Entrepiso_"+element.getAttribute('index')+".jpg";
  document.getElementById("modal01").style.display = "block";
//  var captionText = document.getElementById("caption");
//  captionText.innerHTML = element.alt;
      
  $( "#img01" ).attr('index',element.getAttribute('index'));
}

function left(){

  var element = $( "#img01" );
  var index = parseInt(element.attr('index'),10);
  index = index-1;
  if(index<1)index=MAX_ELEMENTS;
  element.attr('src',"fotosBKP/Entrepiso_"+index+".jpg");
  element.attr('index',index);
}

function right(){

  var element = $( "#img01" );
  var index = parseInt(element.attr('index'),10);
  if(index>=MAX_ELEMENTS)index= 0;
  index = index+1;
  element.attr('src',"fotosBKP/Entrepiso_"+index+".jpg");
  element.attr('index',index);
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


