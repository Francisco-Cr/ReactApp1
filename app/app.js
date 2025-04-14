let ingreso = [];

function agregar() {

    const Factura= document.getElementById("Factura").value;
    const Nombre= document.getElementById("Nombre").value;
    const Neto = parseFloat(document.getElementById("Neto").value); // Ensure it is treated as a number
    const IVA = Neto * 19/100 ; 
    const Total = Neto + IVA;

    document.getElementById("IVA").value = IVA.toFixed(2);
    document.getElementById("Total").value = Total.toFixed(2);

    const table= document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    const A= table.insertRow();

    const a1= A.insertCell(0);
    a1.textContent= Factura;

    const a2= A.insertCell(1);
    a2.textContent= Nombre;

    const a3= A.insertCell(2);
    a3.textContent= Neto.toFixed(2);

    const a4= A.insertCell(3)
    a4.textContent = IVA.toFixed(2);

    const a5= A.insertCell(4)
    a5.textContent = Total.toFixed(2);
    
}

const form = document.getElementById("formulario");
form.addEventListener("submit", agregar);

function guardar(formulario) {
    const {Factura, Nombre, Neto, IVA, Total} = formulario;
    let dato = {Factura: Factura.value, Nombre: Nombre.value, Neto: Neto.value, IVA: IVA.value, Total: Total.value};
    ingreso.push(dato);
    console.log(ingreso);
    
}

function TotalFactura() {
    let sumaN = 0;
    let sumaI = 0;
    let sumaT = 0;

    ingreso.forEach(sumaIva);
    iva= document.getElementById("ivaF");
    iva.innerHTML = `Total Iva: ${sumaI}`;

    ingreso.forEach(sumaNeto);
    neto= document.getElementById("netoF");
    neto.innerHTML = `Total neto: ${sumaN}`;

    ingreso.forEach(sumaTotal);
    total= document.getElementById("totalF");
    total.innerHTML = `Suma total: ${sumaT}`;


    function sumaNeto(item) {
        sumaN= sumaN +(+item.Neto);
        return sumaN;
    }
    function sumaIva(item) {
        sumaI= sumaI +(+item.IVA);
        return sumaI;
    }
    function sumaTotal(item) {
        sumaT= sumaN +(+item.Total);
        return sumaT;
    }
}