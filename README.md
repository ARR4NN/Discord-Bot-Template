## Welcome to my discord bot template
![background](https://i.imgur.com/iMf3JVO.png)
Wrote in [Discord.js V13](https://discordjs.guide), contains slash commands, select menus, and more.

__**Default Commands**__  

![coolcommand](https://i.imgur.com/ogJIU0d.png)    
![button](https://i.imgur.com/Efk6S8D.png)    
![select](https://i.imgur.com/mRS8jyg.png)    


__How to use__
1) Click `Use this template`.
2) Give your new repo a name.
3) Click the `Code` button and copy link. Should look like `https://github.com/YOURNAME/REPONAME.git`.
4) Open a new folder on your pc, in the terminal run `git pull https://github.com/YOURNAME/REPONAME.git .`, don't for the `.` at the end of the pull to pull the code correctly.
5) Get coding!

__Getting started__
1) Rename `.env.example` to `.env`
2) Add your:
- Bot token [Link](https://discord.com/developers)
- Client Id 
- Guild Id
- Status Type (Status Types =  PLAYING , WATCHING , STREAMING , LISTENING , COMPETING , CUSTOM)
- Status

```yml
How to create a bot: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
```  
__**Register Slash Commands**__
> Ensure you have set the clientId and guildId in the config!
1) Run `node reg.js`

__**Hosting the bot**__
1) Rename `config.json.example` to `config.json`
```json
{
    "TOKEN":"Your Bot Token",
    "clientId":"Bot Client ID",
    "guildId":"Guild ID for slash commands",
    "statusType":"PLAYING",
    "status":"Hello"
}
```
2) Add your:
- Bot token [Link](https://discord.com/developers)
- Client Id 
- Guild Id
- Status Type (Status Types =  PLAYING , WATCHING , STREAMING , LISTENING , COMPETING , CUSTOM)
- Status
3) Upload the config or input the values on your hosting.

> WARNING never push any config files (.env , config.json) to any code storage systems example github. Even if the repo is private! 

Need any help let me know **ARR4NN#0340**
