function calcular(sueldo, radio, hijos, lista, resultado)
{
    let sueldoMensual;
    
    sueldo = sueldo.value/radio;
    

    if (hijos.value >= 2) 
    {
        sueldoMensual = sueldo - sueldo * 0.12;
    } 
    else if (hijos.value < 2) 
    {
        sueldoMensual = sueldo - sueldo * 0.08;
    }
    
    resultado.innerHTML = "El sueldo mensual es " + sueldoMensual.toFixed(2) + ". En " + radio +  " pagas. El tipo de contrato seleccionado es " + lista.value;
}



window.addEventListener('load', function(){

    let b1 = this.document.getElementById("b1");
    let sueldo = this.document.getElementById('sueldo');
    let hijos = this.document.getElementById('hijos');
    let lista = this.document.getElementById('lista');
    let resultado = this.document.getElementById('resultado');

    b1.addEventListener ('click',function(event){
    event.preventDefault();

    let radio = document.querySelector('input[name="radio"]:checked')?.value;
    if (radio) 
    {
        calcular(sueldo, radio, hijos, lista, resultado);
    } 
    else 
    {
        alert("Por favor selecciona una opción de mensualidades.");
    }
    
    });
});