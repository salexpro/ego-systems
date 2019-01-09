const numberWithSpaces = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const recalc = form => {
    const data = new FormData(form);
    const total = [...data.values()].reduce((sum, item) => sum + JSON.parse(item).price, 0);
    const service = [...data.values()].reduce((sum, item) => sum + JSON.parse(item).service, 0);
    $('.item_calc_total_price').text(numberWithSpaces(total) + ' ₽');
    $('.item_calc_total_service').text(numberWithSpaces(service) + ' ₽');
}

const form = document.querySelector('.item_calc');

$('.item_calc').on('change', '[type="checkbox"]', () => { recalc(form) });

recalc(form);