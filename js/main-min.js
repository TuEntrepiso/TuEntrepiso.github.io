function onClick(t){document.getElementById("img01").src=t.src,document.getElementById("modal01").style.display="block",$("#img01").attr("index",t.getAttribute("index"))}function left(){var t=$("#img01"),e=parseInt(t.attr("index"),10);(e-=1)<=1&&(e=MAX_ELEMENTS),t.attr("src","fotos/Entrepiso_"+e+".jpg"),t.attr("index",e)}function right(){var t=$("#img01"),e=parseInt(t.attr("index"),10);e>=MAX_ELEMENTS&&(e=0),e+=1,t.attr("src","fotos/Entrepiso_"+e+".jpg"),t.attr("index",e)}function myFunction(){var t=document.getElementById("myNavbar");document.body.scrollTop>100||document.documentElement.scrollTop>100?t.className="w3-bar w3-card w3-animate-top w3-white":t.className=t.className.replace(" w3-card w3-animate-top w3-white","")}function toggleFunction(){var t=document.getElementById("navDemo");-1==t.className.indexOf("w3-show")?t.className+=" w3-show":t.className=t.className.replace(" w3-show","")}window.onscroll=function(){myFunction()};