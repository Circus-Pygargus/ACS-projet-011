    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
      //  $('#galleryImage').h3.attr("value",$(e.relatedTarget).alt);
    });



    // img to watch
    var hoverWatchedImgs = document.querySelectorAll(".myHoverWatcher");
    // the overlay to display on hovered img
    var myOverlay = document.querySelector(".myOverlay");

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
        console.log(this);
        // get hovered image position
        var leftPos = this.offsetLeft;
        var topPos = this.offsetTop;
        // change position of the overlay div
        myOverlay.style.left = leftPos;
        myOverlay.style.top = topPos;
        myOverlay.style.opacity = 1;
        console.log(this);
        // console.log(event);
        // console.log(this.offsetParent);
        // console.log(this.offsetTop);
      });
    }