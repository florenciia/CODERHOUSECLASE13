$("body").prepend(`<div id="div1" class="form" >
                            <form id="target">
                            <p class="text">Nombre</p>
                            <input class="input"type="text" placeholder="Tu nombre">
                            <p class="text">Email</p>
                                <input class="input"type="text" placeholder="Tu email">
                            <p class="text">Teléfono</p>
                                <input class="input"type="text" placeholder="Tu número">
                            <p class="text">Cantidad de clases</p>
                                <input class="input"type="number">
                            <p class="text">Mensaje</p>
                                <input class="inputTextarea" type="textarea" placeholder="Dejanos un mensaje">
                            <br>
                            <input class="inputSubmit" type="submit">

                            </form>
                    </div>`);
$("body").prepend('<button id="btn1" class="btn1">Consultame!</button>');


$("#btn1").click(() => { 
    $("#div1").toggle("slow");
});


$( "#target" ).submit(function( event ) {
    container.innerHTML = ( `<div> <p class="submitTexto"> Se ha enviado el mensaje correctamente! <br> Pronto nos estaremos comunicando con usted. </p> </div>` );
    event.preventDefault();
});
