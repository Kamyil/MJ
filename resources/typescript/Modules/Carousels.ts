import "slick-carousel";
import * as $ from "jquery";

const Carousels = (() => {

// language=JQuery-CSS

        $("#gallery-main").slick({
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
        });
        console.log('dupa');

})();



export {Carousels};



// $body.on("click", Selector.TempBasketModal.Submit, submitCartForm);