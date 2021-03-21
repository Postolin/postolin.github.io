$(document).ready(function() {
    $('#image-gallery').lightSlider({
        //LAZY LOADING
        onBeforeStart: function ($el) {
            var src_img = $el.find('li img').first().attr('data-src');
            $el.find('li img').first().attr('src', src_img);
        },
        onSliderLoad: function ($el) {
            $('.lSPrev').hide();
        },
        onAfterSlide: function ($el, scene) {
            var $img = $el.find('img').eq( $el.getCurrentSlideCount()-1 );
            var $img_src = $img.attr('data-src');
            $img.attr('src', $img_src);

            if ($el.getCurrentSlideCount() == 1)
            {
                $('.lSPrev').hide();
            }
            else if ($el.getCurrentSlideCount() == $el.find('li').length)
            {
                $('.lSNext').hide();
            }
            else
            {
                $('.lSPrev').show();
                $('.lSNext').show();
            }
        },
        gallery:true,
        item:1,
        thumbItem:10,
        slideMargin:0,
        speed:500,
        auto:false,
        loop:true,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold:40,
        adaptiveHeight:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});