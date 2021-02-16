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
      $(".dept1").click(function(){
        $("#mySlideshow").carousel(0);
      });
      $(".dept2").click(function(){
        $("#mySlideshow").carousel(1);
      });
      

      $(".carousel-control-prev.deptprev").click(function(){
        $("#mySlideshow").carousel("prev");
      });
      $(".carousel-control-next.deptnext").click(function(){
        $("#mySlideshow").carousel("next");
      });


      $('#mySlideshow1').carousel({
        pause:true,
        interval: 15000
        
      })
      $(".pros1").click(function(){
        $("#mySlideshow1").carousel(0);
      });
      $(".pros2").click(function(){
        $("#mySlideshow1").carousel(1);
      });
      

      $(".carousel-control-prev.prosprev").click(function(){
        $("#mySlideshow1").carousel("prev");
      });
      $(".carousel-control-next.prosnext").click(function(){
        $("#mySlideshow1").carousel("next");
      });
    /*function myFunction() {
      document.getElementById("carouselslide").style.minHeight = "200px";
    }*/
  
  });