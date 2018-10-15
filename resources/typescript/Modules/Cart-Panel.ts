import * as $ from 'jquery';

const CartPanel = (() => {

	const CART_PANEL     = "#cart-panel";
	const CART_PANEL_BTN = "#cart-btn";

	// $("body").on("click", (e) => {
	// 	const target = $(e.target);
	// 	if (!target.is(CART_PANEL) && !target.is(CART_PANEL_BTN)) {
	// 		$(CART_PANEL).hide(300);
	// 		return false;
	// 	}
	// });
	$(CART_PANEL_BTN).on("click", () => {
		$(CART_PANEL).is(":hidden") ? $(CART_PANEL).show(300).css('display', 'flex') : $(CART_PANEL).hide(300);
	});
})();

export {CartPanel}