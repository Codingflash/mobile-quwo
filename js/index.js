$(function () {
    $(".search").hammer().bind("tap", function (ev) {
        $(".sousuo").css("display", "block");
        ev.stopPropagation();
    })
    $(":not(.search)").hammer().bind("tap", function () {
        $(".sousuo").css("display", "none");
    })

    $(".menu").hammer().bind("tap", function (ev) {
        $(".menu span:nth-child(1)").css(
            "transform","rotate(-45deg)",
                "transform","translateY(-39rem)")
        
        $(".menu span:nth-child(2)").css("transform", "rotate(45deg)");
        $(".menu span:nth-child(3)").css("display", "none");


        $(".caidan").css("display", "block");
        ev.stopPropagation();
    })
    $(":not(.menu)").hammer().bind("tap", function () {
        $(".caidan").css("display", "none");
        $(".menu span:nth-child(1)").css(
            "transform","rotate(180deg)",
                "transform","translateY(-39rem)")
        
        $(".menu span:nth-child(2)").css("transform", "rotate(360deg)");
        $(".menu span:nth-child(3)").css("display", "block");

    })

    $(".jindu-list").hammer().bind("swiperight", function () { 
        $(this).find(".jindu-list-img1").css("display", "none");
        $(this).find(".jindu-list-img2").css("display", "block");
    })

    $(":not(.jindu-list)").hammer().bind("swipeleft", function () {
        $(".jindu-list-img1").css("display", "block");
        $(".jindu-list-img2").css("display", "none");
    });

    $(".zhuti-huodong li a").hammer().bind("tap", function () {
        $(".xinwen").css("display", "none");
        var index = $(this).index(".zhuti-huodong li:nth-child(1) a");
        var index1 = $(this).index(".zhuti-huodong li:nth-child(2) a");
        var index2 = $(this).index(".zhuti-huodong li:nth-child(3) a");
        var index3 = $(this).index(".zhuti-huodong li:last-child a");
        $(".bd .xinwen:nth-child(" + (index + 1) + ")").css("display", "block");
        $(".bd .xinwen:nth-child(" + (index1 + 3) + ")").css("display", "block");
        $(".bd .xinwen:nth-child(" + (index1 + 4) + ")").css("display", "block");
        $(".bd .xinwen:nth-child(" + (index3+1) + ")").css("display", "block");
        $(".zhuti-huodong li a").css("color", "#333");
        $(this).css("color", "rgb(219, 206, 90)");
    })
    
})