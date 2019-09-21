// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Slider
var slides = document.querySelectorAll('.carousel-inner .carousel-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
function nextSlide(){
    slides[currentSlide].className = 'carousel-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'carousel-item active';
};
//-----

// Highlite current page
$(document).ready(function() {
    // get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})
//-----

// Modal Window
function showPortfolioForm_1(){
    $('#portfolioModal_1').fadeOut('fast',function(){   
        $('.modal-title').html('Lake City 2019, New construction, 3706 sq.ft');
    }); 
}

function openPortfolioModal_1(){
    showPortfolioForm_1();
    setTimeout(function(){
        $('#portfolioModal_1').modal('show');    
    }, 230);
    
}

function showPortfolioForm_2(){
    $('#portfolioModal_2').fadeOut('fast',function(){   
        $('.modal-title').html('Lake Stivence 2019, New construction, 4052 sq.ft');
    }); 
}

function openPortfolioModal_2(){
    showPortfolioForm_2();
    setTimeout(function(){
        $('#portfolioModal_2').modal('show');    
    }, 230);
    
}

function showPortfolioForm_3(){
    $('#portfolioModal_3').fadeOut('fast',function(){   
        $('.modal-title').html('Echo Falls 2019, New construction, 4120 sq.ft');
    }); 
}

function openPortfolioModal_3(){
    showPortfolioForm_3();
    setTimeout(function(){
        $('#portfolioModal_3').modal('show');    
    }, 230);
    
}

function showPortfolioForm_4(){
    $('#portfolioModal_4').fadeOut('fast',function(){   
        $('.modal-title').html('Kirkland 2019, remodel, 1850 sq.ft');
    }); 
}

function openPortfolioModal_4(){
    showPortfolioForm_4();
    setTimeout(function(){
        $('#portfolioModal_4').modal('show');    
    }, 230);
    
}

function showPortfolioForm_5(){
    $('#portfolioModal_5').fadeOut('fast',function(){   
        $('.modal-title').html('Lake City 2019, New construction, 3590 sq.ft');
    }); 
}

function openPortfolioModal_5(){
    showPortfolioForm_5();
    setTimeout(function(){
        $('#portfolioModal_5').modal('show');    
    }, 230);
    
}

function showPortfolioForm_6(){
    $('#portfolioModal_6').fadeOut('fast',function(){   
        $('.modal-title').html('Kirkland Waterview 2018-19,New construction, 4489 sq.ft');
    }); 
}

function openPortfolioModal_6(){
    showPortfolioForm_6();
    setTimeout(function(){
        $('#portfolioModal_6').modal('show');    
    }, 230);
    
}

function showPortfolioForm_7(){
    $('#portfolioModal_7').fadeOut('fast',function(){   
        $('.modal-title').html('Lake Stivence 2018, New construction, 5527sq.ft');
    }); 
}

function openPortfolioModal_7(){
    showPortfolioForm_7();
    setTimeout(function(){
        $('#portfolioModal_7').modal('show');    
    }, 230);
    
}

function showPortfolioForm_8(){
    $('#portfolioModal_8').fadeOut('fast',function(){   
        $('.modal-title').html('Lake Stivence 2018, New construction, 3802 sq.ft');
    }); 
}

function openPortfolioModal_8(){
    showPortfolioForm_8();
    setTimeout(function(){
        $('#portfolioModal_8').modal('show');    
    }, 230);
    
}

function showPortfolioForm_9(){
    $('#portfolioModal_9').fadeOut('fast',function(){   
        $('.modal-title').html('Seattle  2017, New construction, Project management, 3274 sq.ft');
    }); 
}

function openPortfolioModal_9(){
    showPortfolioForm_9();
    setTimeout(function(){
        $('#portfolioModal_9').modal('show');    
    }, 230);
    
}

function showPortfolioForm_10(){
    $('#portfolioModal_10').fadeOut('fast',function(){   
        $('.modal-title').html('Federal Way 2017, remodel, addition area 100 sq.ft, remodel area 3320 sq.ft');
    }); 
}

function openPortfolioModal_10(){
    showPortfolioForm_10();
    setTimeout(function(){
        $('#portfolioModal_10').modal('show');    
    }, 230);
    
}

function showPortfolioForm_11(){
    $('#portfolioModal_11').fadeOut('fast',function(){   
        $('.modal-title').html('Lake Stivence 2017, New construction, 3754sq.ft');
    }); 
}

function openPortfolioModal_11(){
    showPortfolioForm_11();
    setTimeout(function(){
        $('#portfolioModal_11').modal('show');    
    }, 230);
    
}

function showPortfolioForm_12(){
    $('#portfolioModal_12').fadeOut('fast',function(){   
        $('.modal-title').html('Redmond 2016, remodel, addition area 490 sq.ft, remodel area 2070 sq.ft');
    }); 
}

function openPortfolioModal_12(){
    showPortfolioForm_12();
    setTimeout(function(){
        $('#portfolioModal_12').modal('show');    
    }, 230);
    
}

function showPortfolioForm_13(){
    $('#portfolioModal_13').fadeOut('fast',function(){   
        $('.modal-title').html('Bridle Trails Kirkland 2016, addition area 420 sq.ft, remodel area 820 sq.ft');
    }); 
}

function openPortfolioModal_13(){
    showPortfolioForm_13();
    setTimeout(function(){
        $('#portfolioModal_13').modal('show');    
    }, 230);
    
}
//-----

function setModalMaxHeight(element) {
  this.$element     = $(element);
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() > 767 ? 60 : 20;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight);

  this.$content.css({
      'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});