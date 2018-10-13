import * as $ from "jquery";
import "slick-carousel";

const Carousels = (() => {
	$(".baner-primary").slick({
		dots          : true,
		infinite      : true,
		slidesToScroll: 1,
		slidesToShow  : 1,
	});
	$(".baner-secondary").slick({
		dots          : true,
		infinite      : true,
		slidesToScroll: 1,
		slidesToShow  : 1,
	});
	$('.product-page-image-gallery').slick({
		//dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: '12%',
		slidesToShow: 3,
		arrows: false,
		speed: 500,
		responsive: [{

			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}

		}]
	});


})();

export {Carousels};

// $body.on("click", Selector.TempBasketModal.Submit, submitCartForm);
