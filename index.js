const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Testing1`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = 'y!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd ===`${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

    return message. channel.send(botembed);
  }

  if(cmd === `${prefix}mafia`){
    return message.channel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    return message.channel.send("babe, that me leaf.");
  }

  if(cmd === `${prefix}ryo`){
    return message.channel.send("Oh fuck. Bastard spotted.");
  }
});

bot.login(process.env.token);
