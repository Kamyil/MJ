import * as $ from "jquery";
// import { Notify } from "../UI/Notifications";

const Products = (() => {
	const Selector = {
		ADD_PRODUCT_BTN: ".add-product-to-cart-btn",
	};

	$(Selector.ADD_PRODUCT_BTN).on("click", () => {
		// Notify.add(`Dodano do koszyka`);
		M.toast({
			html   : '<i class="fas fa-shopping-cart"></i><span>Dodano do koszyka</span>',
			classes: 'noti-info',
		});
	});
})();
export {
	Products,
};
