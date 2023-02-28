let game = {
    /**
     * Запускает игру
     */
    run() {
        while (true) {
            // Получаем направление от игрока
            const direction = mover.get_direction();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            }
            const next_point = mover.get_next_position(direction);
            renderer.clear();
            player.move(next_point);
            renderer.render();
        }
    },

    // Этот метод выполняется при открытии страницы
    init() {
        console.log("Ваше положение на поле в виде О.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
    }
};

game.init();