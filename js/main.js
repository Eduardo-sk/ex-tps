"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCodigo = document.getElementById("campoCodigo");
    const btnDeposito = document.getElementById("");
    const cmDeposito = document.getElementById("cmDeposito");
    let p;
    const cmCompra = document.getElementById("cmCompra");
    const btncomprar = document.getElementById("comprar");
    calc.addEventListener("click", () => {
        let p = new empresa.Cliente(90);
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        p.saldo = 100;
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btnDeposito.addEventListener("click", () => {
        p.deposita(parseFloat(cmDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btncomprar.addEventListener("click", () => {
        if (p.comprar(parseFloat(cmCompra.value))) {
            alert("Obrigado por comprar");
        }
        else {
            alert("Saldo insuficiente para a compra!");
        }
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
})(empresa || (empresa = {}));
