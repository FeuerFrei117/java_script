/**
 * Объект игрока, здесь будут находится правильные ответы игрока
 */
const player = {
    correct_answers: 0,

    right() {
        this.correct_answers += 1;
    },
};