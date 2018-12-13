let socket = io.connect('http://localhost:4000');

/**
 * Query Dom
 */
let handle = document.getElementById('handle')
let message = document.getElementById('message')
let btn = document.getElementById('send')
let output = document.getElementById('output')

//Emit Event
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
})