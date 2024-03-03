const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.loadFromPath('./config.json');

const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
});

const input = {
    Engine: 'standard',
    LanguageCode: 'hi-IN',
    OutputFormat: 'mp3',
    Text: " रोहन एक अच्छा व्यक्ति है। ",
    TextType: "text",
    VoiceId: "Aditi"
};

Polly.synthesizeSpeech(input, (err, data) => {
    if (err) {
        console.error(err.message);
        return;
    }
    if (data.AudioStream) {
        fs.writeFile('test.mp3', data.AudioStream, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Audio file saved as test.mp3');
        });
    }
});
