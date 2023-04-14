'use strict';

let slider = document.querySelector('.slider');

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement('afterbegin', loadIcon);

// Создаем лувую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement('beforeend', leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement('beforeend', rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    // Скрываем иконку загрузки
    loadIcon.style.display = 'none';

    // Инициализация слайдера
    images.init();

    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });
});

/**
 * функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размер.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute('data-width');
    let height = slider.getAttribute('data-height');
    if (width !== null && width !== '') {
        slider.style.width = width;
    }
    if (height !== null && height !== '') {
        slider.style.height = height;
    }
}
setSizes(slider);

// Объект слайдера
let images = {
    /* {int} Номер текущего слайда */
    currentIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    /** Берем слайд с текущим индексом и убираем у него класс hidden-slide */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /** Видимому (текущему) слайду добавляем класс hidden-slide */
    hideVisibleImage() {
        this.slides[this.currentIdx].classList.add('hidden-slide');
    },

    /** Переключается на предыдущее изображение. */
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    /** Переключается на следующее изображение. */
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    }
}