const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#00ff67")
  .addField("y!Commands", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank")
  .addField("Other Commands", "I can't believe Ryo is dead || I'm gonna munch || Yuppi || I love you Yuki || Yuki is hot || Good morning Yuki || Good night Yuki || Yuki, if you're out there")
  .addField("8ball command","y!yuki <question>");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "yukihelp"
}
