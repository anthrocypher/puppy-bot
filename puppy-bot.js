var ircb = require('ircb'),
    fs = require('fs');

var puppies = require('./puppies.json');

function deliverPuppies() {
	var puppy = puppies[Math.floor(Math.random() * puppies.length)];
	irc.say('#nodebombrange', puppy);
} 
    
var irc = ircb({
    host: 'irc.freenode.net',
    secure: true,
    nick: 'omgpuppies',
    username: 'omgpuppies',
    realName: 'omgpuppies',
    channels: ['#nodebombrange']
}, function () {
    console.log('Connected');
    console.log('MOTD:\n');
    console.log(irc.motd);
		irc.say('#nodebombrange', 'Are u rdy for some puppiez?');
		setInterval(deliverPuppies, 5000);
});




