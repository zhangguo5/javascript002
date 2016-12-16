function other1() {}

function other2() {}

(function($) {
	if($) {
		$.getStu("Tom").show();
	}
})(typeof StuObj=="undefined"?false:StuObj);