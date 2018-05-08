const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#00ff67")
  .addDescription(" * = case sensitive ")
  .addField("y!Commands:", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank")
  .addField("Other Commands:", "I can't believe Ryo is dead || I'm gonna munch || Yuppi || I love you Yuki || Yuki is hot || Good morning Yuki || Good night Yuki || Yuki, if you're out there", "Pika~*")
  .addField("8ball Command:","y!yuki <question>");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "yukihelp"
}
