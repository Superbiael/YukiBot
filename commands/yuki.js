const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I'm gay, and can't read.");
   let replies = ["Yes... Is what you thought I would say (lol)","Of course.","I don't know.", "Don't be ridiculous.","Do I look like someone who'd know?", "Sure, why not?", "A whole lot."];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#00ff67")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"yuki"
}
