function showTY(rate) {
    cardTY.classList.add('show');
    cardRating.classList.remove('show');
    cardTY.querySelector('.js-output').textContent = rate;
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const value = evt.currentTarget.querySelector('input[type="radio"]:checked').value;
    showTY(value)
}

const form = document.querySelector('.rating-form');
const cardTY = document.querySelector('.card--ty');
const cardRating = document.querySelector('.card--rating');

form.addEventListener('submit', onFormSubmit)