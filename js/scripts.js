$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("i t0ld you, THIS IS A HEADER");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});


$(document).ready(function() {
        $("button#green").click(function() {
          $("body").removeClass();
          $("body").addClass("green-background");
        });

        $("button#yellow").click(function() {
          $("body").removeClass();
          $("body").addClass("yellow-background");
        });

        $("button#red").click(function() {
          $("body").removeClass();
          $("body").addClass("red-background");
        });
      });
