$(document).ready(function () {
    $('.datepicker').datepicker({
        'format': 'yyyy-mm-dd',
        showClearBtn: true
    });
    $('select').formSelect();
    $('.timepicker').timepicker({
        showClearBtn: true
    });
    $('#alert_close').click(function () {
        $("#alert_box").fadeOut("slow", function () { });
    });
    $('#alert_close_map').click(function () {
        $("#alert_box_map").fadeOut("slow", function () { });
    });
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown();
    $('#modal_pop').modal();
    // $('#modal_pop').modal('open');

    if (Cookies.get("pop") == null) {
        $('#modal_pop').modal('open');
        Cookies.set("pop", 1);
    }
});

$(document).ready(function () {
    let toDate = $('#id_to_date').parents('div')[1];
    let fromHour = $('#id_from_hour').parents('div')[1];
    let toHour = $('#id_to_hour').parents('div')[1];

    if (!toDate || !fromHour || !toHour) {
        return;
    }

    toDate.style.display = 'none';
    fromHour.style.display = 'none';
    toHour.style.display = 'none';

    // From date
    $('#id_from_date')[0].addEventListener('change', (event) => {
        if (event.target.value != "") {
            toDate.style.display = 'block';
            fromHour.style.display = 'block';
            toHour.style.display = 'block';

        }
        else {
            toDate.style.display = 'none';
        };
    });

    // To date
    $('#id_to_date')[0].addEventListener('change', (event) => {
        if (event.target.value != "") {
            fromHour.style.display = 'none';
            toHour.style.display = 'none';

        } else {
            fromHour.style.display = 'block';
            toHour.style.display = 'block';

        };
    });

    // From hour
    $('#id_from_hour')[0].addEventListener('change', (event) => {
        if (event.target.value != "") {
            toDate.style.display = 'none';
        } else {
            toDate.style.display = 'block';
        };
    });

    // To hour
    $('#id_to_hour')[0].addEventListener('change', (event) => {
        if (event.target.value != "") {
            toDate.style.display = 'none';
        } else {
            toDate.style.display = 'block';
        };
    });
});
