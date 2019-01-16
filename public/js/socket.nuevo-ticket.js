// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');


});

socket.on('disconnect', () => {
    console.log('Servidor desconectado');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});