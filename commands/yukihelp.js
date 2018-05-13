const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands.")
  .setColor("#00ff67")
  .addField("y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank || watchout || scout || yukisay <message> ")
  .addField("Other commands:", "I can't believe Ryo is dead || I'm gonna munch || Yuppi || I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Pika~ || Hey gays")
  .addField("8ball command:","y!yuki <question>")
  .addField("Send DM:", "y!send @user <message> | Requires administrator permissions to delete command message after sending DM");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "yukihelp"
}
