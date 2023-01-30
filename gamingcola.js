const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const client = new Client({
    checkUpdate: false
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

var num = 0;
var time;

// Get new messages from channel 1068761628121763930 in server 267810707574226964
client.on('messageCreate', async (message) => {
    if (message.channel.id === '708009800193015858' && message.guild.id === '572107827020300288') {
        // If author isn't myself
        if (message.author.id !== client.user.id) {
            // Check if message is a number
            if (!isNaN(message.content)) {
                var userInput = parseInt(message.content);
                
                // We need to check if the number the user sent is either the same number that we have or 
                if (userInput !== num && userInput > num) {
                    console.log("Succcess checks " + message.content  + " Compared: " + userInput + ">" + num)
                    
                    num = userInput; // 8888

                    // Clear the timeout
                    clearTimeout(time);

                    // Wait 0.5 to 1 second and then message.channel.send(num);
                    time = setTimeout(() => {
                        message.channel.send((userInput + 1).toString());
                        console.log("Sent " + (userInput + 1).toString());
                    }, Math.floor(Math.random() * 500) + 500);
                } else {
                    console.log("Failed checks " + message.content)
                }
            }
        } else {

        }
    }
});

client.login(process.env['gamingcolaToken']);
