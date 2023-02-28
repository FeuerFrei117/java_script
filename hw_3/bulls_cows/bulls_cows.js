'use strict';

function start_game() {
    let riddle = get_random_number_as_array();
    while (true) {
        let answer = prompt("Угадайте 4-х значное число").split("");
        let result = get_bulls_and_cows_count(riddle, answer);

        console.log(`Ваш ответ: ${answer},\nбыков: ${result.bulls_count},\nкоров: ${result.cows_count}`);

        if (riddle.toString() === answer.toString()) {
            console.log("Вы победили");
            break;
        }
    }
}

function get_random_number_as_array() {
    let generated = String(Math.random() * 10000000000000000);
    let result = [];
    for (let value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length == 4) {
            return result;
        }
    }
}

function get_bulls_and_cows_count(riddle, answer) {
    let bulls_count = get_bulls_count(riddle, answer);
    let cows_count = get_cows_count(riddle, answer);
    return {
        "bulls_count": bulls_count,
        "cows_count": cows_count - bulls_count,
    };
}

function get_bulls_count(riddle, answer) {
    let count = 0;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] == answer[i]) {
            count++;
        }
    }
    return count;
}

function get_cows_count(riddle, answer) {
    let count = 0;
    for (let value of riddle) {
        if (answer.includes(value)) {
            count++;
        }
    }
    return count;
}

start_game();