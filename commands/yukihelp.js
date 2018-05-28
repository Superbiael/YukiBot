const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
  .setColor("#00ff67")
  .addField("Commands:","**y!yuki** *<question>* | Ask him anything. \n**y!send** *<@user> <message>* | Send a DM to the mentioned user\n**y!scout** | Solo Yolo \n**y!quote** | Random quote\n**y!say** *<message>* | Have the bot say anything you want\n**y!yukihelp** | Displays this help message")
  .addField("Basic y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank || watchout")
  .addField("Command phrases:", "I can't believe Ryo is dead || I'm gonna munch|| I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Hey gays")

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "yukihelp"
}
