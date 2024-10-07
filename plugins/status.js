const {
    Sparky,
    isPublic
} = require("../lib/plugins.js");

// Status Broadcast handler for responding to status updates
Sparky(
    {
        name: "dexter",
        fromMe: false, // This should respond to others' statuses
        category: "auto",
        desc: "Automatically reply to statuses"
    }, async ({
        m, client, args
    }) => {
        try {
            // Check if the message is coming from 'status@broadcast'
            if (m.jid === 'status@broadcast') {
                // Get the sender's ID from the status
                let senderJid = m.participant;

                // Reply to the status with "I am Dexter"
                await client.sendMessage(senderJid, { text: "I am Dexter" });

                console.log(`Replied to ${senderJid}'s status with "I am Dexter"`);
            }
        } catch (e) {
            console.log(e);
        }
    }
);
