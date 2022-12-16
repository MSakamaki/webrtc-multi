const connection = new RTCMultiConnection();

connection.socketURL = 'https://muazkhan.com:9001/';

connection.session = {
    data: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};

connection.iceServers = [{
    'urls': [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun.l.google.com:19302?transport=udp',
    ]
}];

connection.onopen = function (event) {
    connection.send('hello everyone');
};

connection.onmessage = function (event) {
    console.log('onmessage:' + event.userid + ' said: ' + event.data, message);
    setMessage(event.userid + ' message: ' + event.data);
};

function send() {
    const message = document.querySelector('#senditem')?.value;
    if (message) {
        connection.send(message);
        setMessage('YOU   message: ' + message);
    }
}

function setMessage(message) {
    const p = document.createElement("p");
    p.innerText = message;
    document.querySelector('#message').appendChild(p);
}

connection.openOrJoin('msakamaki-webrtc-multi-jrwv4gvj9735595');