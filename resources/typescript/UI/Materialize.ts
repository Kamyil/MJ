import * as $ from "jquery";

const Materialize = (() => {
	console.log('I work!');
	$(document).on('ready',function(){
		$('ul.tabs').tabs();
	});

	$(document).on('ready',function(){
		//@ts-ignore
		$('select').material_select();

	});
});

export {Materialize}