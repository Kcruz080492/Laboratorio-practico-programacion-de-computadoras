let camisetas = 150
let pantalones = 20
let zapatos = 110

let totalproductos = camisetas+pantalones+zapatos

console.log("el total es de productos es "+totalproductos);

if (camisetas < 100 ){
  console.log("Es necesario más camisetas")
} if (pantalones < 100){
  console.log("Es necesario más pantalones")
} if (zapatos < 100){
  console.log("Es necesario más zapatos")
} 
if (camisetas >=100 && pantalones >=100 && zapatos >=100){
  console.log("Todos los productos están abastecidos")
}else{
  console.log("Algunos productos necesitan reposicion");
} 
