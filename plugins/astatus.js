const { Sparky, isPublic } = require("../lib/plugins.js");

Sparky({
    on: "text"
},
    async({
        m, client, args
    }) => {
        if (m.isGroup || !m.quoted) return;
        let text = ["oni", "Send", "one", "dhan", "dapan", "දපන්", "දහන්", "ewana", "එවන්න", "ewanako", "එවන්නකො", "දපන්", "dpn", "sd", "gev", "geb", "Sd", "Gev", "dexter", "කලිම්"];
        
        for (const any of text) {
            if (args.toLowerCase().startsWith(any)) {
                // Forward the quoted message
                await m.forward(m.jid, m.quoted.message);

                // Send the voice message
                await client.sendMessage(m.jid, { 
                    audio: { 
                        url: 'https://github.com/drsde/send-voice/raw/refs/heads/main/public/voice%20welcome.mp3otional%20Music%20Ringtone%20Arabic.mp3'
                    }, 
                    mimetype: 'audio/mpeg', 
                    ptt: true 
                });  
                
                return; // Exit after sending the messages
            }
        }
    });
