const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I never learned how to read.");
   let replies = ["I'm sleepy...", "<:yuki:407039712893861909>"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setColor("#00ff67")
   .addField(replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"yuki"
}
