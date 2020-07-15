const orm = require("../config/orm.js");
const express = require("express");
const app = express();
// This file will handle the API calls within the website.
// Should just be a get, put and post ajax call. Dont think there was delete functionality
$(function () {
  $("#burgerSubmit").on("submit", (event) => {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".devourBtn").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    let devouredObj = {
      devoured: true,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredObj,
    }).then(function () {
      console.log("Changed burger devoured type to true");
      location.reload();
    });
  });
});

module.exports = app;
