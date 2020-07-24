$(document).ready(function () {

    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile'
        
    });

/*slider-active*/

    $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
   /* project-active*/

    $('.project-active').owlCarousel({
    loop:true,
    nav:false,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
    
    /* blog-active*/
    $('.blog-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    /* brand-active*/
    $('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    margin:50,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        750:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})
    /* testimonial-active*/
    $('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/*video popup*/

    $('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});
})
