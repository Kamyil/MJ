import * as $ from "jquery";

const Materialize = (() => {
	$(document).ready(function(){
		$('ul.tabs').tabs();
	});
});

export {Materialize}