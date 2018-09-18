function scrollUp() 
{
    window.scroll({
    top:0,
    left:0,    
    behavior:'smooth'
    });
}

function smoothScroll(){ 
    windowHeight = $(window).height();
    $('html, body').stop().animate({scrollTop: windowHeight}, "slow");
}

$('.bottom-nav').on('click', '.fold-trigger', function(event) {
    $('.home').css('overflow', 'visible');
    setTimeout(smoothScroll(), 1000);
});

