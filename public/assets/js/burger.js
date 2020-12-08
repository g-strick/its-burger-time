$(function () {
  // add new
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    console.log("clicked");
    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added new burger");
      // refresh page
      location.reload();
    });
  });
});
