'use strict';

let player = {
    x: 5,
    y: 5,

    /**
     * Метод задает пользователю новое расположение.
     * @param {{x: int, y: int}} nextPoint координаты куда ставим пользователя.
     */
    changePosition(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
}