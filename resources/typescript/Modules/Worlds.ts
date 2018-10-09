import * as $ from "jquery";
import "slick-carousel";

const Worlds = (() => {
    const Selector = {
        WORLD1 : "#world1",
        WORLD2 : "#world2",
        WORLD3 : "#world3",
        WORLD4 : "#world4",
    };
    console.log("duoa");
    const WORLDS_ORDER: number[] = [1, 2, 3, 4];

    $(Selector.WORLD1).on("click", () => {
        WORLDS_ORDER.splice(0, 1, 1);
        console.log(WORLDS_ORDER);
    });
    $(Selector.WORLD2).on("click", () => {
        WORLDS_ORDER.splice(0, 1, 2);
        console.log(WORLDS_ORDER);
    });
    $(Selector.WORLD3).on("click", () => {
        WORLDS_ORDER.splice(0, 1, 3);
        console.log(WORLDS_ORDER);
    });
    $(Selector.WORLD4).on("click", () => {
        WORLDS_ORDER.splice(0, 1, 4);
        console.log(WORLDS_ORDER);
    });

})();
export { Worlds };
