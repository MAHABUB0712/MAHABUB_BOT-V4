module.exports.config = {
    name: "animvid",
    version: "1.0.1",
    permssion: 0,
    prefix: true,
    credits: "Joshua Sy",
    description: "",
    category: "video",
    cooldowns: 4,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.mp4"),event.messageID);
	 return request(encodeURI(`https://fatiharridho.herokuapp.com/api/anime/storyanime`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.mp4')).on('close',() => callback());     
}}
