jQuery.fn.tightenLetterSpacing = function (str, className) {
    var regex = new RegExp(str, "g");

    return this.each(function () {
        this.innerHTML = this.innerHTML.replace(regex, function(matched) {return "<span class=\"" + className + "\">" + matched + "</span>";});
    });
};

$(document).on({ 'touchstart' : function() {
        $('html').removeClass('no-touch');
    }
});

$(document).ready(function() {
    $("div[role=main] h1").tightenLetterSpacing("V","v");
    $("div[role=main] h2").tightenLetterSpacing("V","v");
    $("div[role=main] h4").tightenLetterSpacing("V","v");
    $("div[role=main] p").tightenLetterSpacing("V","p-v");

    visible = false;
    $('#menu-toggle').on('click', function(e) {
        e.preventDefault();
        $menu = $(this);
        // $('.menu').stop().slideToggle(250, function(){$menu.toggleClass('active')});
        // Better approach - a11y! https://css-tricks.com/places-its-tempting-to-use-display-none-but-dont/
        if (visible) {
            $('.menu').slideUp('fast',function() {
                $('.menu').addClass('hide')
                .slideDown(0);
                $menu.toggleClass('active');
            });
        } else {
            $('.menu').slideUp(0,function() {
                $('.menu').removeClass('hide')
                .slideDown('fast');
                $menu.toggleClass('active');
            });
        }
        visible = !visible;
    })
})
