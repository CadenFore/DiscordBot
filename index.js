
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const command = require('./command');
const firstMessage = require('./first-message');

client.on('ready', () => {
    console.log('The client is ready!');

    firstMessage(client, '813252592880451598', 'You punched anything lately?', ['']);

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('pong');
    })

    command(client, 'server', message => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`CadeyWapp's ${guild.name} has ${guild.memberCount} slabs!`);
        })
    })

    command(client, 'status', message => {
        const content = message.content.replace('!status ', '');

        client.user.setPresence({
            activity: {
                name: content, 
                type: 0
            }
        })
    })


});

client.login(config.token);