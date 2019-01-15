var movementLimit = $("#top-category-slider li")
    .first()
    .outerWidth(true);

  var numberOfItems = $("#top-category-slider li").length;

  var limitSelector = 0;

  $("#top-category-wrapper .clickable-right-triangle").on("click", function() {
    var movementLimit = $(
      "#top-category-slider li:eq(" + String(limitSelector) + ")"
    ).outerWidth(true);
    if (numberOfItems - limitSelector > 3) {
      $("#top-category-slider li")
        .first()
        .animate(
          {
            marginLeft: "-=" + movementLimit
          },
          600,
          function() {
            limitSelector += 1;
          }
        );
    } else {
      $("#top-category-slider li")
        .first()
        .animate(
          {
            marginLeft: "0"
          },
          300,
          function() {
            limitSelector = 0;
          }
        );
    }
  });

  $("#top-category-wrapper .clickable-left-triangle").on("click", function() {
    var movementLimit = $(
      "#top-category-slider li:eq(" + String(limitSelector) + ")"
    ).outerWidth(true);
    if (limitSelector != 0) {
      $("#top-category-slider li")
        .first()
        .animate(
          {
            marginLeft: "+=" + movementLimit
          },
          500,
          function() {
            limitSelector -= 1;
          }
        );
    }
  });
