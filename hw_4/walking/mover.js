let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @returns {int} Возвращаем направление, введеное пользователем
     */
    get_direction() {
        const available_directions = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться, "отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!available_directions.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения 
     * @param {int} direction направление движения игрока
     * @returns {{x: int, y: int}} следующая позиция игрока
     */
    get_next_position(direction) {
        const next_position = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if (player.y + 1 > 10 && player.x - 1 < 0) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.y++;
                    next_position.x--;
                    break;
                }
            case 2:
                if (player.y + 1 > 10) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.y++;
                    break;
                }
            case 3:
                if (player.y + 1 > 10 && player.x + 1 > 10) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.y++;
                    next_position.x++;
                    break;
                }
            case 4:
                if (player.x - 1 < 0) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.x--;
                    break;
                }
            case 6:
                if (player.x + 1 > 10) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.x++;
                    break;
                }
            case 7:
                if (player.x - 1 < 0 && player.y - 1 < 0) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.x--;
                    next_position.y--;
                    break;
                }
            case 8:
                if (player.y - 1 < 0) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.y--;
                    break;
                }
            case 9:
                if (player.y - 1 < 0 && player.x + 1 > 10) {
                    alert('Нельзя выходить за поле!');
                    break;
                } else {
                    next_position.y--;
                    next_position.x++;
                    break;
                }
        }
        return next_position;
    }
};