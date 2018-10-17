const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I'll answer whatever. Will you finally ask for my body measurements?");
   let replies = [
     "That's right.",
     "No... is what you thought I would say (lol)","No way.",
     "Yes... Is what you thought I would say (lol)","Of course.",
     "Don't be ridiculous.",
     "Do I look like someone who'd know?",
     "Sure, why not?",
     "A whole lot.",
     "More or less."
   ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
    .setColor("#00ff67")
    .addField("Question:", question)
    .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "bot-channel");
   if(!botschannel) return;
   return message.channel.send(ballembed);
 }

module.exports.help = {
  name:"yuki"
  }
