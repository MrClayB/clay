const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// This function will send a message to the specified channel every 2 hours
async function sendMessage(channel) {
  const message = 'This is an automatic message that is being sent every 2 hours';
  await channel.send(message);
}

// This function will schedule the sendMessage function to run every 2 hours
async function scheduleMessage() {
  // Get the channel that you want to send the message to
  const channel = client.channels.cache.get('1055569409508376666');
  sendMessage(channel);
  setInterval(() => {
    sendMessage(channel);
  }, 2 * 60 * 60 * 1000); // 2 hours in milliseconds
}

client.on('ready', () => {
  scheduleMessage();
});

client.login('MTA1ODcwNDQ4NDYzMDU0NDM5NA.G-CWYF.BU8sM8PSbXtwO8uXFPaJqlEabJfue1xRb9CM8Y');