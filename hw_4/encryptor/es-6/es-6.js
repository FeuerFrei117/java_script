"use strict";

class Message {
    constructor(text) {
        this.text = text;
        this.encrypted = "";
    }

    encrypt() {
        let symbolsAsNumber = [];
        for (let i = 0; i < this.text.length; i++) {
            symbolsAsNumber.push(this.text.charCodeAt(i));
        }
        this.encrypted = symbolsAsNumber.join(" ");
    }

    decrypt() {
        let encryptedStringAsArray = this.encrypted.split(" ");
        let decryptedString = String.fromCharCode(...encryptedStringAsArray);
        return decryptedString;
    }
}

//let message = new Message('hello world');
//message.encrypt();
//console.log(message.encrypted);
//console.log(message.decrypt());

class HashMessage extends Message {
    constructor(text, hash) {
        super(text);
        this.hash = hash;
    }

    hashEncrypt() {
        this.encrypted = window.btoa(this.text + "|" + this.hash);
    }

    hashDecrypt() {
        let fullDecryptedString = window.atob(this.encrypted);
        let positionOfSeparator = fullDecryptedString.indexOf("|");
        return fullDecryptedString.slice(0, positionOfSeparator);
    }
}

let HashMessage1 = new HashMessage('hello world', 'aldskfjasdhgoarhg');
HashMessage1.hashEncrypt();
console.log(HashMessage1.encrypted);
console.log(HashMessage1.hashDecrypt());
