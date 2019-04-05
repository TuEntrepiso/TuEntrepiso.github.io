var example = {q: '', a: 'No hay preguntas con su criterio de búsqueda'};

var mySearch = $(".searchBox input");
mySearch.keyup(function () {
    generateQuestionsAnswers(mySearch.val());
});

window.addEventListener('scroll', function myFunction() {
    var searchBox = $(".searchBox").get(0);
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        searchBox.classList.remove("w3-hide");
    } else {
        searchBox.classList.add("w3-hide");
    }
});

$(".searchBox").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#comments").offset().top
    }, 20);
    mySearch.focus();
});

mySearch.keydown(function (event) {
    if (event.keyCode === 13  || event.keyCode == 27) {
        if (event.keyCode == 27)
            generateQuestionsAnswers('');
        $("#portfolio").focus();
    }
});

/* NOT WORKING
  $("#daSearchBox").click(function() {
    location.href = $("#searchHrefTarget")[0].href;
 //   $("#searchHrefTarget")[0].focus();
    mySearch.focus();
  });
 mySearch.click(function() {
    location.href = $("#searchHrefTarget")[0].href;
    mySearch.focus();
  });
*/

var questionsAnswers =
    [{
        q: 'Hola, quisiera saber si Uds hacen la instalacion y se acercan al lugar a tomar las medidas?',
        a: 'Así es. Nosotros hacemos la construcción, la instalación y lo entregamos pintado y listo para su uso. Nos acercamos al lugar para tomar las medidas y hacer un presupuesto mas preciso.'
    },
        {
            q: 'Disculpame, pero como hago para que vengan a ver el lugar? Gracias.',
            a: 'Podes solicitar un presupuesto llamando al Teléfono:11 6145-7082 o mandándonos un mail a mueblesyproyectosespeciales@hotmail.com y coordinamos.'
        },
        {
            q: 'Hola. El trabajo es para realizarlo en San Vicente, provincia de Buenos Aires. Es posible ? Gracias y saludos.',
            a: 'Buenas tardes. Lamentablemente no llegamos hasta san vicente. Saludos.'
        },
        {
            q: 'Hola,buenas tarde soy laura de Avellaneda quería saber si hacen trabajos aca? y cuanto sale? maso  menos.',
            a: 'Buenas tardes. Si. Realizamos trabajos en avellaneda. Si me pasa las medidas puedo darle una idea de precio.'
        },
        {
            q: 'Buenas tardes. Hacen trabajos por Villa Crespo? y por zona sur? ',
            a: 'Sí. Realizamos trabajos en: Avellaneda, Lanús, Lomas de Zamora, Agronomía, Almagro, Balvanera, Barracas, Belgrano, Boedo, Caballito, Chacarita, Coghlan, Colegiales, Constitución, Flores, Floresta, La Boca, La Paternal, Liniers, Mataderos, Monte Castro, Montserrat, Nueva Pompeya, Nuñez, Palermo, Parque Avellaneda, Parque Chacabuco, Parque Chas, Parque Patricios, Puerto Madero, Recoleta, Retiro, Saavedra, San Cristóbal, San Nicolás, San Telmo, Versalles, Villa Crespo, Vélez Sarsfield.'
        },
        {
            q: 'Un compañero de trabajo paso tu contacto que trabajas con hierro y madera. Quería saber si realizas puertas corredizas?',
            a: 'Sí. Nosotros realizamos ese tipo de trabajo. Me podes consultar al  1561457082.'
        },
        {
            q: 'Cuanto me sale hacer un entrepiso?',
            a: 'Todo depende de las medidas del mismo. Nos podes consultar al  1561457082 y te hacemos un presupuesto sin cargo.'
        },
        {
            q: 'Tienen fotos de entrepisos con escaleras?',
            a: 'Sí. Podes hacer click en el boton de PORTFOLIO en el menu para ver todas las imagenes.'
        },
        {
            q: '¿Qué es un entrepiso?',
            a: 'Un entresuelo, entrepiso, mezzanina, mezzanine, es un piso intermedio entre dos plantas principales de un edificio. Generalmente, tiene un techo bajo y sobresale en forma de balcón.'
        },
        {
            q: 'Se puede hacer una habitación en un entrepiso?',
            a: 'Sí, se puede.'
        },
        {
            q: 'Como hacer un entrepiso?',
            a: 'Podes solicitar un presupuesto mandándo un whatsapp al 11 6145-7082 y coordinamos para ver el lugar y tomar las medidas.'
        },
        {
            q: 'Querìa saber si tienen publicaciones en  <a target="_blank" rel="noreferrer"  href="https://mercadolibre.com.ar"> Mercado libre</a>',
            a: 'Asì es. Pero es mas rápido y fácil contactarnos a través de la pàgina'
        }
    ];

function generateQuestionsAnswers(text) {

    $("#comments").empty();

    var clone = $.extend(true, [], questionsAnswers);

    if (text != null && text != undefined && text !== "") {

        //var allWords = text.split(" ");
        clone = clone.filter(function (replacement) {
            return replacement.q.toUpperCase().includes(text.toUpperCase())
                || replacement.a.toUpperCase().includes(text.toUpperCase());
        })
            .map(function (replacement) {
                replacement.q = replacement.q.replace(new RegExp(text, 'gi'), '<strong>' + text + '</strong>');
                replacement.a = replacement.a.replace(new RegExp(text, 'gi'), '<strong>' + text + '</strong>');

                return replacement;
            });

    }

    if (jQuery.isEmptyObject(clone))
        clone.push(example);

    clone.forEach(function (src) {

        var qText = $("#questionTextTemplate").clone();
        qText.append(src.q);
        qText.removeAttr('id');

        var divHovere = $("#questionTemplate").clone();
        divHovere.removeAttr('id');
        divHovere.append(qText);


        var answText = $("#answerTextTemplate").clone();
        answText.append(src.a);
        answText.removeAttr('id');

        var answerContainer = $("#answerTemplate").clone();
        answerContainer.removeAttr('id');
        answerContainer.prepend(answText);

        var div = $("#questionsContainter").clone();
        div.removeAttr('hidden');
        div.removeAttr('id');
        div.append(divHovere);
        div.append(answerContainer);

        $("#comments").append(div);
    });
};

generateQuestionsAnswers(null);
