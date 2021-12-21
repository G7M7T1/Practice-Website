$("#box").draggable();
// $("#resizeble").resizable();

$("#resizeble").droppable({
  drop: function (event, ui) {
    // alert("Drop in");
    $(this).addClass("ui-state-highlight");
  },
});
