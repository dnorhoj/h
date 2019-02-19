function hhhhh() {
	var h = document.getElementById('h');
	var hh = document.getElementById('hh');
	var hhh = document.getElementById('hhh');

	if(hhh.value === 'h') {
		var hhh = hhhhhhh(h.value);
		hhh = hhhh(hhh)
		hh.value = hhh
	} else {
		var hhh = hhhhhhhh(h.value)
		hhh = binaryToString(hhh);
		hh.value = hhh
	}
}

function hhhhhh(h) {
	var hh = h;	
	var hh = hh.replace(new RegExp(" ", "g"), "");
	var hh = hh.replace(new RegExp("h", "g"), "0");
	var hh = hh.replace(new RegExp("H", "g"), "1");
	return hh;
}

function hhhh(h) {
	var hh = h;
	var hh = hh.replace(new RegExp(" ", "g"), "");
	var hh = hh.replace(new RegExp("0", "g"), "h");
	var hh = hh.replace(new RegExp("1", "g"), "H");
	return hh;
}