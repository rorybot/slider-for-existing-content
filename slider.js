var movementLimit = $("#element-containing-woocommerce-product-listings li")
    .first()
    .outerWidth(true);

  var numberOfItems = $("#element-containing-woocommerce-product-listings li").length;

  var limitSelector = 0;

  $("#.clickable-right-triangle").on("click", function() {
    var movementLimit = $(
      "#element-containing-woocommerce-product-listings li:eq(" + String(limitSelector) + ")"
    ).outerWidth(true);
    if (numberOfItems - limitSelector > 3) {
      $("#element-containing-woocommerce-product-listings li")
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
      $("#element-containing-woocommerce-product-listings li")
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

  $(".clickable-left-triangle").on("click", function() {
    var movementLimit = $(
      "#top-category-slider li:eq(" + String(limitSelector) + ")"
    ).outerWidth(true);
    if (limitSelector != 0) {
      $("#element-containing-woocommerce-product-listings li")
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
