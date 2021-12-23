$(".code-container").hide();
$("#css-code").css("margin-left", "-350px");
$("#js-code").css("margin-left", "-350px");

$(".tab").click(function (event) {
  $(this).nextAll(".tab").css("margin-left", "170px");
  $(this)
    .nextAll(".code-container")
    .animate({ width: "0px" }, { duration: 1500, queue: false });
  $(this).next().animate({ backgroundColor: "#1D1E22" });

  $(this).next().animate(
    {
      width: "680px",
    },
    { duration: 2000, queue: false }
  );
});
