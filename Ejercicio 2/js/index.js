const Enviar = document.getElementById('Enviar');
const form = document.forms['calendar'];
//const parrafos = document.getElementsByTagName('p');
//const inputs=document.getElementsByClassName('num');

function generarDias(mes) {
    let cantidadDedias = (new Date(2024, mes, 0)).getDate();
    let dias = [];
    for (let i = 1; i <= cantidadDedias; i++) {
        dias.push(i);
    }

    console.log(dias);
    document.getElementById('resultados').innerHTML = dias.map((value) => {

        return '<div class="ejemplo">' + value + '</div>';
    }).join('');
}

document.getElementById('mesSelect').addEventListener('change', (event) => {
    console.log(event.target.value);
    generarDias(event.target.value);
});






/*function validacionInput(){
    const anio=calendar['Anio'].value;
    const mes=calendar['Mes'].value;
    if(!anio){
        alert('Deben ingresar numeros positivos');
        return false;
    }else if(!mes){
           alert('Deben ingresar numeros positivos, mayores a 0 y menores a 13');
           return false;
        }
        return true;
}

Enviar.addEventListener('click', () => {
    if(validacionInput()){
        const anio = parseInt(calendar['Anio'].value);
        const mes = parseInt(calendar['Mes'].value);
        parrafos[0].innerText='Año y mes: '+ resultado;
    }
});*/









/**var nombreMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var mesActual = month;
var year = now.getFullYear();*/