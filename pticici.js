$(document).ready(function(){

    console.log(" ok");
    $('#carouselslide').carousel({
        
        interval: 5000
      })

    // jQuery methods go here...

    
    $('#mySlideshow').carousel({
        pause:true,
        interval: 15000
        
      })
      $(".item1").click(function(){
        $("#mySlideshow").carousel(0);
      });
      $(".item2").click(function(){
        $("#mySlideshow").carousel(1);
      });
      

      $(".carousel-control-prev").click(function(){
        $("#mySlideshow").carousel("prev");
      });
      $(".carousel-control-next").click(function(){
        $("#mySlideshow").carousel("next");
      });
    /*function myFunction() {
      document.getElementById("carouselslide").style.minHeight = "200px";
    }*/
  
  });