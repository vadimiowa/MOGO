$(function() {
    
    var header = $("#header"), 
        introH = $("#about").innerHeight();
        var scrolloffset = 0;

    /*FIXED HEADER*/
    $(window).on("scroll", function() {
       
        
       scrolloffset = $(this).scrollTop();
        
       
       if( scrolloffset >= introH ) {
           header.addClass("fixed");
       } else {
           header.removeClass("fixed");
       }
        
       
     });
    
    
    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockid = $(this).data('scroll');
        var blockoffset = $(blockid).offset().top;
        
        $this.addClass("active");
        
        $("html, body").animate({
           scrollTop: blockoffset
        }, 1500);
    });
    
    
    
    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });
    
    
    
    /*   Collapse   */
    $("[data-collapse]").on("click", function(event){
        
        var $this = $(this);
        var blockid = $(this).data('collapse');
        
        $(blockid).slideToggle();
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
});