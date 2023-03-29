'use strict';

const noMessagesEl = document.querySelector('.noMessages');
const messagesEl = document.querySelector('.messages');
const textareaEl = document.querySelector('textarea');
const nameInputEl = document.querySelector('input');
const errorTextareaEl = document.querySelector('.errorTextarea');
const errorInputEl = document.querySelector('.errorInput');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');

const messageElClassName = 'message';

sendBtn.addEventListener('click', function () {
    if (nameInputEl.value === "") {
        errorInputEl.textContent = "Имя не может быть пустым";
        return;
    } else {
        errorInputEl.textContent = "";
    }

    if (textareaEl.value === "") {
        errorTextareaEl.textContent = "Сообщение не может быть пустым";
        return;
    } else {
        errorTextareaEl.textContent = "";
    }

    hideNoMessagesText();

    const messageMarkup = getMessageMarkup(nameInputEl.value, getTime(), textareaEl.value);
    messagesEl.insertAdjacentHTML('beforeend', messageMarkup);
    textareaEl.value = "";
});

function getMessageMarkup(author, time, text) {
    return `<div class="${messageElClassName}">
                <div>Автор: ${author}</div>
                <div>Время: ${time}</div>
                <div>Сообщение: ${text}</div>
            </div>`;
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

function hideNoMessagesText() {
    noMessagesEl.style.display = 'none';
}

function showNoMessagesText() {
    noMessagesEl.style.display = 'block';
}

clearBtn.addEventListener('click', function () {
    showNoMessagesText();
    nameInputEl.value = "";
    textareaEl.value = "";
    const messagesElems = document.querySelectorAll("." + messageElClassName);
    messagesElems.forEach(function (message) {
        message.remove();
    });
});