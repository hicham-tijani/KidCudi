/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
function js_height_init() {
    (function($){
        $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
            $(this).height($(this).parent().first().height());
        });
    })(jQuery);
}

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});












function getTooltipGradientColor() {
    const tooltip = document.querySelector(".tooltip");
    const tooltipRect = tooltip.getBoundingClientRect();
    const gradientX = tooltipRect.left + tooltipRect.width / 2;
    const gradientY = tooltipRect.top + tooltipRect.height;
    const gradient = window.getComputedStyle(tooltip).getPropertyValue("background-image");
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, 1, 1);
    const gradientObj = ctx.createLinearGradient(0, 0, 0, 1);
    gradientObj.style = gradient;
    ctx.fillStyle = gradientObj;
    ctx.fill();
    const imageData = ctx.getImageData(0, 0, 1, 1);
    const red = imageData.data[0];
    const green = imageData.data[1];
    const blue = imageData.data[2];
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  function updateTooltipPosition(event) {
    const tooltip = event.currentTarget;
    const tooltipRect = tooltip.getBoundingClientRect();
    const positionX = (event.clientX - tooltipRect.left) / tooltipRect.width * 100;
    const positionY = (event.clientY - tooltipRect.top) / tooltipRect.height * 100;
    tooltip.style.setProperty("--position-x", positionX);
    tooltip.style.setProperty("--position-y", positionY);
    
    const gradient = window.getComputedStyle(tooltip).getPropertyValue("background-image");
    const tooltipGradientColor = getTooltipGradientColor(gradient);
    console.log(tooltipGradientColor);
  }
  
  const tooltips = document.querySelectorAll(".tooltip");
  tooltips.forEach((tooltip) => 
   //tooltip.addEventListener("mousemove", updateTooltipPosition)
                   null
  );
  
  
  
  