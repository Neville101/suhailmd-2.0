const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_13_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3b0w3VlRKcW9wazl5T0YxL05uZnVrWGI0SjRjblFEMDlyTURIVVd1YUNNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlWUozNGlMR1QxV0NjR2Q4eS1NZ3VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiN2Y3NDVlLWE1YTMtNDU4OC05NTdiLTE4OTQ0ODViODNmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAyOCxcbiAgICAgIDgsXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDIsXG4gICAgICAyMzYsXG4gICAgICAxNzEsXG4gICAgICAyMTksXG4gICAgICAxMzAsXG4gICAgICAxNixcbiAgICAgIDEwMixcbiAgICAgIDMsXG4gICAgICAxNjcsXG4gICAgICAzOSxcbiAgICAgIDI0NyxcbiAgICAgIDEwOCxcbiAgICAgIDE4MCxcbiAgICAgIDI0NSxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA2MixcbiAgICAgIDEyNCxcbiAgICAgIDkwLFxuICAgICAgMjQxLFxuICAgICAgMjEwLFxuICAgICAgMTEzLFxuICAgICAgMzMsXG4gICAgICA2MSxcbiAgICAgIDY5LFxuICAgICAgNjMsXG4gICAgICA0MixcbiAgICAgIDEzMCxcbiAgICAgIDk2LFxuICAgICAgMTExLFxuICAgICAgNDQsXG4gICAgICAxMzgsXG4gICAgICAxMTAsXG4gICAgICA3OCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJYQVM1VFg3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE4Nzg4NjE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZXZpbGxlXCIsXG4gICAgXCJsaWRcIjogXCI0MDE4ODM2MTM0MzEyMDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLOGg0OEhFUGZvdmJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMVVVdkFsbk9HMHZGUkV1Szcxb2tDbVdxcWpubDhGZHVPQmhjRGQ2THowdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZS2VJdFdtYk1XVENwVEJVcGIxZ3RjTkxPNGxwVDZVYTJYOEVkZ1dwTTZQZmQzTTNuTm9TL25FSG9YRStWa2NRMWpKMUZSUGM0OGR2SUh5TzZMejNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBbGFjcTF3UzZCZnA0SFRMWE1tL1VhNjVQSlN6a0thUGY2YnYvUkUwMlhJMFQvVjUxUXZEeVhRaWdLWkg5RnpNTXpBcjh3VVlYN0xqZjltTUJOMXlpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE4Nzg4NjE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzI2MDQxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
