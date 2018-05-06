const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setPresence({game:{name:'munching and crunching',type:0}});﻿
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;

    if (message.content.indexOf("I love you Yuki") === 0) {
    return message.channel.send("I love you too, Satsujin");
    }

    if (message.content.indexOf("Yuki is hot") === 0) {
    return message.channel.send("I know.");
    }

    if (message.content.indexOf("Yuppi") === 0) {
    return message.channel.send("Gakkyun");
    }

    if (message.content.indexOf("I can't believe Ryo is dead") === 0) {
    return message.channel.send("Finally.");
    }
});

bot.login(process.env.token);
