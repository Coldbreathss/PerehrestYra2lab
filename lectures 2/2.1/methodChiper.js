function encrypt() {
    var text = document.getElementById("text").value;
    var kod = document.getElementById("kod").value;

    kod = parseInt(kod);


    let out = '';
    for (let i=0; i< text.length; i++){
        let code = text.charCodeAt(i);
        if (code == parseInt(88) || code == parseInt(89) || code == parseInt(90)) {
            kod = parseInt(-23);
        } else if (code == parseInt(120) || code == parseInt(121) || code == parseInt(122)) {
            kod = parseInt(-23);
        };
        code = code + kod;
        out += String.fromCharCode(code);
    }
    document.getElementById('encrypted').innerHTML = out;
}

function decrypt() {
    var text = document.getElementById("encrypted").value;
    var kod = document.getElementById("kod").value;

    kod = parseInt(kod);

       let out = '';
    for (let i = 0; i < text.length; i++) {
        code = text.charCodeAt(i);
        if (code == parseInt(65) || code == parseInt(66) || code == parseInt(67)) {
            kod = parseInt(23);
        } else if (code == parseInt(97) || code == parseInt(98) || code == parseInt(99)) {
            kod = parseInt(23);
        } else {
            kod = parseInt(-3);
        };
        code += kod
        out += String.fromCharCode(code);
    }
    document.getElementById('encrypted').innerHTML = out;
}