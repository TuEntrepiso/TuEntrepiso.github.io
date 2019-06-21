function getAndroidVersion(r){var n=(r=(r||navigator.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/);return n?n[1]:void 0}
//not track me
var url_string = window.location.href;
function itIsNotMe() {
    return url_string.search("#123") == -1 && getAndroidVersion() != "4.3" && screen.height != undefined && screen.height!=616;
}

if ( itIsNotMe() ) {
    [
        'https://www.googletagmanager.com/gtag/js?id=UA-123383467-1',
        'https://www.google-analytics.com/analytics.js'
    ].forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.type='text/javascript';
        script.async = true;
        document.head.appendChild(script);
    });

    // <!-- Global site tag (gtag.js) - Google Analytics -->
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-123383467-1');
    // <!-- Global site tag (gtag.js) - Google Analytics -->

    //<!-- Google Analytics -->
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-123383467-1', 'auto');
    ga('require', 'linkid', 'linkid.js');
    ga('send', 'pageview');
    //<!-- End Google Analytics -->

    //<!-- Hotjar Tracking Code for https://tuentrepiso.github.io/ -->
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1061489,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    //<!-- End Hotjar -->
}
    //<!-- not track me -->

var alts = ["Imagen de entrepiso de madera y hierro en Capital Federal (CABA)",
            "Entrepiso Banfield",
            "Entrepiso de madera Lomas de Zamora"];

/* modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses */
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

// Modal Image Gallery
function showImgModal(element) {
    let myModal = $('#modal01');
    if (myModal.is(':visible')) return;

// document.getElementById("img01").src = element.src;

    var index=element.getAttribute('index')!==undefined ? element.getAttribute('index'): 1;
    document.getElementById("img01").src = "fotosBKP/Entrepiso_" + index + ".jpg";
        
    $('.photo').css({'background-image': 'url('+ "fotosBKP/Entrepiso_" + index + ".jpg" +')'});

    document.getElementById("modal01").style.display = "block";
//  var captionText = document.getElementById("caption");
//  captionText.innerHTML = element.alt;

    $("#img01").attr('index', element.getAttribute('index'));

    $("#html").css('overflow-y', "hidden");

    history.pushState({page: 1}, "title 2", "?page="+index+"#");
    console.log("back added");
}


function hideImgModal() {
    let myModal = $('#modal01');
    if (myModal.is(':visible')) {
        myModal.hide();
        $("#html").css('overflow-y', "scroll");
        history.back();
    }
}


function left() {

    var element = $("#img01");
    var index = parseInt(element.attr('index'), 10);
    index = index - 1;
    if (index < 1) index = MAX_ELEMENTS;
    element.attr('src', "fotosBKP/Entrepiso_" + index + ".jpg");
    element.attr('index', index);
}

function right() {

    var element = $("#img01");
    var index = parseInt(element.attr('index'), 10);
    if (index >= MAX_ELEMENTS) index = 0;
    index = index + 1;
    element.attr('src', "fotosBKP/Entrepiso_" + index + ".jpg");
    element.attr('index', index);
}

// Change style of navbar on scroll
window.onscroll = function () {
    myFunction()
};

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
    var burger = document.getElementById("hamburgerContainer");
    burger.classList.toggle('is-active');
    
    var x = document.getElementById("navDemo");
    x.classList.toggle('w3-show');
}

function loadImgs(position, offset) {
    for (var i = position; i <= offset; i++) {

        var img = $("#template").clone();
        img.attr('src', "fotos/Entrepiso_" + i + ".jpg");
        img.attr('height', "235px"); //TODO: PASAR ESTA LINEA A CADA PAGINA
        img.attr('index', i);
        //   img.attr('padding',"2px");

        if(i>MAX_ONSMALL_ELEMENTS){
            img[0].classList.add("w3-hide-small");
        }

        img.removeAttr('hidden');
        img.removeAttr('id');
        var divHovere = $("#hovereContainer").clone();
        divHovere.attr('index', i);
        divHovere.removeAttr('id');
        divHovere.removeAttr('hidden');
        divHovere.prepend(img);

        var div = $("#templateContainer").clone();
        div.removeAttr('hidden');
        div.removeAttr('id');
        div.append(divHovere);

        $("#imgContainter").append(div);
    }
}

function loadMoreImgs() {
    $("#plusContainer").attr('hidden', true);
    $("#plusOnFbContainer").removeAttr('hidden');
    loadImgs(FIRST_ELEMENTS + 1, MAX_ELEMENTS);
}

$(document).keydown(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
    if (event.keyCode == 37) {
        left();
    }

    if (event.keyCode == 39) {
        right();
    }
    if (event.keyCode == 27) {
        hideImgModal();
    }
});

function showSnackbar(text)
{
    var x = document.getElementById("general-snackbar");
    x.className = x.className+" show";
    x.innerText=text;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// questions

function showOrHideAskOptions() {
    $('.ask-options').get(0).classList.toggle('w3-hide');
    $('.ask-btn').get(0).classList.toggle('w3-hide');
}

function sendQuestion(sendOptionFlag) {
    let inputText = $("#compose-question").val();
    let isWpp = sendOptionFlag === 'W';

    let href = isWpp ? "https://wa.me/5491161457082?text=" : "mailto:mueblesyproyectosespeciales@hotmail.com?subject=TuEntrepiso%20-%20Quería%20solicitar%20un%20presupuesto&body=";

    var a = document.createElement('a');
    var linkText = document.createTextNode("my title text");
    a.appendChild(linkText);
    if (isWpp) a.target = "_blank";
    a.title = "Enviar";
    a.href = href + inputText;
    a.rel = "noreferrer";
    a.click();
    showOrHideAskOptions();
}

// Footer

$(function(){
    $("#includedFooterContent").load("layout/footer-floatbtns.html", function() {
        // ICONS

        // Remove entrance cool Effect
        var element =  document.querySelector('.float.fb');
        element.addEventListener('animationend', function() {
            element.classList.remove('animated', 'zoomInUp');
        });
        var meliAnimated =  document.querySelector('.float.meli');
        meliAnimated.addEventListener('animationend', function() {
            meliAnimated.classList.remove('animated', 'zoomInUp');
        });
    });

});

// replace href with #123 if present
$(document).ready(function () {

    if (window.location.href.includes("#123")) {
        var allHref = $("a[href^='https://tuentrepiso.github.io']");
        allHref.each(function () {
            var anHref = $( this ).get(0);
                anHref.href = anHref.href + "#123"
            }
        );
    }

    // Replace source
    $('img').on("error", function() {
        $(this).attr('src', 'fotos/no_image.jpg');
    });
});
