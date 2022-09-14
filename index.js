const Discord = require('discord.js');
const kick = require('../commands/kick');
const Client new Discord.Client();
const token = 'MTAxODc4ODM0MzExMjI5MDM1Nw.GS55L3.P7llHhIMQviek34cfau58CN0A0nWP-tULW5OF0';
const prefix = '/';

Client.once('ready', () => {
  console.log('bot pret');
});

Client.login(token);

module.exports = (Client,message) => {
  if (message.content == prefix + 'kick') {
    return kick(message);
  }
}
