import * as $ from "jquery";
import "slick-carousel";

const Carousels = (() => {
	$(".baner-primary").slick({
		dots          : false,
		infinite      : true,
		slidesToScroll: 1,
		slidesToShow  : 1,
		autoplay      : true,
		autoplaySpeed : 2000,
		variableWidth : true,
		centerMode    : true,
		adaptiveHeight: true,
		arrows        : true,
		accessibility : true,
		mobileFirst   : true,
		pauseOnHover  : true,

		// nextArrow: '<i class="fa fa-arrow-right"></i>',
		// prevArrow: '<i class="fa fa-arrow-left"></i>',
	});

	$(".baner-secondary").slick({
		dots          : false,
		infinite      : true,
		slidesToScroll: 1,
		slidesToShow  : 1,
		autoplay      : true,
		autoplaySpeed : 2000,
		variableWidth : false,
		centerMode    : true,
		adaptiveHeight: true,
		arrows        : true,
		accessibility : true,
		mobileFirst   : true,
		pauseOnHover  : true,

	});
	$('.product-page-image-gallery').slick({
		//dots: true,
		infinite     : true,
		slidesToShow : 3,
		arrows       : false,
		speed        : 500,
		responsive   : [
			{
				breakpoint: 992,
				settings  : {
					slidesToShow: 1
				}
			}
		]
	});


})();

export {Carousels};

// $body.on("click", Selector.TempBasketModal.Submit, submitCartForm);
