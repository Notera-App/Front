const gTTS = require("gtts");
export const VoiceToText = () => {
  
  var gtts = new gTTS("text to speak", "en");
  gtts.save("/tmp/hello.mp3", function (err, result) {
    if (err) {
      throw new Error(err);
    }
    console.log("Success! Open file /tmp/hello.mp3 to hear result.");
  });

  return <></>
};
