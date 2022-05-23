function calc() {
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;

    var s = Number(n1) + Number(n2)
    var r = document.querySelector(".s").innerHTML = "Soma: "+s;
    
    var sb = Number(n1) - Number(n2)
    var sub = document.querySelector(".sb").innerHTML = "Subtração: "+sb;

    var m = Number(n1) * Number(n2)
    var mult = document.querySelector(".m").innerHTML =`Multiplicação: ${m} ` ;

    var d = Number(n1) / Number(n2)
    var div = document.querySelector(".d").innerHTML = `Divisão: ${d} `;
    
}