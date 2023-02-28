let renderer = {
    // Сюда запишем все что надо отобразить
    map: "",

    /**
     * Отображает игру в консоли
     */
    render() {
        for (let row = 0; row < config.rows_count; row++) {
            for (let col = 0; col < config.cols_count; col++) {
                if (player.y === row && player.x === col) {
                    this.map += 'O ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }

};