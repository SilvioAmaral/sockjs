//client
const SockJS = require('sockjs-client');

function getSocket(id) {
    const sock = new SockJS('http://localhost:80/echo', null, {
        transports: 'xhr-polling'
    });
    sock.onopen = function() {
        console.log('open', id);
        sock.send('test' + id);
    };

    sock.onmessage = function(e) {
        console.log('message', e.data);
        sock.close();
        console.log('closing', id);
    };

    sock.onclose = function() {
        console.log('close', id);
    };

}

for (var i = 0; i < 100; i++) {
    getSocket(i);
}