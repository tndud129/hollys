$(function(){
    //메뉴
    $(".main>li, .sub_bg").hover(function(){
        $(".sub").stop().show();
        $(".sub_bg").stop().slideDown(500);
    }, function(){
        $(".sub").stop().hide();
        $(".sub, .sub_bg").stop().slideUp(500);
    }) //hover


    $(".move").slick({
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        fade:true
    })

    $(".close").click(function(){
        $(".popup").hide();
    });


}) //jQuery