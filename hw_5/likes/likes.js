'use strict';

const likeElems = document.querySelectorAll('i');

likeElems.forEach((likeEl) => {
    likeEl.addEventListener('click', addLike);
});

/**
 * 
 * @param {MouseEvent} event 
 */
function addLike(event) {
    let likeEl = event.target;
    let zeroLikesHeart = likeEl.classList.contains('far');
    if (zeroLikesHeart) {
        likeEl.classList.remove('far');
        likeEl.classList.add('fas');
    } else {
        likeEl.classList.remove('fas');
        likeEl.classList.add('far');
    }
}