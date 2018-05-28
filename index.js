const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "y!";

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Satsujin love bot", {type:0});

});


bot.on('message', message => {
  if (message.author.bot) return;

     msg = message.content.toLowerCase();
   
    if(msg.startsWith (prefix + "smooch")) {
      number = 2;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: message.channel.send ( "Fufu... You're being affectionate today. Come here."); break;
        case 2: message.channel.send ( "My heart races in more ways than one when you do that, you know?"); break;
     }
   }
  
    if(msg.startsWith (prefix + "scout")) {
      number = 38; 
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: message.channel.send ({files:["./images/yuki_birthday.png"]}); break;
        case 2: message.channel.send ({files:["./images/yuki_birthdayssr.png"]}); break;
        case 3: message.channel.send ({files:["./images/yuki_gothichalloween_ssr.png"]}); break;
        case 4: message.channel.send ({files:["./images/yuki_kiseki.png"]}); break;
        case 5: message.channel.send ({files:["./images/yuki_marchen.png"]}); break;
        case 6: message.channel.send ({files:["./images/yuki_nodoubtsr.png"]}); break;
        case 7: message.channel.send ({files:["./images/yuki_nodoubt.png"]}); break;
        case 8: message.channel.send ({files:["./images/yuki_order.png"]}); break;
        case 9: message.channel.send ({files:["./images/yuki_rabbit.png"]}); break;
        case 10: message.channel.send ({files:["./images/yuki_rabbitsr.png"]}); break;
        case 11: message.channel.send ({files:["./images/yuki_xmas.png"]}); break;     
        case 12: message.channel.send ({files:["./images/yuki_linked.png"]}); break;
        case 13: message.channel.send ({files:["./images/yuki_monster.png"]}); break;
        case 14: message.channel.send ({files:["./images/yuki_monstersr.png"]}); break;
        case 15: message.channel.send ({files:["./images/yuki_ordinarydays.png"]}); break;
        case 16: message.channel.send ({files:["./images/yuki_ordinarydaysr.png"]}); break;
        case 17: message.channel.send ({files:["./images/yuki_ordinarydayssr.png"]}); break;
        case 18: message.channel.send ({files:["./images/yuki_shuffle.png"]}); break;
        case 19: message.channel.send ({files:["./images/yuki_sparkle_ssr.png"]}); break;
        case 20: message.channel.send ({files:["./images/yuki_rehearsalsr.png"]}); break;
        case 21: message.channel.send ({files:["./images/yuki_taisho.png"]}); break;
        case 22: message.channel.send ({files:["./images/yuki_valentine_ssr.png"]}); break;
        case 23: message.channel.send ({files:["./images/yuki_work.png"]}); break;
        case 24: message.channel.send ({files:["./images/yuki_worksr.png"]}); break;
        case 25: message.channel.send ({files:["./images/yuki_xmasmagic_ssr.png"]}); break;
        case 26: message.channel.send ({files:["./images/yuki_zodiac.png"]}); break;  
        case 27: message.channel.send ({files:["./images/yuki_disone.png"]}); break;
        case 28: message.channel.send ({files:["./images/yuki_kingpudding.png"]}); break;
        case 29: message.channel.send ({files:["./images/yuki_rehearsal.png"]}); break;                
        case 30: message.channel.send ({files:["./images/yuki_winter.png"]}); break;
        case 31: message.channel.send ({files:["./images/yuki_winterssr.png"]}); break;
        case 32: message.channel.send ({files:["./images/yuki_rehearsal_ur.png"]}); break;
        case 33: message.channel.send ({files:["./images/yuki_whiteday_sr.png"]}); break;
        case 34: message.channel.send ({files:["./images/yuki_whiteday_ssr.png"]}); break;
        case 35: message.channel.send ({files:["./images/yuki_sweets_ssr.png"]}); break;
        case 36: message.channel.send ({files:["./images/yuki_esperanza_ssr.png"]}); break;
        case 37: message.channel.send ({files:["./images/yuki_lullaby.png"]}); break;
        case 38: message.channel.send ({files:["./images/yuki_gardentea_ssr.png"]}); break;
      }
    }
  
     mention = message.mentions.users.first();

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
//        return message.channel.send ("Message sent.");
      }
  
  if (msg.startsWith ("hey gays")) {
    return message.channel.send("And Gaku.");
  }
  
   if(msg.startsWith (prefix + "order")) {
     number = 2;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("We're fresh out of Yuki (lol)"); break;
       case 2: message.channel.send ("I was bought out by a certain Mr. Satsujin, you see."); break;
    }
   }
  
   if(msg.startsWith (prefix + "quote")) {
     number = 5;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("You remind me of a puppy, just like Momo. No, maybe you're more like a tiny baby rabit?"); break;
       case 2: message.channel.send ("I'm a vegetarian. Not for spirtual reasons, just because I prefer that sort of food."); break;
       case 3: message.channel.send ("If I have the time to eat breakfast, Id rather spend it sleeping..."); break;
       case 4: message.channel.send ("I've used the \"relative's funeral\" excuse so many times over my school years that I don't remember how much of my family is supposed to be dead by now. I need to come up with something else. \nMaybe I'll go with some kind of illness."); break;
       case 5: message.channel.send ("What were we talking about again? How great I am at cooking?"); break;
    }
  }
   
  if (msg.startsWith ("i love you yuki")) {
      let modRole = message.guild.roles.find("name","YUKILOVER69.");
      if(message.member.roles.has(modRole.id)) {
        message.channel.send("I love you too,  Satsujin. I don't know how to put into words how happy I am with you here.");
      } else {
        message.channel.send("I see. I appreciate the sentiment, however my affection lies elsewhere...");
      }
  }
    
  if (msg.startsWith ("yuppi")) {
    return message.channel.send("Gakkyun.");
  }
    
  if (msg.startsWith ("i can't believe ryo is dead")) {
    return message.channel.send("Finally.");
  }

  if (msg.startsWith ("i'm gonna munch")) {
    return message.channel.send("I'm gonna crunch.");
  }

  if (msg.startsWith ("yuki if you're out there")) {
    return message.channel.send("I'm right here.");
  }

  if (msg.startsWith ("good morning yuki")) {
    return message.channel.send("Good morning. I wish I could sleep for 8 hours.");
  }

  if (msg.startsWith ("good night yuki")) {
    return message.channel.send("Good kids should head to sleep early.");
  }
  
});

bot.on("message", async message => {
  if(message.author.box) return;
  if(message.channel.type === "dm") return;

  let prefix = 'y!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

    if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#00ff67")
    .addField("Commands:","**y!yuki** *<question>* | Ask him anything. \n**y!send** *<@user> <message>* | Send a DM to the mentioned user\n**y!scout** | Solo Yolo \n**y!quote** | Random quote\n**y!say** *<message>* | Have the bot say anything you want\n**y!help** | Displays this help message")
    .addField("Basic y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank *(ex: ss!rank)* || watchout")
    .addField("Command phrases:", "I can't believe Ryo is dead || I'm gonna munch|| I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Hey gays")

    message.channel.send(helpembed);
  }
  
  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

  return message. channel.send(botembed);
  }

  if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}
  
  if(cmd === `${prefix}watchout`){
  return message.channel.send ("You better watch out.", {files:["./images/youbetterwatchout.png"]});
  }  
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    return message.channel.send("Babe, that me leaf 🍃");
  }

  if(cmd === `${prefix}ryo`){
    return message.channel.send("Oh fuck. Bastard spotted.");
  }

  if(cmd === `${prefix}crank`){
    return message.channel.send("We're going to have a secret intensive training session together.");
  }
  
  if(cmd === `${prefix}srank`){
    return message.channel.send("I’m going to imitate Momo. Yay~! You did it!");
  }
  
  if(cmd === `${prefix}arank`){
    return message.channel.send("Next time, I expect you to try harder.");
  }
  
    if(cmd === `${prefix}brank`){
    return message.channel.send("What’s wrong, that you can’t do something like this?");
  }
  
   if(cmd === `${prefix}ssrank`){
    return message.channel.send("As expected. I’m also pleased.");
  }
});

bot.login(process.env.token);
