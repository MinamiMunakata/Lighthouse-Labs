var socket = io();

socket.emit('login');

$('form').on('submit',function() {
    var text = $('#initials').val() + " says: " + $('#message').val();
    socket.emit('message', text);
    $('message').val('');
    return false;
});

socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
});

socket.on('login', function(messages) {
    messages.forEach(msg => {
        $('<li>').text(msg).appendTo('#history');
    });
})