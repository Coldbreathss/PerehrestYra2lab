function encrypt() {
    var text = document.getElementById("text").value;
    var kod = document.getElementById("kod").value;

    kod = parseInt(kod);


    let out = '';
    for (let i=0; i< text.length; i++){
        let code = text.charCodeAt(i);
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
    for (let i=0; i< text.length; i++){
        let code = text.charCodeAt(i);
        code = code - kod;
        out += String.fromCharCode(code);
    }
    document.getElementById('encrypted').innerHTML = out;
}