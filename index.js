const { Client, Util } = require('discord.js');
const client = new Client();

var prefix = "mario!";

client.on('ready', () => {
	// nothing for now
});

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('ready', () => {
	client.user.setActivity("Hello, I am offline RN - please contact me once I am online. Thanks!", {
	  type: "STREAMING",
	  url: "https://www.twitch.tv/mariolatif741"
	});
});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('msg', () => {
  if (msg.channel.DMChannel) {
    msg.author.send("I am currently offline, please message me once I am online. Thank you!");
  }
})


client.login(process.env.TOKEN);
