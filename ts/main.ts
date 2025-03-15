namespace empresa{

    const calc = document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    
    const campoCodigo = document.getElementById("campoCodigo") as HTMLButtonElement;
    
    const btnDeposito = document.getElementById("") as HTMLButtonElement;
    
    const cmDeposito = document.getElementById("cmDeposito") as HTMLButtonElement;
    
    let p: Cliente;
    const cmCompra = document.getElementById("cmCompra") as HTMLButtonElement;
    const btncomprar = document.getElementById("comprar") as HTMLButtonElement;

    
    calc.addEventListener("click", ()=>{
        let p = new Cliente(90);
        
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        p.saldo = 100;
        

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    
    
    btnDeposito.addEventListener("click", ()=>{
        p.deposita(parseFloat(cmDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    });

    btncomprar.addEventListener("click", ()=>{
        if(p.comprar(parseFloat(cmCompra.value))){
            alert("Obrigado por comprar");
        }
        else{
            alert("Saldo insuficiente para a compra!");
        }

        document.getElementById("saldo").textContent = p.saldo.toString();
    })

    
}