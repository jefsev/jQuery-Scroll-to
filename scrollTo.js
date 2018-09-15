    /*/ function to scroll to Top of ID /*/
    function scrollToTop(scrollTo, speed){
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
            $('body').animate({
                scrollTop: $(scrollTo).offset().top
            }, speed); 
           } else {
            $('html, body').animate({
                scrollTop: $(scrollTo).offset().top
            }, speed);
        }
    }

         /*/ grab scrollTo function on a Click /*/ 

         function scrollToOnly(click, scroll){
            $(click).click(function(){
               scrollToTop(scroll, 1300)
             });
           }