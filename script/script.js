import $ from "jquery";

import bootstrap from "bootstrap";

import popper from "popper.js";

$("#openModal").click(function() {
    $("#myModal").css("display", "block");
  });

  // Закрыть модальное окно при клике на крестик
  $(".close").click(function() {
    $("#myModal").css("display", "none");
  });

  // Закрыть модальное окно при клике вне его области
  $(window).click(function(event) {
    if (event.target == $("#myModal")[0]) {
      $("#myModal").css("display", "none");
    }
  });