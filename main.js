$(document).ready(function () {
    // When click on nav-link
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).toggleClass("active");
    })
});
