document.addEventListener('DOMContentLoaded', function() {
    let number = "";

    const rating = document.querySelectorAll('.card__label');
    const textRating = document.querySelector('.thanks__rating');
    const button = document.querySelector('#btnSubmit');
    const cardThanks = document.querySelector('.thanks');
    const cardRating = document.querySelector('.card__rating');

    rating.forEach(element => {
        element.addEventListener('click', e => {
            number = e.target.outerText // outerText innerHTML innerText

            textRating.textContent = number;
            button.disabled = false;
        });
    });

    button.addEventListener('click', ()=> {
        cardThanks.classList.add('active');
        cardRating.classList.add('hidden')
    });
    
});