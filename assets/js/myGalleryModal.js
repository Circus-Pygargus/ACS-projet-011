    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
      //  $('#galleryImage').h3.attr("value",$(e.relatedTarget).alt);
    });



    
    var hoverWatchedImgs = document.querySelectorAll(".myHoverWatcher");

    console.log(hoverWatchedImgs);

    // for (i=0; i<hoverWatchedImgs.length; i++) {
    //   console.log(hoverWatchedImgs[i]);
    //   this.onmouseover = function(){
    //     console.log(this);
    //     // console.log(event);
    //     console.log(this.offsetParent);
    //   };
    // document.getElementById("demo").innerHTML = testDiv.offsetParent;
    // }

    
    for (i=0; i<hoverWatchedImgs.length; i++) {
      // console.log(hoverWatchedImgs[i]);
      hoverWatchedImgs[i].addEventListener("mouseover", function(){
        // console.log(this);
        // console.log(event);
        // console.log(this.offsetParent);
        // console.log(this.offsetTop);
      });
    }