/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним
 * @property {int} x позиция по x-координате
 * @property {int} y позиция по y-координате
 */
const player = {
    x: 5,
    y: 5,

    /**
     * Двигает игрока по переданному направлению
     * @param {{x: int, y: int}} next_point следующая точка пользователя
     */
    move(next_point) {
        this.x = next_point.x;
        this.y = next_point.y;
    },
};