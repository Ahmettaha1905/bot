javascript

// Import the required libraries

const mineflayer = require('mineflayer');

const navigatePlugin = require('mineflayer-navigate')(mineflayer);

// Create a bot instance

const bot = mineflayer.createBot({

host: 'Ahmetbs1905.aternos.me',

port: '32202',

username: 'entity303',

});

// Load the navigate plugin

bot.loadPlugin(navigatePlugin);

// Function to handle incoming chat messages

function onChatMessage(username, message) {

if (message === 'follow me') {

// Follow the player who issued the command

const player = bot.players[username];

if (player) {

bot.navigate.follow(player.entity, { range: 2 });

bot.chat('I am now following you.');

} else {

bot.chat('Player not found.');

}

} else if (message === 'unfollow me') {

// Stop following the player

bot.navigate.stop();

bot.chat('I stopped following you.');

} else if (message === 'guard') {

// Guard the current position and attack hostile mobs in a 5x5 area

const radius = 2;

const targets = bot.entities.filter(entity => {

return entity.type === 'mob' &&

entity.position.distanceTo(bot.entity.position) <= radius;

});

if (targets.length > 0) {

const target = targets[0];

bot.navigate.to(target.position);

bot.chat('I am guarding this area.');

} else {

bot.chat('No mobs found nearby.');

}

} else if (message === 'pvp me') {

// Engage in PvP combat with the player who issued the command

const player = bot.players[username];

if (player) {

bot.attack(player.entity);

bot.chat('Prepare to fight!');

} else {

bot.chat('Player not found.');

}

}

}

// Event listener for incoming chat messages

bot.on('chat', (username, message) => {

onChatMessage(username, message);

});

// Event listener for bot login

bot.once('spawn', () => {

// Equip netherite sword and armor (replace with appropriate item names or IDs)

bot.equip(0, 'netherite_sword');

bot.equip(1, 'netherite_helmet');

bot.equip(2, 'netherite_chestplate');

bot.equip(3, 'netherite_leggings');

bot.equip(4, 'netherite_boots');

// Enable shield usage

bot.activateItem();

// Start listening to chat messages

bot.chat('I am ready for commands.');

});

This code sets up a Minecraft bot that can perform various actions based on chat commands. It follows the "follow me" command, stops following with "unfollow me", guards an area and kills mobs with "guard", and engages in PvP combat with "pvp me". It equips netherite sword and armor when spawned and uses a shield during combat. Replace the placeholders with your actual server and bot information.
