let game = {

    run() {
        while (true) {
            let copy_questions = JSON.parse(JSON.stringify(questions));
            let mixed_questions = copy_questions.sort(() => Math.random() - 0.5);
            for (j of mixed_questions) {
                let right_answer = j[1][0];
                let mixed_answer = j[1].sort(() => Math.random() - 0.5);

                let mixed_answer_string = `${j[0]}?\n\n`;
                for (let i = 0; i < mixed_answer.length; i++) {
                    mixed_answer_string += `${i}) ${mixed_answer[i]}\n`;
                }

                let input_user = parseInt(prompt(`${mixed_answer_string}\nВведите номер правильного ответа:`));

                if (mixed_answer[input_user] == undefined) {
                    break;
                }

                if (right_answer == mixed_answer[input_user]) {
                    alert('Вы дали правильный ответ!');
                    player.right();
                } else {
                    alert('Вы дали НЕ правильный ответ.')
                }
            }

            let restart = confirm(`Всего правильных ответов: ${player.correct_answers}\nВсего вопросов: ${questions.length}\nДля того, чтобы начать сначала нажмине "ОК"\nДля выхода нажмите "Отмена"`);

            if (!restart) {
                console.log(`Всего правильных ответов: ${player.correct_answers}\nВсего вопросов: ${questions.length}\nДля того, чтобы начать сначала нажмине "ОК"\nДля выхода нажмите "Отмена"`);
                break;
            }

            player.correct_answers = 0;
        }
    },

    // Этот метод выполняется при открытии страницы
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером!"');
        console.log(`Вам будут заданы вопросы с несколькими вариантами ответов.\nЕсли ответите на все, то вы получите миллион наших поздравлений!`);
        console.log("Чтобы начать игру, наберите game.run() и нажмите Enter");
    }
};

game.init();