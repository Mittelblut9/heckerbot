// Some mega important code for the bot or some useless json files are hidden, if you wish to see them Click Files then the three dots at the top then "Show Hidden Files"
// I ALSO RECOMMEND ENCRYPTING THE TOKEN FOR A BIT MORE SECURITY
/*
HELLO FELLOW READER
IF YOU PLAN ON HOSTING YOUR BOT ON REPLIT OR OTHER SITES WHICH MAKES IT PUBLIC
USE
SECRETS
OR
ENV
FOR TOKENS AND PRVIATE THINGS (PASSWORDS AND MORE),
ON REPLIT YOU CAN STORE A TOKEN IN A SECRET, 
IF YOU DO IT IN A SECRET ANYBODY WHO FORKS YOUR CODE CANNOT HAVE YOUR SECRET SAVED IN THEIR REPL/REPLIT HOWEVER IF YOU INVITE SOMEBODY TO YOUR REPLIT (EDIT PERMS) THEN THEY CAN VIEW AND EDIT IT (secrets),
MAYBE ENCRYPT THE TOKEN FOR A BIT MORE SECURITY AND UNENCRYPT IT WHEN NEED TO LOGIN INTO CLIENT
IF YOU DO NOT HAVE MUCH KNOWLEDGE ABOUT JAVASCRIPT/NODE.JS THEN I HIGHLY HIGHLY HIGHLY RECOMMEND YOU TO LEARN IT BEFIRE USING THIS CODE FOR A BOT
IF YOU DO NOT HAVE MUCH KNOWLEDGE ABOUT JAVASCRIPT/NODE.JS THEN I HIGHLY HIGHLY HIGHLY RECOMMEND YOU TO LEARN IT BEFIRE USING THIS CODE FOR A BOT
IF YOU DO NOT HAVE MUCH KNOWLEDGE ABOUT JAVASCRIPT/NODE.JS THEN I HIGHLY HIGHLY HIGHLY RECOMMEND YOU TO LEARN IT BEFIRE USING THIS CODE FOR A BOT
IF YOU DO NOT HAVE MUCH KNOWLEDGE ABOUT JAVASCRIPT/NODE.JS THEN I HIGHLY HIGHLY HIGHLY RECOMMEND YOU TO LEARN IT BEFIRE USING THIS CODE FOR A BOT
THE REASON WHY I SAID THIS MUTILPLE TIMES IS SO YOU HAVE A HIGHER CHANCE OF SEEING IT

IF YOU DONT USE SECRETS FOR THIS REPLIT LIKE YOU JUST PASTE IN YOUR TOKEN THEN ANYBODY IN THE WORLD WHO CAN GO ON REPLIT CAN HACK YOUR BOT (AND PLEASE KEEP YOUR BOT TOKEN PRIVATE), IF SOMEBODY HAS IT THEN THEY CAN DO WHATEVER THEY WANT TO YOUR BOT SUCH AS MAKING IT A NUKE BOT AND NUKING ALL THE SERVERS ITS IN OR HUGE DM SCAM/SPAM AND CAN GET YOU BANNED OFF DISCORD)
*/
// AUTO UPDATE/REMOVE VULNERABILITIES
// yea

var key = process.env.DONOTSHARETHIS
const { get } = require("https");
// Create an encryptor:
try {

var encryptor = require('simple-encryptor')(key);
console.log('Checking for vulnerabilities')
const shell = require('shelljs')
 shell.exec('npm audit fix')
console.log('Finished checking for vulnerabilities')
} catch (error) {
   console.log(`Startup ERROR: ${error}`)
}
// code for replit
get(`https://discord.com/api/v10/gateway`, ({ statusCode }) => {
  if (statusCode == 429) {
    console.log(`Startup ERROR: ⚠️⚠️⚠️ RATELIMIT DETECTED, RESTARTING... ⚠️⚠️⚠️`);
    process.kill(1);
  }
})
// TOKEN CHECK
if (!process.env.TOKEN){
  console.log('NO TOKEN FOUND, USE REPLIT SECRETS FOR THIS TO WORK AND IF YOU DONT USE REPLIT SECRETS AND HAVE THIS PROJECT ON REPLIT ITS A MASSIVE SECURITY PROBLEM FOR YOUR BOT') 
  return;
}

// code for replit
setInterval(() => {
get(`https://discord.com/api/v10/gateway`, ({ statusCode }) => {
  if (statusCode == 429) {
    console.log(`⚠️⚠️⚠️ RATELIMIT DETECTED, RESTARTING... ⚠️⚠️⚠️`);
    process.kill(1);
  }
});
}, 10000);
// PLEASE DO NOT DELETE THE LICENSE FILE
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { token: encryptor.decrypt(process.env.TOKEN) }); /*
For public websites such as replit, use secrets/ENV to secure youe bot token
*/

manager.on('shardCreate', shard => console.log(`🇨🇦💫🌟[🔵SHARD🔵]🌟💫🇲🇽 Launched shard 🟢 ${shard.id} 🟢`));

manager.spawn();
// make sure to read README.md file