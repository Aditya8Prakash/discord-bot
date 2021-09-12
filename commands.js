const COMMANDS = [
    {
        keyword:'!wheredoyoulive',
        function: message => message.reply('I am hosted in INDIA 🌍 🌎 🌏')
    },
    {
        keyword:'!whoareyou',
        function: message => message.reply('I am '+message.channel.guild.name+' and I am a **:regional_indicator_b: :regional_indicator_o: :regional_indicator_t:**')
    },
    {
        keyword:'!totalmembers',
        function: message => message.reply('There are total **'+message.channel.guild.memberCount+'** Members in this Server 📝')
    },
    {
        keyword:'!whatismyname',
        function: message => message.reply('Your Name is **'+message.author.username+'**')
    },
    {
        keyword:'!list',
        function: message => message.channel.send('> <@'+message.author+'>\n > **Here are list of few Commands 🍳 🙃**\n > To Know Where do I live : **`!WhereDoYouLive`**\n > To Know Who I am : **`!WhoAreYou`**\n > To Open Command List : **`!List`**\n > To Know total number of members : **`!TotalMembers`**\n > To Repeat Your Text : **`!Repeat <Text>`**')
    },
    {
        keyword:'!join',
        function: message => message.member.voice.channel?message.member.voice.channel.join():message.reply('You need to join a voice channel first!')
    },
    {
        keyword:'!leave',
        function: message => message.member.voice.channel?message.member.voice.channel.leave():message.reply('You need to join a voice channel first!')
    }
]
module.exports = {COMMANDS};