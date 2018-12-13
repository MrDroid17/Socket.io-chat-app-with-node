let socket = io.connect('http://localhost:4000');

/**
 * Query Dom
 */
let handle = document.getElementById('handle')
let message = document.getElementById('message')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let feedback = document.getElementById('feedback')

//Emit Event
btn.addEventListener('click', () => {
    socket.emit('chat', {
            message: message.value,
            handle: handle.value
        })
        // clear message once message is sent
    message.value = ''
})

// attach click event on message
message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})


// Listen for events
socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
})

// Broadcast feedback message
socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...<p><em>';
})