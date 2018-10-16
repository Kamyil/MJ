import * as $ from "jquery";
import "materialize-css/dist/js/materialize.min";
import "lightbox2/dist/js/lightbox.min";


import {Carousels}   from "./Modules/Carousels";
import {Products}    from "./Modules/Products";
import {LoginPanel}  from "./Modules/Login-Panel";
import {RemindPasswordPanel}  from "./Modules/Remind-Password-Panel";
import {CartPanel}   from "./Modules/Cart-Panel";
import {Worlds}      from "./Modules/Worlds";
import {Nav}         from "./UI/Nav";
import {Notify}      from "./UI/Notifications";
import {Materialize} from "./UI/Materialize";

// Initialize Material Tabs
//@ts-ignore
M.AutoInit();

export {
	Carousels,
	Nav,
	Worlds,
	Materialize,
	Products,
	Notify,
	LoginPanel,
	CartPanel,
	RemindPasswordPanel,
};
