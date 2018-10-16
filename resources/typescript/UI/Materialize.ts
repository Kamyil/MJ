import * as $ from "jquery";

const Materialize = (() => {
	$(document).on('ready',() => {
		console.log('I work!');
		$('ul.tabs').tabs();
		console.log('I work!');
	});

	$(document).on('ready',() => {
		//@ts-ignore
		$('select').material_select();

	});


});

export {Materialize}