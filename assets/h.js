DarkReader.setFetchMethod(window.fetch);
DarkReader.auto();

window.onload = () => {
	let h = document.getElementById('h');
	let hh = document.getElementById('hh');

	document.getElementById("hhh").addEventListener('click', () => {
		hh.value = HH(stringToBinary(h.value));
	});
	
	document.getElementById("hhhh").addEventListener('click', () => {
		if(h.value.match(/[^Hh\n ]/g) || h.value.length % 8 != 0) {
			new bootstrap.Toast(document.querySelector("#hhhhhhh")).show();
			hh.value = "";
			return;
		}
		hh.value = binaryToString(H(h.value));
	});

	document.getElementById("hhhhh").addEventListener('click', () => {
		navigator.clipboard.writeText(hh.value).then(() => {
			new bootstrap.Toast(document.querySelector('#hhhhhh')).show();
		});
	});

	function H(h) {
		let hh = h;	
		hh = hh.replace(new RegExp(" ", "g"), "");
		hh = hh.replace(new RegExp("h", "g"), "0");
		hh = hh.replace(new RegExp("H", "g"), "1");
		return hh;
	}

	function HH(h) {
		let hh = h;
		hh = hh.replace(new RegExp(" ", "g"), "");
		hh = hh.replace(new RegExp("0", "g"), "h");
		hh = hh.replace(new RegExp("1", "g"), "H");
		return hh;
	}
};