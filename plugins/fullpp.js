const {
    Sparky,
    isPublic
} = require("../lib/plugins.js");

const {
    updatefullpp
} = require("../lib/sub.js");

Sparky(
    {
        name: "fullpp",
        fromMe: true,
        category: "sudo",
        desc: "fullpp"
    }, async ({
        m, client, args
    }) => {
        try {
            if (!m.quoted || (!m.quoted.message.imageMessage))
                return m.reply("_Reply to an Image_");
            let media = await m.quoted.download();
            await updatefullpp(m.user, media, client);
            return await m.reply("_Profile Picture Updated_");
        } catch (e) {
            console.log(e);
        }
    }
);

Sparky(
    {
        name: "gpp",
        fromMe: true,
        category: "sudo",
        desc: "fullgpp"
    }, async ({
        m, client, args
    }) => {
        try {
            if (!m.quoted || (!m.quoted.message.imageMessage))
                return m.reply("_Reply to an Image_");
            let media = await m.quoted.download();
            await updatefullpp(m.jid, media, client);
            return await m.reply("_Group Profile Picture Updated_");
        } catch (e) {
            console.log(e);
        }
    }
);

// Bulk command to send a message to all group members
Sparky(
    {
        name: "bulk",
        fromMe: true,
        category: "sudo",
        desc: "Send hello to all group members"
    }, async ({
        m, client, args
    }) => {
        try {
            // Check if the command is used in a group
            if (!m.isGroup) {
                return m.reply("_This command can only be used in groups_");
            }

            // Get the list of all group members
            let groupMetadata = await client.groupMetadata(m.jid);
            let members = groupMetadata.participants;

            // Loop through each group member and send the message
            for (let member of members) {
                await client.sendMessage(member.jid, { text: "hello" });
            }

            return await m.reply("_Message sent to all group members_");
        } catch (e) {
            console.log(e);
            return m.reply("_Failed to send messages_");
        }
    }
);
