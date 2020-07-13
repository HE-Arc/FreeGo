$(document).ready(function () {
    $('.datepicker').datepicker({
        'format': 'yyyy-mm-dd',
        showClearBtn: true
    });
});

$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.timepicker').timepicker({
        showClearBtn: true
    });

    $('#alert_close').click(function () {
        $("#alert_box").fadeOut("slow", function () {
        });
    });
});




