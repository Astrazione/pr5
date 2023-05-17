import $ from "jquery"

jQuery(function() {
    $("#myCarousel").carousel();

    var modal = $("#myModal");
    var btn = $("#open-btn");
    var span = $(".close");

    // Открытие модального окна
    btn.on(function() {
        modal.css("display", "block");
    });

    // Закрытие модального окна при клике на крестик
    span.on(function() {
        modal.css("display", "none");
    });

    // Закрытие модального окна при клике вне окна
    $(window).on(function(event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });
});