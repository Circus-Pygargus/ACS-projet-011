    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
      //  $('#galleryImage').h3.attr("value",$(e.relatedTarget).alt);
    });