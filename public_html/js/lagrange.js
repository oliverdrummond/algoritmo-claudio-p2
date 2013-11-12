function lagrange() {
    var x1 = document.getElementById('x1').value;
    var fx1 = document.getElementById('fx1').value;
    var x2 = document.getElementById('x2').value;
    var fx2 = document.getElementById('fx2').value;
    var x3 = document.getElementById('x3').value;
    var fx3 = document.getElementById('fx3').value;
    var x = document.getElementById('x').value;
    var l1 = ((x - x2) * (x - x3)) / ((x1 - x2) * (x1 - x3));
    var l2 = ((x - x1) * (x - x3)) / ((x2 - x1) * (x2 - x3));
    var l3 = ((x - x1) * (x - x2)) / ((x3 - x1) * (x3 - x2));
    var resultado = (fx1 * l1) + (fx2 * l2) + (fx3 * l3);
    return resultado;dsfasdfa
};



