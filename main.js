/**
 * Created by pc on 18.3.2017 г..
 */
window.addEventListener('scroll', function () {
    document.body.classList[
        window.scrollY > 20 ? 'add': 'remove'
        ]('scrolled');
});


// $("#backButton").click(function () {showPreviousView()});
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if(scroll > 100){
        $(".back-to-top-container").fadeIn(500);
    }else{
        $(".back-to-top-container").fadeOut(500);
    }
});