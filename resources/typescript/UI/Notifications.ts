import * as $ from "jquery";

import "../../sass/UI/notifications.sass";

interface INotyficationConfig {
	type?: string;
	lifespan?: number;
}

const miniNotyfications = {
	init() {
		this.root            = $("#miniNoti");
		this.removeAllButton = $("#miniNotiRemoveAll");
		this.removeAllButton.click(() => {
			miniNotyfications.removeAll();
		});
		return this;
	},
	defaults: {
		lifespan: 3000,
	},
	root: null,
	removeAllButton: null,
	removeAll() {
		this.root.find(".noti").each(function() {
			miniNotyfications.remove($(this));
		});
	},
	remove(note) {
		note.animate({opacity: 0, marginLeft: -50}, 200, "linear").animate({height: 0}, 100, () => {
			note.remove();
			miniNotyfications.toggleRemoveAllButton();
		});
	},
	toggleRemoveAllButton() {
		if (this.root.find(".noti").length >= 2) {
			this.removeAllButton
				.show()
				.animate({height: 30}, 100)
				.animate({opacity: 1, marginLeft: 0}, 200);
		}
		else {
			this.removeAllButton
				.animate({opacity: 0, marginLeft: -50}, 200)
				.animate({height: 0}, 100, () => this.removeAllButton.hide());
		}
	},
	add(msg, type = "info", config: INotyficationConfig = {}, extraClass: string = null) {
		if (typeof  type === "object") {
			config = type;
			type   = config.type || "info";
		}
		config              = Object.assign({}, this.defaults, config);
		const notifications = $(
			`<span class='noti noti-${type} ${extraClass}'>${msg}<i class='fa fa-times noti-close'></i></span>`,
		);
		notifications
			.css({opacity: 0, marginLeft: -50})
			.animate({opacity: 1, marginLeft: 0}, 200)
			.find(".noti-close")
			.on("click", () => this.remove(notifications));

		this.root.append(notifications);
		this.toggleRemoveAllButton();
		setTimeout(() => this.remove(notifications), config.lifespan);
	},
};

const Notify = miniNotyfications.init();
export {Notify};
