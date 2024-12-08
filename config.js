//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/2348109547767 , https://wa.me/2348109547767";
global.sudo = process.env.SUDO || "2348109547767";
global.owner = process.env.OWNER_NUMBER || "2348109547767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JsS1NRSmp1R3hmSlBhQVR2M3AxQU5aZUl3SGUvbkVvLzNBOHNpTGQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlYwWmF0Smgybm9hSEF5OVlYaW5NT3J5c0lLUjBMaXoyYkloUXQreFAycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRHI2QW5BN0pZMkdGeXRLVEc3MmNNNGxJaHM0cHBpNmY0UENGMUdqbDFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MHZ4Z3hlakluNFhmNHUvSGMwTnk0Um5yZ1hhT1labDRqUERLUVVEYTJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNci9zd2ZWeVZYYkxOSkd2ditCK2ZBSkUyZ2EzeW40dFFsazZYRUJXRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5nNk1LTkEwbUtnNXRaMTgycm5TU3ZuMWNGWGVPenZ0NlNQdTFhbEdJaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1ya2twcXpJTlhnaGJ3b2NxNWl5Y01IaEpqKzhqWmlhSkVucEJQdVlFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2Flc2xHTXZROElkNmpXY3pBZU9uWFRrM2paVVhnT0FMQ2xOYVdMT2toUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRhWHd2SkppN0xjRzRtZm5DeVphdWVNNGduZE9YM3pobW9rcm05K0NKWmJMOFFPTC9DZm4zdDI1dFRxQkhlUVI2NXZ5R3h5OTdTV0ROUHptcVhieURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJlS2VldFlEZFhtUUVFQmNKQjRLL1VOWTNDeS82T0QrMWVud1RVcUVBb01FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvOW5MRWFUVVJmR2dOZk5DMl9zOVFBIiwicGhvbmVJZCI6ImM4MTBkYWMyLTYwYzItNDk5NS04N2M4LWZmMDVmZmYwNDA1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUTQ4U1lpbExiWXhpNDRkM09MUGoyUCtCR1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlFQZlZNZXpaL3NzaVRReS9YdXA0NjI0ZFF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGQ0hXNEY5IiwibWUiOnsiaWQiOiIyMzQ4MTA5NTQ3NzY3OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Isqcc+OFpOG0gOG0mOG0h3jjhaTogZYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012KzhJVUNFTlc0MXJvR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlPWTRlUDAxUEx4WlpWaWxjd3pyZTRKdG5pUTl0K1ZsTk1qOVByeVlDamM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlaODdWMnFValN1MGUvRDJPWEk0VXE0UGZNa3pXeG9qMWNrN3JSWDNkSVRCcDkvZnh2bTc3L2FtNWd6R3YyZ1Q5N3ZIRFozR3FYUm1oaWVSR3ZxSENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLV0wxdm9RZVZhTUV3Y2pvM1hTc2t6T05yVUV6T243MEw4TGQ5Vy9zQ2trWXhNTmdQSmRGSGJsQ2RjUzZPVWRrUjY3ZURQQlE0am0xV2pDcVFrSm9DUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDk1NDc3Njc6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlRtT0hqOU5UeThXV1ZZcFhNTTYzdUNiWjRrUGJmbFpUVEkvVDY4bUFvMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY2Mzg0MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeEUifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ʜsㅤᴀᴘᴇxㅤ聖",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Apex",
  botname: process.env.BOT_NAME || "Hsapex ",
  ownername: process.env.OWNER_NAME || "ʜsㅤᴀᴘᴇxㅤ聖",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
