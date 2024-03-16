const Enviar=document.getElementById('Enviar');
const form=document.forms['calendar'];

let cantidadDedias=(new Date(2024,5,0)).getDate();
//let cantidadDedias=(new Date(Anio,Mes,0)).getDate();
let dias=[];
for(let i=1;i<=cantidadDedias;i++){
    dias.push(i);
}

console.log(dias);
document.body.innerHTML=dias.map((value)=>{

    return '<div>'+value+'</div>';
}).join('');

/**const validacionInput=()=>{
    const anio=calendar['anio'].value;
    const mes=calendar['mes'].value;
    if(!anio){
        alert('Deben ingresar numeros positivos');
        return false;
    }else if(!mes){
           alert('Deben ingresar numeros positivos, mayores a 0 y menores a 13');
           return false;
        }
}*/

/*var nombreMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var mesActual = month;
var year = now.getFullYear();

*/