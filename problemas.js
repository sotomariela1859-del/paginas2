document.addEventListener("DOMContentLoaded", ()=>{
const d = document.getElementById("descripcion");
const da = document.getElementById("datos");
const f = document.getElementById("formula");
const p = document.getElementById("procedimiento");
const r = document.getElementById("resultado");
const b = document.getElementById("boton");

d.textContent ="un auuto exprerimenta un aceleracion uniforme",
da.innerHTML ="velocidad = 0m/s<br>velocidadfinal = 20 m/s<br>tiempo = 4 s";
f.textContent = "a0(vf-vi)/t";
p.textContent ="calculadora a=(20-0)/4";
r.textContent="";

console.log("descripcion:", d.textContent);
console.log("datos;", da.textContent);
console.log("calculo;", p.textContent);


function mostrar(){
r.textContent= "resultado:5/s^2";
console.log("resultado final:",r.textContent);
}


b.addEventListener("click", mostrar);
});