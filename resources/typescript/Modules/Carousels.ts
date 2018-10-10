import * as $ from "jquery";
import "slick-carousel";

const Carousels = (() => {

// language=JQuery-CSS

        $(".baner-primary").slick({
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
        });
        $(".baner-secondary").slick({
                dots: true,
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 1,
            });

})();

export {Carousels};

// $body.on("click", Selector.TempBasketModal.Submit, submitCartForm);
