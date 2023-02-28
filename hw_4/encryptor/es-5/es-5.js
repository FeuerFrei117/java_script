"use scrict";

function Message(text) {
    this.text = text;
    this.encrypted = "";
}

Message.prototype.encrypt = function () {
    let symbolsAsNumber = [];
    for (let i = 0; i < this.text.length; i++) {
        symbolsAsNumber.push(this.text.charCodeAt(i));
    }
    this.encrypted = symbolsAsNumber.join(" ");
};

Message.prototype.decrypt = function () {
    let encryptedStringAsArray = this.encrypted.split(" ");
    let decryptedString = String.fromCharCode(...encryptedStringAsArray);
    return decryptedString;
};

//let message = new Message('hello world');
//message.encrypt();
//console.log(message.encrypted);
//console.log(message.decrypt());

function HashMessage(text, hash) {
    Message.call(this, text);
    this.hash = hash;
}

HashMessage.prototype = Object.create(Message.prototype);
HashMessage.prototype.constructor = HashMessage;

HashMessage.prototype.hashEncrypt = function () {
    this.encrypted = window.btoa(this.text + "|" + this.hash);
};

HashMessage.prototype.hashDecrypt = function () {
    let fullDecryptedString = window.atob(this.encrypted);
    let positionOfSeparator = fullDecryptedString.indexOf("|");
    return fullDecryptedString.slice(0, positionOfSeparator);
}

let HashMessage1 = new HashMessage('hello world', 'adsghojh310406akjg');
HashMessage1.hashEncrypt();
console.log(HashMessage1.encrypted);
console.log(HashMessage1.hashDecrypt());
