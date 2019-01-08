const numberWithSpaces = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const recalc = form => {
    const data = new FormData(form);
    const sum = [...data.values()].reduce((sum, item) => {
        const value = JSON.parse(item);
        return sum + value.price + value.service;
    }, 0);
    $('.item_calc_total').text(numberWithSpaces(sum) + ' ₽');
}

const form = document.querySelector('.item_calc');

$('.item_calc').on('change', '[type="checkbox"]', () => { recalc(form) });

recalc(form);