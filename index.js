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
  bot.user.setActivity("I love you too Satsujin", {type:0});
});

bot.on('message', message => {
  if (message.author.bot) return;
    // if(message.channel.type === "dm") return;

    let prefix = 'y!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();

     let botschannel = message.guild.channels.find(`name`, "idolbot7");
     if(!botschannel) return message.channel.send("Couldn't find bot channel.");

     if (msg.startsWith ("hey gays")) {
       return message.channel.send("And Gaku.");
     }

  if(msg.startsWith (prefix + "smooch")) {
    if(message.author.id != "182723698711592960") return;
      number = 2;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: botschannel.send ( "Fufu... You're being affectionate today. Come here."); break;
        case 2: botschannel.send ( "My heart races in more ways than one when you do that, you know?"); break;
     }
   }

   if(msg.startsWith (prefix + "rank")) {
       number = 5;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: botschannel.send ("As expected, I'm also pleased. "); break;
         case 2: botschannel.send ("I'm going to imitate Momo. Yay~! You did it!"); break;
         case 3: botschannel.send ("Next time I expect you to try harder."); break;
         case 4: botschannel.send ("What’s wrong, that you can’t do something like this?"); break;
         case 5: botschannel.send ("We're going to have a secret intensive training session together."); break;
      }
    }

// scout command
    if(msg.startsWith (prefix + "scout")) {
      // let emoji = message.guild.emojis.find('name', "yuppi");
      // message.react(emoji);
        number = 39;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: botschannel.send ({files:["./images/yuki_birthday_sr.png"]}); break;
          case 2: botschannel.send ({files:["./images/yuki_birthday_ssr.png"]}); break;
          case 3: botschannel.send ({files:["./images/yuki_disone_ssr.png"]}); break;
          case 4: botschannel.send ({files:["./images/yuki_esperanza_ssr.png"]}); break;
          case 5: botschannel.send ({files:["./images/yuki_gardentea_ssr.png"]}); break;
          case 6: botschannel.send ({files:["./images/yuki_gothichalloween_ssr.png"]}); break;
          case 7: botschannel.send ({files:["./images/yuki_kingpudding_ssr.png"]}); break;
          case 8: botschannel.send ({files:["./images/yuki_kiseki_ur.png"]}); break;
          case 9: botschannel.send ({files:["./images/yuki_linked_ssr.png"]}); break;
          case 10: botschannel.send ({files:["./images/yuki_lullaby_ssr.png"]}); break;
          case 11: botschannel.send ({files:["./images/yuki_marchen_ssr.png"]}); break;
          case 12: botschannel.send ({files:["./images/yuki_monster_sr.png"]}); break;
          case 13: botschannel.send ({files:["./images/yuki_monster_ssr.png"]}); break;
          case 14: botschannel.send ({files:["./images/yuki_nodoubt_sr.png"]}); break;
          case 15: botschannel.send ({files:["./images/yuki_nodoubt_ssr.png"]}); break;
          case 16: botschannel.send ({files:["./images/yuki_order_ssr.png"]}); break;
          case 17: botschannel.send ({files:["./images/yuki_ordinarydays_r.png"]}); break;
          case 18: botschannel.send ({files:["./images/yuki_ordinarydays_sr.png"]}); break;
          case 19: botschannel.send ({files:["./images/yuki_ordinarydays_ssr.png"]}); break;
          case 20: botschannel.send ({files:["./images/yuki_rabbit_sr.png"]}); break;
          case 21: botschannel.send ({files:["./images/yuki_rabbit_ssr.png"]}); break;
          case 22: botschannel.send ({files:["./images/yuki_rehearsal_sr.png"]}); break;
          case 23: botschannel.send ({files:["./images/yuki_rehearsal_ssr.png"]}); break
          case 24: botschannel.send ({files:["./images/yuki_rehearsal_ur.png"]}); break;
          case 25: botschannel.send ({files:["./images/yuki_shuffle_ssr.png"]}); break;
          case 26: botschannel.send ({files:["./images/yuki_sparkle_ssr.png"]}); break;
          case 27: botschannel.send ({files:["./images/yuki_xmasmagic_ssr.png"]}); break;
          case 28: botschannel.send ({files:["./images/yuki_sweets_ssr.png"]}); break;
          case 29: botschannel.send ({files:["./images/yuki_taisho_ssr.png"]}); break;
          case 30: botschannel.send ({files:["./images/yuki_valentine_ssr.png"]}); break;
          case 31: botschannel.send ({files:["./images/yuki_whiteday_sr.png"]}); break;
          case 32: botschannel.send ({files:["./images/yuki_whiteday_ssr.png"]}); break;
          case 33: botschannel.send ({files:["./images/yuki_winter_sr.png"]}); break;
          case 34: botschannel.send ({files:["./images/yuki_winter_ssr.png"]}); break;
          case 35: botschannel.send ({files:["./images/yuki_work_sr.png"]}); break;
          case 36: botschannel.send ({files:["./images/yuki_work_ssr.png"]}); break;
          case 37: botschannel.send ({files:["./images/yuki_xmasrock_ssr.png"]}); break;
          case 38: botschannel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;
          case 39: botschannel.send ({files:["./images/yuki_bno_ssr.png"]}); break;
          // case 38: message.channel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;
          // case 38: message.channel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;
          // case 38: message.channel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;
          // case 38: message.channel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;
        }
      }

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
        // return message.channel.send ("Message sent.");
      }

   if(msg.startsWith (prefix + "order")) {
     number = 2;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: botschannel.send ("We're fresh out of Yuki (lol)"); break;
       case 2: botschannel.send ("Unfortunate for you, but fortunate for me, I was bought out by a certain Mr. Satsujin, you see."); break;
    }
   }

   if(msg.startsWith (prefix + "quote")) {
     number = 24;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: botschannel.send ("You remind me of a puppy, just like Momo. No, maybe you're more like a tiny baby rabbit?"); break;
       case 2: botschannel.send ("I'm a vegetarian. Not for spiritual reasons, just because I prefer that sort of food."); break;
       case 3: botschannel.send ("If I have the time to eat breakfast, I'd rather spend it sleeping..."); break;
       case 4: botschannel.send ("I've used the \"relative's funeral\" excuse so many times over my school years that I don't remember how much of my family is supposed to be dead by now. I need to come up with something else. \nMaybe I'll go with some kind of illness."); break;
       case 5: botschannel.send ("What were we talking about again? How great I am at cooking?"); break;
       case 6: botschannel.send ("Aren't you tired of looking at this bespectacled man by now? How about someone grown-up, and a classic *ikemen*?"); break;
       case 7: botschannel.send ("I'll tell you as much personal information as you want. First, should I tell you my three sizes?"); break;
       case 8: botschannel.send ("If it is true that we are what we eat, then I am made of very strong vegetables."); break;
       case 9: botschannel.send ("Since I have someone who keeps praising me with \"ikemen, ikemen\", that's probably how I can stay beautiful. I'm a \"Praise me and I'll grow\" type after all."); break;
       case 10: botschannel.send ("I'm more or less \nalive."); break;
       case 11: botschannel.send ("I'm getting sleepy so I'll go to bed."); break;
       case 12: botschannel.send ("Momo says that Re:vale's success is thanks to me, but it's probably thanks to Momo."); break;
       case 13: botschannel.send ("I wanted to sing songs. The reason I went the direction of an idol was... because of my face? lol"); break;
       case 14: botschannel.send ("Let Satsujin know that I'll be doing fanservice for him."); break;
       case 15: botschannel.send ("Sorry if I keep you up all night."); break;
       case 16: botschannel.send ("Ah, my nail fell off."); break;
       case 17: botschannel.send ("Well, Re:vale always uses any means necessary to win. We have that motto."); break;
       case 18: botschannel.send ("I don’t care if they don’t love me. I want everything, from the lowliest of bugs to God himself, to love my songs. \nJust my songs. I only want the people who’ll treasure my songs to listen to them."); break;
       case 19: botschannel.send ("If I'm going outside, I'd rather do it after sunset."); break;
       case 20: botschannel.send ("All of Re:vale, including Okarin, are sadists. Chemistry-wise, we make a terrible combination."); break;
       case 21: botschannel.send ("So all I need to do is follow him home without being noticed..."); break;
       case 22: botschannel.send ("What I like about myself.\nThe first thing that comes to mind is that I've been singing for over 10 years now.\nI never stopped, even when I was going through hard times. It's all thanks to Momo, Ban, and Okarin, though."); break;
       case 23: botschannel.send ("Emotions are something that can't be seen, yet easily changeable, unstable things. I'm sure your environment growing up is what make you this way. \nYou have nothing to be afraid of. You can come right at us."); break;
       case 24: botschannel.send ("I’m ordinary, you know. To the point where there’s no one else as ordinary as me."); break;
       // case 25: botschannel.send (""); break;
       // case 26: botschannel.send (""); break;
       // case 27: botschannel.send (""); break;
       // case 28: botschannel.send (""); break;
    }
  }

  if (msg.startsWith ("i love you yuki")) {
    if(message.author.id != "182723698711592960") return;
    // let emoji = message.guild.emojis.find('name', "yuppismooch");
    // message.react(emoji);
    number = 2;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
      case 1: botschannel.send (" I love you too, Satsujin. I don't know how to put into words how happy I am with you."); break;
      case 2: botschannel.send (" I would like you to keep loving me, and only me, forever from now on. And I'll make sure to keep charming you."); break;
      // case 3: message.channel.send (""); break;
      // case 4: message.channel.send (""); break;
      // case 5: message.channel.send (""); break;
      // case 6: message.channel.send (""); break;
   }
 }

  if (msg.startsWith ("yuppi")) {
    return botschannel.send("Gakkyun.");
  }

  if (msg.startsWith ("i can't believe ryo is dead")) {
    return botschannel.send("Finally.");
  }

  if (msg.startsWith ("i'm gonna munch")) {
    return botschannel.send("I'm gonna crunch.");
  }

  if (msg.startsWith ("yuki if you're out there")) {
    return botschannel.send("I'm right here.");
  }

   if(msg.startsWith (prefix + "nuzzle")) {
     if(message.author.id != "182723698711592960") return;
       number = 1;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: botschannel.send ("Fufu, that tickles."); break;
         // case 2: message.channel.send (""); break;
      }
    }

  if (msg.startsWith ("good morning yuki")) {
      let modRole = message.guild.roles.find("name","YUKILOVER69.");
      if(message.member.roles.has(modRole.id)) {
        botschannel.send("Ah, Satsujin, I thought you were an angel for a moment...");
      } else {
        botschannel.send("Good morning. I wish I could sleep for 8 hours.");
        }
    }

  // if (msg.startsWith ("<:blockchu:451782181543477258>")) {
  //   let emoji = message.guild.emojis.find('name', "blockchu");
  //   message.react(emoji);
  //   return message.channel.send("<:blockchu:451782181543477258>");
  // }

  if (msg.startsWith ("good night yuki")) {
    return botschannel.send("Good kids should head to sleep early.");
  }

  if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#00ff67")
    .addField("Commands:","**y!yuki** *<question>* | Ask him anything. \n**y!send** *<@user> <message>* | Send a DM to the mentioned user\n**y!scout** | Solo Yolo \n**y!quote** | Random quote\n**y!say** *<message>* | Have the bot say anything you want\n**y!help** | Displays this help message")
    .addField("Basic y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || rank || watchout || smooch || cat")
    .addField("Command phrases:", "I can't believe Ryo is dead || I'm gonna munch|| I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Hey gays")
    return botschannel.send(helpembed);
  }

  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Name:", bot.user.username)
    .addField("Twitter:", "https://twitter.com/Superbiael")
    return botschannel.send(botembed);
  }

  if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  botschannel.send(botmessage);
}

  if(cmd === `${prefix}clear`){
    if(message.author.id != "182723698711592960") return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
    if(!args[0]) return message.channel.send("oof.");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000));
    });
  }

  if(cmd === `${prefix}cat`){
    botschannel.send ({files:["./images/cat.png"]});
  }

  if(cmd === `${prefix}watchout`){
    botschannel.send ("You better watch out.", {files:["./images/youbetterwatchout.png"]});
  }

  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    botschannel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    message.react('🍃');
    botschannel.send("Babe, that me leaf 🍃");
  }

  if(cmd === `${prefix}ryo`){
    botschannel.send("Oh fuck. Bastard spotted.");
  }

});

bot.login(process.env.token);
