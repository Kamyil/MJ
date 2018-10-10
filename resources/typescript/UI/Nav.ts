import * as $ from "jquery";
import "slick-carousel";

const Nav = (() => {

    $("#ham").on("click", () => {
        $("#ham").toggleClass("ham-toggle");
        // tslint:disable-next-line:max-line-length
        $(".mobile-nav").is(":hidden") ? $(".mobile-nav").fadeIn("fast").css("display", "flex") : $(".mobile-nav").fadeOut("fast");
    });

})();

export {Nav};
