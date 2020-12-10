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

$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log("newDevour:", newDevour);

    var newDevourState = {
      devour: !newDevour,
      // id: id,
    };
    console.log("new devour");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed devour to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
