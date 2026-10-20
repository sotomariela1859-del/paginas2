document.addEventListener("DOMContentLoaded", ()=>{
const d = document.getElementById("descripcion");
const da = document.getElementById("datos");
const f = document.getElementById("formula");
const p = document.getElementById("procedimiento");
const r = document.getElementById("resultado");
const b = document.getElementById("boton");

const d1 = document.getElementById("descripcion");
const da1 = document.getElementById("datos");
const f1 = document.getElementById("formula");
const p1 = document.getElementById("procedimiento");
const r1 = document.getElementById("resultado");
const b1 = document.getElementById("boton");

d.textContent ="un auuto exprerimenta un aceleracion uniforme",
da.innerHTML ="velocidad = 0m/s<br>velocidadfinal = 20 m/s<br>tiempo = 4 s";
f.textContent = "a0(vf-vi)/t";
p.textContent ="calculadora a=(20-0)/4";
r.textContent="";

d1.textContent = "Un tren reduce su velocidad de 60 km/h a 20 km/h en un tiempo de 8 segundos. Encontrar la aceleración";
da1.innerHTML = "velocidadinicial = 16m/s<br>velocidadfinal = 5.56 m/s<br>tiempo = 8 s";
f1.textContent = "aceleracion = (velocidadfinal - velocidadinicial) / tiempo";
p1.textContent = "calcular a=(5.56-16.67)/8";
r1.textContent = "";


console.log("descripcion:", d.textContent);
console.log("datos;", da.textContent);
console.log("calculo;", p.textContent);


function mostrar(){
r.textContent= "aceleracion = -1.39 m/^2";
console.log("resultado final:",r.textContent);
}


b.addEventListener("click", mostrar);
});
