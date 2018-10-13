import * as $ from "jquery";


const Filters = (() => {

	const Selector = {
		FILTER_HEADERS: ".filter-title",
		FILTERS       : ".checkbox-container",
	}


	$(Selector.FILTER_HEADERS).on("click", () => {
		console.log('działa');
		const $this = $(this);
		if($this.hasClass('active')) {
			$this.removeClass('active');
		} else {
			$this.addClass("active");
		}

	});
})();

export {Filters};
