const Discord = require('discord.js');
const kick = require('../commands/kick');
const Client new Discord.Client();
const token = 'MTAxODc4ODM0MzExMjl5MDM1Nw.GB6fwy.EzqHDmROf-agERf1ifPqc43lgkkx66DMbYLJdA';
const prefix = '/';

Client.once('ready', () => {
  console.log('bot pret');
});

Client.login(token);

module.exports = (Client,message) => {
  if (message.content === prefix + 'kick') {
    return kick(message);
  }
}
