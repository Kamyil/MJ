import * as $ from "jquery";

const Worlds = (() => {
    const Selector = {
        WORLD_CONTAINER: ".worlds-container",
        WORLD1: ".world1",
        WORLD2: ".world2",
        WORLD3: ".world3",
        WORLD4: ".world4",
    };
    const WORLDS_ORDER: number[] = [1, 2, 3, 4];
    let worldsToOutput = [];

    function saveWorldOrder() {
        localStorage.setItem("worldsOrderStorage", JSON.stringify(WORLDS_ORDER));
        worldsToOutput = WORLDS_ORDER;
        console.log(`Saved order in localStorage ${worldsToOutput}`);
    }

    function loadSaveOrder() {
        worldsToOutput = JSON.parse(localStorage.getItem("worldsOrderStorage"));
        setWorlds(worldsToOutput);
        console.log(`Loaded order from localStorage ${worldsToOutput}`);
    }

    function setWorlds(Order) {
        for (let i = 1; i <= Order.length; i++) {

            const WORLD_TEMPLATE = $(`
                <a href="world.html">
                    <div class="col-lg-5 col-md-5 world world${Order[i - 1]}">
                        <span class="world-caption"></span>
                        <div class="world-img"></div>
                    </div>
                </a>
            `);

            WORLD_TEMPLATE.on("click", () => {
                changeWorldOrder(i);
            });

            $(Selector.WORLD_CONTAINER).children().append(WORLD_TEMPLATE);
        }

    }

    function changeWorldOrder(world: number) {
        WORLDS_ORDER.pop();
        WORLDS_ORDER.unshift(world);
        console.table(WORLDS_ORDER);
        saveWorldOrder();
    }


    if (localStorage.getItem("worldsOrderStorage") === null) {
        $(window).on("load", () => setWorlds(WORLDS_ORDER));
    } else {
        $(window).on("load", () => loadSaveOrder());
    }
})();
export {
    Worlds,
};
