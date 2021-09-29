import React from "react";

let synth = window.speechSynthesis;

let voicePitch = 1;
let voiceSpeed = 0.;

let myText = 'hej hej nu 1 2 3';


class Voice extends React.Component {
  speak() {
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    };

    let utterThis = new SpeechSynthesisUtterance(myText);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

    utterThis.lang = 'sv-SE';
    utterThis.pitch = voicePitch;
    utterThis.rate = voiceSpeed;
    
    if (myText !== '') { 
    synth.speak(utterThis);
    }
    return true
  }
};

export default new Voice();
