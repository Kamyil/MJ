import * as $ from 'jquery';

const LoginPanel = (() => {

	const LOGIN_PANEL     = "#login-panel";
	const LOGIN_PANEL_BTN = "#login-btn";

	// $("body").on("click", (e) => {
	// 	const target = $(e.target);
	// 	if (!target.is(LOGIN_PANEL) && !target.is(LOGIN_PANEL_BTN)) {
	// 		$(LOGIN_PANEL).hide(300);
	// 		return false;
	// 	}
	// });
	$(LOGIN_PANEL_BTN).on("click", () => {
		$(LOGIN_PANEL).is(":hidden") ? $(LOGIN_PANEL).show(300).css('display', 'flex') : $(LOGIN_PANEL).hide(300);

	});
})();

export {LoginPanel}