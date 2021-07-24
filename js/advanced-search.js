$("select").change(function(){
  $(this).find("option:selected").each(function() {
    if($(this).attr("value") == "art") {
      $(".filter").not(".filter-art").hide();
      $(".filter-art").show("fast");
    } else if($(this).attr("value") == "catalog") {
      $(".filter").not(".filter-catalog").hide();
      $(".filter-catalog").show("fast");
    } else if($(this).attr("value") == "poster") {
      $(".filter").not(".filter-poster").hide();
      $(".filter-poster").show("fast");
    } else if($(this).attr("value") == "document") {
      $(".filter").not(".filter-document").hide();
      $(".filter-document").show("fast");
    } else if($(this).attr("value") == "documentation") {
      $(".filter").not(".filter-documentation").hide();
      $(".filter-documentation").show("fast");
    } else if($(this).attr("value") == "manuscript") {
      $(".filter").not(".filter-manuscript").hide();
      $(".filter-manuscript").show("fast");
    } else if($(this).attr("value") == "publication") {
      $(".filter").not(".filter-publication").hide();
      $(".filter-publication").show("fast");
    } else if($(this).attr("value") == "study") {
      $(".filter").not(".filter-study").hide();
      $(".filter-study").show("fast");
    } else {
      $(".filter").hide();
    };
  });
}).change();
