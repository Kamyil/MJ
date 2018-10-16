import * as $ from 'jquery';

const RemindPasswordPanel = (() => {

	const REMIND_PASSWORD_PANEL     = "#remind-password-panel";
	const REMIND_PASSWORD_PANEL_BTN = "#remind-password-btn";
	const BACK_TO_LOGIN_BTN = "#back-to-login-btn";


	$(REMIND_PASSWORD_PANEL_BTN).on("click", () => {
		$(REMIND_PASSWORD_PANEL).is(":hidden") ? $(REMIND_PASSWORD_PANEL).show(300).css('display', 'flex') : $(REMIND_PASSWORD_PANEL).hide(300);

	});
	$(BACK_TO_LOGIN_BTN).on("click", (e) => {
		e.stopPropagation();
		console.log('i work!');
		$(REMIND_PASSWORD_PANEL).hide(300);
		$("#login-panel").show(300);

	});
})();

export {RemindPasswordPanel}