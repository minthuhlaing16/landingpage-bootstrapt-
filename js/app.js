// Jquery nae yay mar

$(document).ready(function () {
  // Start Nav Bar
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);
    if (getscrolltop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });

  // End Nav Bar

  // Start Property Section

  $(".propertieslists").click(function () {
    // $(this).addClass("activeitems");

    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    // const filtervalue = $(this).attr("data-filter");

    const filtervalue = $(this).data("filter");
    // console.log(filtervalue);

    if (filtervalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      // ==> Method 1
      // $(".filters").hide();
      // $(".filters")
      //   .filter("." + filtervalue)
      //   .show();

      // ==> Method 2
      $(".filters")
        .not("." + filtervalue)
        .hide("slide", 500);
      $(".filters")
        .filter("." + filtervalue)
        .show("slide", 500);
    }
  });

  // End Property Section

  // Start Adv Section
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 1200) {
      $(".advimages").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    } else {
      $(".advimages").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });
  // End Adv Section
});
