function insert(number) {
    $('.display').val($('.display').val() + number);
}

function eql() {
    $('.display').val((eval($('.display').val())));
}

function c() {
    $('.display').val('');
}

function del() {
    wert = $('.display').val();
    $('.display').val(wert.substring(0, wert.length - 1));
}
