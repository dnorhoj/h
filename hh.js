function hhhhhhh(h, hh) {
    function hhh(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return h.replace(/[\s\S]/g, function(h) {
        h = hhh(h.charCodeAt().toString(2));
        return !1 == hh ? h : h + " "
    });
};

function hhhhhhhh(h) {
    // Removes the spaces from the binary string
    h = h.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    h = h.match(/.{1,8}/g).join(" ");

    var hhh = h.split(" ");
    var hh = [];

    for (i = 0; i < hhh.length; i++) {
        hh.push(String.fromCharCode(parseInt(hhh[i], 2)));
    }
    
    return hh.join("");
}